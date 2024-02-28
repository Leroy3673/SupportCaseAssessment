// [...nextauth].js

/*
    Client instructions:

    A. Implement user authentication using NextJS authentication libraries.
    B. Securely store user credentials and validate logins.

*/

// 1. Import the next-auth library and essential components
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // 2. Configure authentication providers
  providers: [
    // 2A. Google authentication provider
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 2B. Facebook authentication provider
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),

    // 2C. GitHub authentication provider
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),


  ],

  // 3. Optional: Add custom callbacks, event handlers, etc.
  callbacks: {
    async signIn(user, account, profile) {
      // 3A. Custom sign-in logic
      console.log('User signed in:', user);
      return true; // Allow sign-in to proceed
    },
    async session(session, token) {
      // 3B. Custom session logic
      console.log('Session created:', session);
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      // 3C. Custom JWT token logic
      console.log('JWT token created:', token);
      return token;
    },
    
  },

  // 4. Optional: Add custom event handlers, etc.
  events: {
    async signIn(message) {
      // 4A. Custom sign-in event handling
      console.log('User signed in:', message);
    },
    async signOut(message) {
      // 4B. Custom sign-out event handling
      console.log('User signed out:', message);
    },
    // 4C. Add more custom event handlers as needed
  },
});

