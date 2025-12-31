"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

export type AuthUser = {
	id: number;
	key: string;
	kind: number;
	firstName: string;
	lastName: string;
	email: string;
};

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
};

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<AuthUser | null>(null);
	const [loading, setLoading] = useState(true);

	const fetchUser = useCallback(async () => {
		try {
			const response = await fetch("/api/auth/me");
			const data = await response.json();
			setUser(data.user);
		} catch (error) {
			console.error("Failed to fetch user:", error);
			setUser(null);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	const login = useCallback(
		async (email: string, password: string): Promise<LoginResult> => {
			try {
				const response = await fetch("/api/auth/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				});

				const data = await response.json();

				if (!response.ok) {
					return { success: false, error: data.error };
				}

				setUser(data.user);
				return { success: true, user: data.user };
			} catch (error) {
				console.error("Login error:", error);
				return { success: false, error: "ログインに失敗しました" };
			}
		},
		[],
	);

	const logout = useCallback(async (): Promise<LogoutResult> => {
		try {
			await fetch("/api/auth/logout", { method: "POST" });
			setUser(null);
			return { success: true };
		} catch (error) {
			console.error("Logout error:", error);
			return { success: false, error: "ログアウトに失敗しました" };
		}
	}, []);

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
