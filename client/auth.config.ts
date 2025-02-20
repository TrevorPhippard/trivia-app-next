import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    providers: [],
} satisfies NextAuthConfig


export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)