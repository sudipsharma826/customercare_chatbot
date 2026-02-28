import scalekit from '@/lib/scalekit';
import crypto from 'crypto';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
export async function GET() {
  try {
    const state = crypto.randomBytes(16).toString('hex');
    (await cookies()).set('sk_state', state, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });
    const redirectUrl = process.env.SCALEKIT_REDIRECT_URI!;
    const options = {
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      state,
    };
    const authUrl = scalekit.getAuthorizationUrl(redirectUrl, options);
    return NextResponse.redirect(authUrl);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to generate authorization url' }, { status: 500 });
  }
}
