import axios from "axios";
import { NextAuthOptions,Awaitable } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { NextResponse } from "next/server";

type TokenResponse = {
  access?: string;
  refresh?: string;
};

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      }
      , async authorize(credentials, req) {
        const res = await fetch(process.env.DJANGOURL + "/api/social/login/", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()

        if (res.ok) {

          return user
        }
        return null

      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!!,
    }),
  ],
  session: {
    strategy: "jwt"
  },
  pages:{
    signIn: "/login"
  },
  //   signIn: "/auth/signin",
  // },
  callbacks: {
    async signIn({ user, account, email, profile }) {
      console.log(account?.provider);

      if (account?.provider == "google") {
        const { access_token, id_token } = account;
        console.log(account)
        // console.log(email)
        console.log(user)
        console.log(process.env.DJANGOURL)
        try {
          const response = await axios.post<TokenResponse>(
            process.env.DJANGOURL + "/api/social/google/",
            {
              // access_token: id_token,
              access_token: access_token,
              id_token: id_token,
              code: ""
            }
          );
          console.log(response)

          const tokken = response.data;
          user.accessToken = tokken.access;
          // console.log(user);
          // console.log("GAAA");
          // NextResponse.redirect("/dashboard")
          return true;
        } catch (error: any) {
          console.log("NOOO")
          try {
            if (error.code == "ERR_BAD_REQUEST") {
              const response = await axios.post<TokenResponse>(
                process.env.DJANGOURL + "/api/social/connect/google/connect/",
                {
                  // access_token: id_token,
                  access_token: access_token,
                  id_token: id_token,
                  code: ""
                }
              );
              const tokken = response.data;
              user.accessToken = tokken.access;
              // console.log(user);
              // console.log("GAAA");
              return true;
            }
          }
          catch (err) {
            return false
          }

          return false;
        }
      }
      else if (account?.provider == "credentials") {
        return true;
      }
      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        const { accessToken } = user;
        token.accessToken = accessToken;
      }
      return token;
    },
    async session({ session, user, token }) {
      // console.log(session);
      // console.log(token);
      session.user.accessToken = token.accessToken;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // console.log(url)
      // Allows relative callback URLs
      // if (url.startsWith("/")) return `${baseUrl}${url}`
      // // Allows callback URLs on the same origin
      // else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
}
export default authOptions
