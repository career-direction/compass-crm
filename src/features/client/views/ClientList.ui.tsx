"use client";

import {
	Center,
	Group,
	Loader,
	Modal,
	SimpleGrid,
	Stack,
	Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { CPButton } from "@/components/ui/CPButton";
import { CPCard } from "@/components/ui/CPCard";
import { NewClientModal } from "../components/NewClientModal.container";
import type { ClientType } from "../types/client";

type ClientListUIProps = {
	clients: ClientType[];
	fetching: boolean;
	error?: string;
	onAddSuccess: () => void;
};

export const ClientListUI = ({
	clients,
	fetching,
	error,
	onAddSuccess,
}: ClientListUIProps) => {
	const router = useRouter();
	const [opened, { open, close }] = useDisclosure(false);

	const handleCardClick = (id: number) => {
		router.push(`/clients/${id}`);
	};

	const handleClose = () => {
		close();
		onAddSuccess();
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

	return (
		<Stack gap="xl">
			<Group justify="space-between" align="center">
				<CPButton onClick={open}>新規クライアント登録</CPButton>
			</Group>

			{clients.length === 0 ? (
				<Center h={200}>
					<Text c="dimmed">クライアントがいません</Text>
				</Center>
			) : (
				<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
					{clients.map((client) => (
						<CPCard
							key={client.id}
							onClick={() => handleCardClick(client.id)}
							style={{ cursor: "pointer" }}
						>
							<Group justify="space-between" mb="sm">
								<Group>
									<IconUser size={24} />
									<Text fw={600}>{client.name}</Text>
								</Group>
							</Group>

							<Stack gap="xs" mb="md">
								<Text size="sm" c="dimmed">
									{client.nameKana}
								</Text>
								<Text size="sm" c="dimmed">
									職業: {client.occupation || "未設定"}
								</Text>
								<Text size="sm" c="dimmed">
									趣味: {client.hobby || "未設定"}
								</Text>
								<Text size="sm" c="dimmed">
									性別: {client.gender}
								</Text>
							</Stack>
						</CPCard>
					))}
				</SimpleGrid>
			)}

			{/* クライアント追加モーダル */}
			<Modal
				opened={opened}
				onClose={close}
				title="新規クライアント登録"
				centered
				size="lg"
			>
				<NewClientModal onClose={handleClose} />
			</Modal>
		</Stack>
	);
};
