// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isAuthPage = req.nextUrl.pathname.startsWith("/auth/signin");
  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  // ✅ Block access to dashboard if not logged in
  if (!token && isDashboard) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  // ✅ Redirect logged-in user away from signin page
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/signin"],
};
