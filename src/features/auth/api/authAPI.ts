import { z } from "zod";
import { apiClient, type APIClient } from "@/lib/api/apiClient";

const authUserSchema = z.object({
	id: z.number(),
	key: z.string(),
	kind: z.number(),
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
});

export type AuthUser = z.infer<typeof authUserSchema>;

const meResponseSchema = z.object({
	user: authUserSchema.nullable(),
});

const loginResponseSchema = z.object({
	user: authUserSchema,
});

const logoutResponseSchema = z.object({
	success: z.boolean(),
});

type MeResponse = z.infer<typeof meResponseSchema>;
type LoginResponse = z.infer<typeof loginResponseSchema>;
type LogoutResponse = z.infer<typeof logoutResponseSchema>;

export type MeAPI = {
	me: () => Promise<MeResponse>;
};

export type LoginAPI = {
	login: (email: string, password: string) => Promise<LoginResponse>;
};

export type LogoutAPI = {
	logout: () => Promise<LogoutResponse>;
};

export type AuthAPI = MeAPI & LoginAPI & LogoutAPI;

export const createAuthApi = (client: APIClient): AuthAPI => ({
	me: () =>
		client.request({
			method: "GET",
			path: "/api/auth/me",
			schema: meResponseSchema,
		}),
	login: (email, password) =>
		client.request({
			method: "POST",
			path: "/api/auth/login",
			schema: loginResponseSchema,
			body: { email, password },
		}),
	logout: () =>
		client.request({
			method: "POST",
			path: "/api/auth/logout",
			schema: logoutResponseSchema,
		}),
});

export const defaultAuthAPI = createAuthApi(apiClient);
