"use client";

import { Box, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowLeft, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { CPButton } from "@/components/ui/CPButton";

type Props = {
	clientId: string;
};

export const ClientDetail = ({ clientId }: Props) => {
	const router = useRouter();

	const handleBack = () => {
		router.push("/clients");
	};

	return (
		<Stack gap="xl">
			<Group>
				<CPButton variant="light" onClick={handleBack}>
					<IconArrowLeft size={16} />
					<Text ml="xs">戻る</Text>
				</CPButton>
			</Group>

			<Group>
				<IconUser size={32} />
				<Title order={2}>クライアント詳細</Title>
			</Group>

			<Box bg="#FAFAFA" p="xl" style={{ borderRadius: 12 }}>
				<Stack gap="md">
					<Text c="dimmed">クライアントID: {clientId}</Text>
					<Text c="dimmed">
						※ このページは現在開発中です。クライアントの詳細情報がここに表示されます。
					</Text>
				</Stack>
			</Box>
		</Stack>
	);
};
