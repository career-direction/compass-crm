"use client";

import {
	Box,
	Chip,
	Group,
	Modal,
	SimpleGrid,
	Space,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CPButton } from "@/components/ui/CPButton";
import { NewSessionModal } from "../components/NewSessionModal.ui";
import { SessionListItem } from "../components/SessionListItem.ui";

export const SessionList = () => {
	const [opened, { open, close }] = useDisclosure(false);

	const handleFilterClick = () => {
		console.log("フィルターボタンがクリックされました");
	};

	return (
		<>
			<Group justify="space-between" align="center" my="md">
				<Box>
					<Title>セッション一覧</Title>
				</Box>
				<Space></Space>
				<Group>
					<CPButton onClick={handleFilterClick}>フィルター</CPButton>
					<CPButton onClick={open}>セッション追加</CPButton>
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

			<Stack gap="md">
				<SessionListItem />
				<SessionListItem />
				<SessionListItem />
				<SessionListItem />
				<SessionListItem />
				<SessionListItem />
				<SessionListItem />
			</Stack>

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
