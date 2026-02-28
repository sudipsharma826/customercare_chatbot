import { db } from '@/db/client';
import scalekit from '@/lib/scalekit';
import { user as User } from '@/db/schema';
import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');
    if (error) {
      console.log('Error during authentication:', error, errorDescription);
      return NextResponse.json({ error: 'Authentication failed' }, { status: 400 });
    }
    if (!code) {
      return NextResponse.json({ error: 'Missing code' }, { status: 400 });
    }
    const redirectUri = process.env.SCALEKIT_REDIRECT_URI!;
    const authResponse = await scalekit.authenticateWithCode(code, redirectUri);
    const { user: UserData, idToken } = authResponse;
    //get the organization id from the id token
    const claims = await scalekit.validateToken(idToken);
    const org_id =
      (claims as any).organization_id || (claims as any).org_id || (claims as any).oid || null;

    if (!org_id) {
      console.log('Organization ID not found in token claims');
      return NextResponse.json({ error: 'Organization ID not found' }, { status: 400 });
    }

    const userEmail = UserData?.email;
    if (!userEmail) {
      return NextResponse.json({ error: 'User email not found' }, { status: 400 });
    }
    const exitingUser = await db.select().from(User).where(eq(User.email, userEmail));
    if (exitingUser.length === 0) {
      // user does not exist, insert into db
      await db.insert(User).values({
        name: UserData?.name || 'anonymous',
        email: userEmail,
        organization_id: org_id,
      });
    }
    const response = NextResponse.redirect(new URL('/', request.url));
    const userSession = {
      email: UserData?.email || null,
      organization_id: org_id,
      name: UserData?.name || null,
      image: UserData?.picture || null,
    };
    response.cookies.set('user_session', JSON.stringify(userSession), {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to authenticate user' }, { status: 500 });
  }
}
