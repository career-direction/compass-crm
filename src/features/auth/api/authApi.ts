import { z } from "zod";
import type { APIClient } from "@/lib/api/apiClient";

// AuthUser スキーマ
const authUserSchema = z.object({
	id: z.number(),
	key: z.string(),
	kind: z.number(),
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
});

export type AuthUser = z.infer<typeof authUserSchema>;

// レスポンススキーマ
const meResponseSchema = z.object({
	user: authUserSchema.nullable(),
});

const loginResponseSchema = z.object({
	user: authUserSchema,
});

const logoutResponseSchema = z.object({
	success: z.boolean(),
});

// Auth API のレスポンス型
type MeResponse = z.infer<typeof meResponseSchema>;
type LoginResponse = z.infer<typeof loginResponseSchema>;
type LogoutResponse = z.infer<typeof logoutResponseSchema>;

// Auth API の操作を定義
export type AuthApi = {
	me: () => Promise<MeResponse>;
	login: (email: string, password: string) => Promise<LoginResponse>;
	logout: () => Promise<LogoutResponse>;
};

// APIClient を受け取って AuthApi を生成
export const createAuthApi = (client: APIClient): AuthApi => ({
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
