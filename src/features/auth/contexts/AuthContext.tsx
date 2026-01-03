"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { APIError } from "@/lib/api/apiClient";
import { type AuthAPI, type AuthUser, defaultAuthAPI } from "../api/authAPI";

type AuthContextType = {
	user: AuthUser | null;
	loading: boolean;
	login: (email: string, password: string) => Promise<LoginResult>;
	logout: () => Promise<LogoutResult>;
	refetch: () => Promise<void>;
};

type LoginResult =
	| { success: true; user: AuthUser }
	| { success: false; error: string };

type LogoutResult = { success: true } | { success: false; error: string };

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
	children: React.ReactNode;
	authAPI?: AuthAPI; // テスト用にオプショナル
};

export function AuthProvider({
	children,
	authAPI = defaultAuthAPI,
}: AuthProviderProps) {
	const [user, setUser] = useState<AuthUser | null>(null);
	const [loading, setLoading] = useState(true);

	const fetchUser = useCallback(async () => {
		try {
			const data = await authAPI.me();
			setUser(data.user);
		} catch (error) {
			console.error("Failed to fetch user:", error);
			setUser(null);
		} finally {
			setLoading(false);
		}
	}, [authAPI]);

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	const login = useCallback(
		async (email: string, password: string): Promise<LoginResult> => {
			try {
				const data = await authAPI.login(email, password);
				setUser(data.user);
				return { success: true, user: data.user };
			} catch (error) {
				console.error("Login error:", error);
				if (error instanceof APIError) {
					const errorMessage = (error.errorData as { error?: string })?.error;
					return {
						success: false,
						error: errorMessage ?? "ログインに失敗しました",
					};
				}
				return { success: false, error: "ログインに失敗しました" };
			}
		},
		[authAPI],
	);

	const logout = useCallback(async (): Promise<LogoutResult> => {
		try {
			await authAPI.logout();
			setUser(null);
			return { success: true };
		} catch (error) {
			console.error("Logout error:", error);
			return { success: false, error: "ログアウトに失敗しました" };
		}
	}, [authAPI]);

	const refetch = useCallback(async () => {
		await fetchUser();
	}, [fetchUser]);

	return (
		<AuthContext.Provider value={{ user, loading, login, logout, refetch }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth(): AuthContextType {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
