"use client";

import {
	Avatar,
	Center,
	Group,
	Loader,
	Modal,
	Stack,
	Table,
	Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { CPButton } from "@/components/ui/CPButton";
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

	const handleRowClick = (id: number) => {
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

	const rows = clients.map((client) => (
		<Table.Tr
			key={client.id}
			onClick={() => handleRowClick(client.id)}
			style={{ cursor: "pointer" }}
		>
			<Table.Td>
				<Group gap="sm">
					<Avatar size={40} radius="xl" color="orange">
						<IconUser size={20} />
					</Avatar>
					<div>
						<Text size="sm" fw={500}>
							{client.name}
						</Text>
						<Text size="xs" c="dimmed">
							{client.nameKana}
						</Text>
					</div>
				</Group>
			</Table.Td>
			<Table.Td>
				<Text size="sm">{client.gender}</Text>
			</Table.Td>
			<Table.Td>
				<Text size="sm">{client.occupation || "未設定"}</Text>
			</Table.Td>
			<Table.Td>
				<Text size="sm">{client.hobby || "未設定"}</Text>
			</Table.Td>
		</Table.Tr>
	));

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
				<Table.ScrollContainer minWidth={600}>
					<Table verticalSpacing="sm" highlightOnHover>
						<Table.Thead>
							<Table.Tr>
								<Table.Th>クライアント</Table.Th>
								<Table.Th>性別</Table.Th>
								<Table.Th>職業</Table.Th>
								<Table.Th>趣味</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>{rows}</Table.Tbody>
					</Table>
				</Table.ScrollContainer>
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
