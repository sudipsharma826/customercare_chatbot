import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import scalekit from "@/lib/scalekit";

export async function GET() {
  // Step 1: Extract the ID token from sk_state cookie (needed for Scalekit logout)
  const cookieStore = await cookies();
  const skState = cookieStore.get("sk_state");
  let idTokenHint = null;
  
  if (skState) {
    try {
      const sk = JSON.parse(skState.value);
      idTokenHint = sk.idToken || sk.id_token || null;
    } catch {
      idTokenHint = null;
    }
  }

  // Step 2: Define where to redirect after logout
  const baseUrl = process.env.SCALEKIT_LOGOUT_REDIRECT_URI || "http://localhost:3000";
  const postLogoutRedirectUri = `${baseUrl}/`; // or `${baseUrl}/login` if you prefer

  // Step 3: Generate the Scalekit logout URL (points to /oidc/logout endpoint)
//   const logoutUrl = scalekit.getLogoutUrl(
//     idTokenHint, // ID token to invalidate
//     postLogoutRedirectUri // URL that Scalekit redirects to after session invalidation
//   );
// Simple Logout Without SSO.

  // Step 4: Clear all session cookies AFTER generating logout URL
  cookieStore.delete('user_session');
  cookieStore.delete('sk_state');

  // Step 5: Redirect to Scalekit to invalidate the session
  return NextResponse.redirect(baseUrl);
}