"use client";

import {
	Avatar,
	Badge,
	Box,
	Chip,
	Flex,
	Group,
	Modal,
	SimpleGrid,
	Space,
	Table,
	Text,
	Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CPButton } from "@/components/ui/CPButton";
import { NewSessionModal } from "../components/NewSessionModal.ui";
import { useRouter } from "next/navigation";

const elements = [
	{ position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
	{ position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
	{ position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
	{ position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
	{ position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

export const SessionList = () => {
	const [opened, { open, close }] = useDisclosure(false);

	const handleFilterClick = () => {
		console.log("フィルターボタンがクリックされました");
	};

	const MAX_TABLE_HEIGHT = 800;
	const MIN_TABLE_WIDTH = 600;

	const router = useRouter();

	const handleClick = () => {
		router.push("/sessions/1"); // TODO: 実際のセッションIDを使用
	};

	const rows = elements.map((element) => (
		<Table.Tr
			key={element.name}
			onClick={handleClick}
			style={{ cursor: "pointer" }}
		>
			<Table.Td>{element.name}</Table.Td>
			<Table.Td>肩甲骨の外旋</Table.Td>
			<Table.Td>
				<Flex align="center" gap="lg" justify="flex-start">
					<Avatar color="cyan" radius="xl">
						MK
					</Avatar>
					<Text>{element.name}</Text>
				</Flex>
			</Table.Td>
			<Table.Td>16:00 ~ 17:00</Table.Td>
			<Table.Td>
				<Badge variant="light" color="blue">
					予定
				</Badge>
			</Table.Td>
		</Table.Tr>
	));

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

			<Table.ScrollContainer
				type="native"
				maxHeight={MAX_TABLE_HEIGHT}
				minWidth={MIN_TABLE_WIDTH}
			>
				<Table horizontalSpacing="xl" verticalSpacing="lg">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>クライアント名</Table.Th>
							<Table.Th>セッションゴール</Table.Th>
							<Table.Th>担当トレーナー</Table.Th>
							<Table.Th>セッション時間</Table.Th>
							<Table.Th>ステータス</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{rows}</Table.Tbody>
				</Table>
			</Table.ScrollContainer>

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
