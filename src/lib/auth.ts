import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "#/db";
import { tanstackStartCookies } from "better-auth/tanstack-start";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql", // or "mysql", "postgresql", ...etc
	}),
	plugins: [tanstackStartCookies()],
	baseURL: "http://localhost:3000/",
	emailAndPassword: { enabled: true, requireEmailVerification: false },
});
