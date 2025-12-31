import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import type { AuthApi } from "../api/authApi";
import { AuthProvider, useAuth } from "./AuthContext";

describe("AuthProvider", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("logout", () => {
		test("ログアウト成功時、success: true を返しユーザー状態がnullになる", async () => {
			// Arrange
			const mockAuthApi: AuthApi = {
				me: vi.fn().mockResolvedValue({
					user: { id: 1, email: "test@example.com" },
				}),
				login: vi.fn(),
				logout: vi.fn().mockResolvedValue({ success: true }),
			};

			const wrapper = ({ children }: { children: React.ReactNode }) => (
				<AuthProvider authApi={mockAuthApi}>{children}</AuthProvider>
			);
			const { result } = renderHook(() => useAuth(), { wrapper });

			await waitFor(() => {
				expect(result.current.loading).toBe(false);
			});

			// Act
			const logoutResult = await result.current.logout();

			// Assert
			expect(logoutResult).toEqual({ success: true });
			await waitFor(() => {
				expect(result.current.user).toBeNull();
			});
			expect(mockAuthApi.logout).toHaveBeenCalledTimes(1);
		});

		test("ログアウト失敗時、success: false とエラーメッセージを返す", async () => {
			// Arrange
			const mockAuthApi: AuthApi = {
				me: vi.fn().mockResolvedValue({
					user: { id: 1, email: "test@example.com" },
				}),
				login: vi.fn(),
				logout: vi.fn().mockRejectedValue(new Error("Network error")),
			};

			const wrapper = ({ children }: { children: React.ReactNode }) => (
				<AuthProvider authApi={mockAuthApi}>{children}</AuthProvider>
			);
			const { result } = renderHook(() => useAuth(), { wrapper });

			await waitFor(() => {
				expect(result.current.loading).toBe(false);
			});

			// Act
			const logoutResult = await result.current.logout();

			// Assert
			expect(logoutResult).toEqual({
				success: false,
				error: "ログアウトに失敗しました",
			});
		});
	});

	describe("login", () => {
		test("ログイン成功時、success: true とユーザー情報を返す", async () => {
			// Arrange
			const mockUser = {
				id: 1,
				key: "abc",
				kind: 1,
				firstName: "太郎",
				lastName: "山田",
				email: "test@example.com",
			};
			const mockAuthApi: AuthApi = {
				me: vi.fn().mockResolvedValue({ user: null }),
				login: vi.fn().mockResolvedValue({ user: mockUser }),
				logout: vi.fn(),
			};

			const wrapper = ({ children }: { children: React.ReactNode }) => (
				<AuthProvider authApi={mockAuthApi}>{children}</AuthProvider>
			);
			const { result } = renderHook(() => useAuth(), { wrapper });

			await waitFor(() => {
				expect(result.current.loading).toBe(false);
			});

			// Act
			const loginResult = await result.current.login(
				"test@example.com",
				"password",
			);

			// Assert
			expect(loginResult).toEqual({ success: true, user: mockUser });
			await waitFor(() => {
				expect(result.current.user).toEqual(mockUser);
			});
			expect(mockAuthApi.login).toHaveBeenCalledWith(
				"test@example.com",
				"password",
			);
		});

		test("ログイン失敗時、success: false とエラーメッセージを返す", async () => {
			// Arrange
			const { APIError } = await import("@/lib/api/apiClient");
			const mockAuthApi: AuthApi = {
				me: vi.fn().mockResolvedValue({ user: null }),
				login: vi
					.fn()
					.mockRejectedValue(
						new APIError(401, { error: "認証に失敗しました" }),
					),
				logout: vi.fn(),
			};

			const wrapper = ({ children }: { children: React.ReactNode }) => (
				<AuthProvider authApi={mockAuthApi}>{children}</AuthProvider>
			);
			const { result } = renderHook(() => useAuth(), { wrapper });

			await waitFor(() => {
				expect(result.current.loading).toBe(false);
			});

			// Act
			const loginResult = await result.current.login(
				"test@example.com",
				"wrong",
			);

			// Assert
			expect(loginResult).toEqual({
				success: false,
				error: "認証に失敗しました",
			});
			expect(result.current.user).toBeNull();
		});
	});

	describe("useAuth", () => {
		test("AuthProvider外で使用するとエラーをthrowする", () => {
			// Arrange & Act & Assert
			expect(() => {
				renderHook(() => useAuth());
			}).toThrow("useAuth must be used within an AuthProvider");
		});
	});
});
