// import axios from "axios";
import { AuthOptions,NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import authOptions from "@/app/lib/auth"


const handler = NextAuth(authOptions)
export {handler as GET,handler as POST}
