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
    signIn: "/auth/signin", // custom sign in page
    // you can also specify `redirect` logic after login in callbacks
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Always redirect to dashboard after sign in
      return `${baseUrl}/dashboard`;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, // Add this for security
});


export { handler as GET, handler as POST };
