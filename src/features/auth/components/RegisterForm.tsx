"use client";

import {
	Anchor,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { CPButton } from "@/components/ui";
import { useForm } from "@mantine/form";
import { useState } from "react";
import {
	validateEmail,
	validateName,
	validatePassword,
	validatePasswordConfirmation,
} from "../utils/validation";

interface RegisterFormData {
	email: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
}

export function RegisterForm() {
	const [loading, setLoading] = useState(false);

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
			console.log("Registration data:", values);
			// TODO: Implement actual registration logic
		} catch (error) {
			console.error("Registration error:", error);
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

					<CPButton type="submit" fullWidth mt="xl" loading={loading}>
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
