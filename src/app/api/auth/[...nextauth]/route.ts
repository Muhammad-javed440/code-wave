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
    signIn: "/auth/signin",   // custom sign-in page
    signOut: "/",             // redirect to homepage after sign-out
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.includes("/admin")) {
        return `${baseUrl}/admin`;
      }
      return `${baseUrl}/dashboard`;  // default after sign-in
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
