// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isAuthPage = req.nextUrl.pathname.startsWith("/auth/signin");

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();
}

// 🔒 Protect these routes:
export const config = {
  matcher: ["/dashboard/:path*", "/auth/signin"],
};
