import {
	Button,
	Card,
	Text,
	Image,
	Group,
	Badge,
	Stack,
	Flex,
} from "@mantine/core";
import { IconClock, IconHourglass, IconTarget } from "@tabler/icons-react";

export const SessionListItem = () => {
	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Group justify="space-between" mt="xs" mb="xs">
				<div>
					<Text fw={500}>田中太郎</Text>
					<Text size="sm" c="dimmed">
						担当トレーナー: 山田次郎
					</Text>
				</div>
				<Badge color="gray">予定</Badge>
			</Group>

			<Stack gap="xs" mb="md">
				<Flex align="center" gap="xs" mb="xs">
					<IconTarget size={16} />
					<Text size="sm" fw={500}>
						テーマ: 肩こり改善
					</Text>
				</Flex>
				<Flex gap="md">
					<Flex align="center" gap="xs">
						<IconClock size={16} />
						<Text size="sm" fw={500}>
							開始時間: 14:00
						</Text>
					</Flex>
					<Flex align="center" gap="xs">
						<IconHourglass size={16} />
						<Text size="sm" fw={500}>
							セッション時間: 60分
						</Text>
					</Flex>
				</Flex>
			</Stack>
		</Card>
	);
};
