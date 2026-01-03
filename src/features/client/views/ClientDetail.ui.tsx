"use client";

import { Box, Center, Group, Loader, Stack, Text, Title } from "@mantine/core";
import { IconArrowLeft, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { CPButton } from "@/components/ui/CPButton";
import type { ClientType } from "../types/client";

type Props = {
	client: ClientType | null;
	fetching: boolean;
	error?: string;
};

export const ClientDetailUI = ({ client, fetching, error }: Props) => {
	const router = useRouter();

	const handleBack = () => {
		router.push("/clients");
	};

	if (fetching) {
		return (
			<Center h={200}>
				<Loader />
			</Center>
		);
	}

	if (error) {
		return (
			<Center h={200}>
				<Text c="red">{error}</Text>
			</Center>
		);
	}

	if (!client) {
		return (
			<Stack gap="xl">
				<Group>
					<CPButton variant="light" onClick={handleBack}>
						<IconArrowLeft size={16} />
						<Text ml="xs">戻る</Text>
					</CPButton>
				</Group>
				<Center h={200}>
					<Text c="dimmed">クライアントが見つかりません</Text>
				</Center>
			</Stack>
		);
	}

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
				<Title order={2}>{client.name}</Title>
			</Group>

			<Box bg="#FAFAFA" p="xl" style={{ borderRadius: 12 }}>
				<Stack gap="md">
					<Group>
						<Text fw={600} w={100}>
							カナ名
						</Text>
						<Text>{client.nameKana}</Text>
					</Group>
					<Group>
						<Text fw={600} w={100}>
							性別
						</Text>
						<Text>{client.gender}</Text>
					</Group>
					<Group>
						<Text fw={600} w={100}>
							職業
						</Text>
						<Text>{client.occupation || "未設定"}</Text>
					</Group>
					<Group>
						<Text fw={600} w={100}>
							趣味
						</Text>
						<Text>{client.hobby || "未設定"}</Text>
					</Group>
				</Stack>
			</Box>
		</Stack>
	);
};
