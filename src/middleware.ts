import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const response = NextResponse.next();

	// GraphQL エンドポイント用のセキュリティヘッダー
	if (request.nextUrl.pathname.startsWith("/api/graphql")) {
		// セキュリティヘッダーを追加
		response.headers.set("X-Content-Type-Options", "nosniff");
		response.headers.set("X-Frame-Options", "DENY");
		response.headers.set("X-XSS-Protection", "1; mode=block");
		response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
		response.headers.set(
			"Permissions-Policy",
			"camera=(), microphone=(), geolocation=()",
		);

		// CSP (Content Security Policy) - GraphQL/GraphiQL用に調整
		const csp = [
			"default-src 'self'",
			"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com", // GraphiQL用CDN
			"style-src 'self' 'unsafe-inline' https://unpkg.com", // GraphiQL用CDN
			"img-src 'self' data: https:",
			"font-src 'self' data: https://unpkg.com", // GraphiQL用フォント
			"connect-src 'self'",
			"frame-ancestors 'none'",
			"base-uri 'self'",
			"form-action 'self'",
		].join("; ");

		response.headers.set("Content-Security-Policy", csp);

		// 本番環境では追加のセキュリティ
		if (process.env.NODE_ENV === "production") {
			response.headers.set(
				"Strict-Transport-Security",
				"max-age=31536000; includeSubDomains",
			);
		}
	}

	return response;
}

export const config = {
	matcher: [
		"/api/graphql/:path*",
		"/((?!_next/static|_next/image|favicon.ico).*)",
	],
};
