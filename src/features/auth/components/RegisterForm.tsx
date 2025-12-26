"use client";

import {
	Anchor,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CPButton } from "@/components/ui/CPButton";
import { useAuth } from "../contexts/AuthContext";
import {
	validateEmail,
	validateName,
	validatePassword,
	validatePasswordConfirmation,
} from "../utils/validation";

type RegisterFormData = {
	email: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
};

export function RegisterForm() {
	const [loading, setLoading] = useState(false);
	const { refetch } = useAuth();
	const router = useRouter();

	const form = useForm<RegisterFormData>({
		initialValues: {
			email: "",
			password: "",
			confirmPassword: "",
			firstName: "",
			lastName: "",
		},

		validate: {
			email: validateEmail,
			password: validatePassword,
			confirmPassword: (value: string, values: RegisterFormData) =>
				validatePasswordConfirmation(values.password, value),
			firstName: (value: string) => validateName(value, "姓"),
			lastName: (value: string) => validateName(value, "名"),
		},
	});

	const handleSubmit = async (values: RegisterFormData) => {
		setLoading(true);
		try {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: values.email,
					password: values.password,
					firstName: values.firstName,
					lastName: values.lastName,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				notifications.show({
					title: "登録失敗",
					message: data.error,
					color: "red",
				});
				return;
			}

			// 認証状態を更新
			await refetch();

			notifications.show({
				title: "登録完了",
				message: `${data.user.lastName} ${data.user.firstName}さん、ようこそ！`,
				color: "green",
			});

			router.push("/");
		} catch (error) {
			console.error("Registration error:", error);
			notifications.show({
				title: "エラー",
				message: "アカウント作成中にエラーが発生しました",
				color: "red",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Title ta="center" mb={30}>
				アカウント作成
			</Title>

			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Stack gap="md">
					<TextInput
						label="姓"
						placeholder="姓を入力してください"
						required
						{...form.getInputProps("firstName")}
					/>

					<TextInput
						label="名"
						placeholder="名を入力してください"
						required
						{...form.getInputProps("lastName")}
					/>

					<TextInput
						label="メールアドレス"
						placeholder="メールアドレスを入力してください"
						required
						{...form.getInputProps("email")}
					/>

					<PasswordInput
						label="パスワード"
						placeholder="パスワードを入力してください"
						required
						{...form.getInputProps("password")}
					/>

					<PasswordInput
						label="パスワード確認"
						placeholder="パスワードを再入力してください"
						required
						{...form.getInputProps("confirmPassword")}
					/>

					<CPButton fullWidth mt="xl" loading={loading} type="submit">
						アカウント作成
					</CPButton>
				</Stack>
			</form>

			<Text ta="center" mt="md">
				すでにアカウントをお持ちですか？{" "}
				<Anchor href="/login" size="sm">
					ログイン
				</Anchor>
			</Text>
		</>
	);
}
