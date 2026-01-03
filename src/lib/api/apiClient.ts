import type { z } from "zod";

type GetRequest<T> = {
	method: "GET";
	path: string;
	schema: z.ZodType<T>;
};

type PostRequest<T, B> = {
	method: "POST";
	path: string;
	schema: z.ZodType<T>;
	body?: B;
};

type PutRequest<T, B> = {
	method: "PUT";
	path: string;
	schema: z.ZodType<T>;
	body: B;
};

type DeleteRequest<T> = {
	method: "DELETE";
	path: string;
	schema: z.ZodType<T>;
};

export type APIRequest<T, B = unknown> =
	| GetRequest<T>
	| PostRequest<T, B>
	| PutRequest<T, B>
	| DeleteRequest<T>;

export type APIClient = {
	request: <T, B = unknown>(req: APIRequest<T, B>) => Promise<T>;
};

export class APIError extends Error {
	constructor(
		public statusCode: number,
		public errorData: unknown,
	) {
		super(`API Error: ${statusCode}`);
		this.name = "APIError";
	}
}

export class APIParseError extends Error {
	constructor(
		public path: string,
		public parseError: z.ZodError,
	) {
		super(`API Parse Error at ${path}: ${parseError.message}`);
		this.name = "APIParseError";
	}
}

export const createAPIClient = (baseUrl = ""): APIClient => {
	const request = async <T, B = unknown>(req: APIRequest<T, B>): Promise<T> => {
		const options: RequestInit = {
			method: req.method,
			headers: {
				"Content-Type": "application/json",
			},
		};

		// body があるメソッドのみ body を設定
		if (req.method === "POST") {
			options.body = req.body ? JSON.stringify(req.body) : undefined;
		} else if (req.method === "PUT") {
			options.body = JSON.stringify(req.body);
		}

		const response = await fetch(`${baseUrl}${req.path}`, options);
		const data = await response.json();

		if (!response.ok) {
			throw new APIError(response.status, data);
		}

		const result = req.schema.safeParse(data);
		if (!result.success) {
			throw new APIParseError(req.path, result.error);
		}

		return result.data;
	};

	return { request };
};

export const apiClient = createAPIClient();
