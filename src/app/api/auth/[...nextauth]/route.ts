import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    // Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // Custom credentials login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this logic with real DB check
        const user = {
          id: "1",
          name: "Admin User",
          username: "admin",
          password: "admin123", // ❗ Never hardcode in real projects
        };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user; // ✅ success → user redirected to /dashboard
        }

        return null; // ❌ failure → res?.error will be set
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin", // your custom login route
    signOut: "/",           // where to go after sign-out
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.includes("/admin")) {
        return `${baseUrl}/admin`;
      }
      return `${baseUrl}/dashboard`; // ✅ default after login
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
