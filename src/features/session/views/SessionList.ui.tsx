"use client";

import {
	Box,
	Button,
	Group,
	List,
	Space,
	Title,
	Text,
	SimpleGrid,
	Chip,
	Modal,
} from "@mantine/core";

import { SessionListItem } from "../components/SessionListItem.ui";
import { useDisclosure } from "@mantine/hooks";
import { NewSessionModal } from "../components/NewSessionModal.ui";

export const SessionList = () => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Group justify="space-between" align="center" my="md">
				<Box>
					<Title>セッション一覧</Title>
				</Box>
				<Space></Space>
				<Group>
					<Button>フィルター</Button>
					<Button onClick={open}>セッション追加</Button>
				</Group>
			</Group>

			{/* フィルター条件 */}
			<Group mb="md" align="start">
				<Text>フィルター条件:</Text>
				<SimpleGrid cols={5}>
					<Chip defaultChecked>Awesome chip</Chip>
					<Chip defaultChecked>Awesome chip</Chip>
					<Chip defaultChecked>Awesome chip</Chip>
					<Chip defaultChecked>Awesome chip</Chip>
					<Chip defaultChecked>Awesome chip</Chip>
					<Chip defaultChecked>Awesome chip</Chip>
				</SimpleGrid>
			</Group>

			<List>
				<List.Item>
					<SessionListItem />
				</List.Item>
				<List.Item>
					<SessionListItem />
				</List.Item>
			</List>

			{/* セッション追加モーダル */}
			<Modal
				opened={opened}
				onClose={close}
				title="新しいセッション"
				centered
				size="lg"
			>
				<NewSessionModal />
			</Modal>
		</>
	);
};
