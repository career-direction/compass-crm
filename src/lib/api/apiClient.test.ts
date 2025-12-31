import { beforeEach, describe, expect, test, vi } from "vitest";
import { z } from "zod";
import { APIError, APIParseError, createAPIClient } from "./apiClient";

// fetch をモック化
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("createAPIClient", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("GET リクエスト", () => {
		test("正常なレスポンスの場合、スキーマに従ってパースされたデータを返す", async () => {
			// Arrange
			const schema = z.object({ id: z.number(), name: z.string() });
			const expectedResult = { id: 1, name: "test" };
			mockFetch.mockResolvedValue({
				ok: true,
				json: () => Promise.resolve(expectedResult),
			});
			const client = createAPIClient();

			// Act
			const actualResult = await client.request({
				method: "GET",
				path: "/api/test",
				schema,
			});

			// Assert
			expect(actualResult).toEqual(expectedResult);
			expect(mockFetch).toHaveBeenCalledWith("/api/test", {
				headers: { "Content-Type": "application/json" },
				method: "GET",
			});
		});

		test("baseUrl が指定されている場合、パスに結合される", async () => {
			// Arrange
			const schema = z.object({ id: z.number() });
			mockFetch.mockResolvedValue({
				ok: true,
				json: () => Promise.resolve({ id: 1 }),
			});
			const client = createAPIClient("https://api.example.com");

			// Act
			await client.request({
				method: "GET",
				path: "/api/test",
				schema,
			});

			// Assert
			expect(mockFetch).toHaveBeenCalledWith(
				"https://api.example.com/api/test",
				expect.any(Object),
			);
		});
	});

	describe("POST リクエスト", () => {
		test("ボディ付きのPOSTリクエストを送信できる", async () => {
			// Arrange
			const schema = z.object({ success: z.boolean() });
			const requestBody = { email: "test@example.com", password: "password" };
			const expectedResult = { success: true };
			mockFetch.mockResolvedValue({
				ok: true,
				json: () => Promise.resolve(expectedResult),
			});
			const client = createAPIClient();

			// Act
			const actualResult = await client.request({
				method: "POST",
				path: "/api/login",
				schema,
				body: requestBody,
			});

			// Assert
			expect(actualResult).toEqual(expectedResult);
			expect(mockFetch).toHaveBeenCalledWith("/api/login", {
				headers: { "Content-Type": "application/json" },
				method: "POST",
				body: JSON.stringify(requestBody),
			});
		});

		test("ボディなしのPOSTリクエストを送信できる", async () => {
			// Arrange
			const schema = z.object({ success: z.boolean() });
			mockFetch.mockResolvedValue({
				ok: true,
				json: () => Promise.resolve({ success: true }),
			});
			const client = createAPIClient();

			// Act
			await client.request({
				method: "POST",
				path: "/api/logout",
				schema,
			});

			// Assert
			expect(mockFetch).toHaveBeenCalledWith("/api/logout", {
				headers: { "Content-Type": "application/json" },
				method: "POST",
				body: undefined,
			});
		});
	});

	describe("PUT リクエスト", () => {
		test("ボディ付きのPUTリクエストを送信できる", async () => {
			// Arrange
			const schema = z.object({ id: z.number(), name: z.string() });
			const requestBody = { name: "updated" };
			const expectedResult = { id: 1, name: "updated" };
			mockFetch.mockResolvedValue({
				ok: true,
				json: () => Promise.resolve(expectedResult),
			});
			const client = createAPIClient();

			// Act
			const actualResult = await client.request({
				method: "PUT",
				path: "/api/users/1",
				schema,
				body: requestBody,
			});

			// Assert
			expect(actualResult).toEqual(expectedResult);
			expect(mockFetch).toHaveBeenCalledWith("/api/users/1", {
				headers: { "Content-Type": "application/json" },
				method: "PUT",
				body: JSON.stringify(requestBody),
			});
		});
	});

	describe("DELETE リクエスト", () => {
		test("DELETEリクエストを送信できる", async () => {
			// Arrange
			const schema = z.object({ success: z.boolean() });
			const expectedResult = { success: true };
			mockFetch.mockResolvedValue({
				ok: true,
				json: () => Promise.resolve(expectedResult),
			});
			const client = createAPIClient();

			// Act
			const actualResult = await client.request({
				method: "DELETE",
				path: "/api/users/1",
				schema,
			});

			// Assert
			expect(actualResult).toEqual(expectedResult);
			expect(mockFetch).toHaveBeenCalledWith("/api/users/1", {
				headers: { "Content-Type": "application/json" },
				method: "DELETE",
			});
		});
	});

	describe("エラーハンドリング", () => {
		test("レスポンスが ok でない場合、APIError をスローする", async () => {
			// Arrange
			const schema = z.object({ id: z.number() });
			const errorData = { error: "Not Found" };
			mockFetch.mockResolvedValue({
				ok: false,
				status: 404,
				json: () => Promise.resolve(errorData),
			});
			const client = createAPIClient();

			// Act & Assert
			await expect(
				client.request({ method: "GET", path: "/api/not-found", schema }),
			).rejects.toThrow(APIError);

			try {
				await client.request({ method: "GET", path: "/api/not-found", schema });
			} catch (error) {
				expect(error).toBeInstanceOf(APIError);
				expect((error as APIError).statusCode).toBe(404);
				expect((error as APIError).errorData).toEqual(errorData);
			}
		});

		test("レスポンスがスキーマに一致しない場合、APIParseError をスローする", async () => {
			// Arrange
			const schema = z.object({ id: z.number(), name: z.string() });
			// string 型を期待するところが number 型になってしまった場合。
			const invalidData = { id: "not-a-number", name: 123 };
			mockFetch.mockResolvedValue({
				ok: true,
				json: () => Promise.resolve(invalidData),
			});
			const client = createAPIClient();

			// Act & Assert
			await expect(
				client.request({ method: "GET", path: "/api/test", schema }),
			).rejects.toThrow(APIParseError);

			try {
				await client.request({ method: "GET", path: "/api/test", schema });
			} catch (error) {
				expect(error).toBeInstanceOf(APIParseError);
				expect((error as APIParseError).path).toBe("/api/test");
				expect((error as APIParseError).parseError).toBeDefined();
			}
		});

		test("レスポンスに必須フィールドがない場合、APIParseError をスローする", async () => {
			// Arrange
			const schema = z.object({ id: z.number(), name: z.string() });
			const incompleteData = { id: 1 }; // name がない
			mockFetch.mockResolvedValue({
				ok: true,
				json: () => Promise.resolve(incompleteData),
			});
			const client = createAPIClient();

			// Act & Assert
			await expect(
				client.request({ method: "GET", path: "/api/test", schema }),
			).rejects.toThrow(APIParseError);
		});

		test("fetch がネットワークエラーをスローした場合、そのエラーがそのままスローされる", async () => {
			// Arrange
			const schema = z.object({ id: z.number() });
			mockFetch.mockRejectedValue(new Error("Network error"));
			const client = createAPIClient();

			// Act & Assert
			await expect(
				client.request({ method: "GET", path: "/api/test", schema }),
			).rejects.toThrow("Network error");
		});
	});
});
