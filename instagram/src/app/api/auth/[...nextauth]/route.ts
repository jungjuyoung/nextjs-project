import { addUser } from "@/service/user"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler: NextAuthOptions = NextAuth({
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
      addUser({ email, image, name: name || '', id, username: email.split('@')[0] })
      return true
    },
    async session({ session }) {
      console.log('session', session)
      const user = session?.user
      if (user) {
        session.user = {
          ...user,
          username: user?.email?.split('@')[0] || ''
        }
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
})
export { handler as GET, handler as POST, handler };