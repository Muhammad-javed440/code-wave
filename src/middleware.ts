// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

      // ✅ Allow admin to access /admin
      if (isAdminRoute) {
        return token?.role === "admin";
      }

      // ✅ Allow logged-in users to access all other protected routes
      return !!token;
    },
  },
  pages: {
    signIn: "/auth/signin",         // If not logged in
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
