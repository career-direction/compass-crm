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
import { IconPlus, IconUser } from "@tabler/icons-react";
import { CPButton } from "@/components/ui/CPButton";
import { NewClientModal } from "../components/NewClientModal.container";
import type { ClientType } from "../types/client";

type ClientListUIProps = {
	clients: ClientType[];
	fetching: boolean;
	error?: string;
	modalOpened: boolean;
	onRowClick: (id: number) => void;
	onOpenModal: () => void;
	onCloseModal: () => void;
};

export const ClientListUI = ({
	clients,
	fetching,
	error,
	modalOpened,
	onRowClick,
	onOpenModal,
	onCloseModal,
}: ClientListUIProps) => {

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
			onClick={() => onRowClick(client.id)}
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
		<Stack>
			<Group justify="space-between" align="center">
				<Text fw={600} size="lg">
					クライアント一覧
				</Text>
				<CPButton onClick={onOpenModal} prefixIcon={<IconPlus size={16} />}>
					新規クライアント
				</CPButton>
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
								<Table.Th>名前</Table.Th>
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
				opened={modalOpened}
				onClose={onCloseModal}
				title="新規クライアント登録"
				centered
				size="lg"
			>
				<NewClientModal onClose={onCloseModal} />
			</Modal>
		</Stack>
	);
};
