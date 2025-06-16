import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/auth/signin", // custom sign-in page
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      // If redirecting to /admin, allow it
      if (url.includes("/admin")) {
        return `${baseUrl}/admin`;
      }

      // Default redirect to /dashboard
      return `${baseUrl}/dashboard`;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
