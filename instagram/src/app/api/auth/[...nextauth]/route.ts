import { addUser } from "@/service/user"
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user: { id, name, email, image } }) {
      if (!email) {
        return false
      }
      addUser({
        id,
        name: name || '',
        email,
        image,
        username: email.split('@')[0],
      })
      return true
    },
    async session({ session, token }) {
      const user = session?.user
      if (user) {
        session.user = {
          ...user,
          id: token.id as string,
          username: user.email?.split('@')[0] || ''
        }
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    }
  },
  pages: {
    signIn: '/auth/signin',
  }
}

const handler: NextAuthOptions = NextAuth(authOptions);
export { handler as POST, handler as GET }