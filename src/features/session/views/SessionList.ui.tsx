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
} from "@mantine/core";
import { SessionListItem } from "../components/SessionListItem.ui";

export const SessionList = () => {
	return (
		<>
			<Group justify="space-between" align="center" my="md">
				<Box>
					<Title>セッション一覧</Title>
				</Box>
				<Space></Space>
				<Group>
					<Button>フィルター</Button>
					<Button>セッション追加</Button>
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
		</>
	);
};
