"use client";

import { Container, Title, Text, Card, Group, Badge, Stack, Flex } from "@mantine/core";
import { IconClock, IconHourglass, IconTarget, IconUser } from "@tabler/icons-react";

type Props = {
	sessionId: string;
};

export const SessionDetail = ({ sessionId }: Props) => {
	return (
		<Container size="md" py="xl">
			<Stack gap="xl">
				<div>
					<Title order={1} mb="sm">
						セッション詳細
					</Title>
					<Text c="dimmed">セッションID: {sessionId}</Text>
				</div>

				<Card shadow="sm" padding="xl" radius="md" withBorder>
					<Group justify="space-between" mb="lg">
						<div>
							<Text fw={600} size="lg">
								田中太郎
							</Text>
							<Text size="sm" c="dimmed" mt="xs">
								担当トレーナー: 山田次郎
							</Text>
						</div>
						<Badge color="green" size="lg">
							予定
						</Badge>
					</Group>

					<Stack gap="md" mb="xl">
						<Flex align="center" gap="sm">
							<IconTarget size={20} />
							<div>
								<Text fw={500} size="sm" c="dimmed">
									セッションテーマ
								</Text>
								<Text fw={500}>肩こり改善</Text>
							</div>
						</Flex>

						<Flex align="center" gap="sm">
							<IconClock size={20} />
							<div>
								<Text fw={500} size="sm" c="dimmed">
									開始時間
								</Text>
								<Text fw={500}>14:00</Text>
							</div>
						</Flex>

						<Flex align="center" gap="sm">
							<IconHourglass size={20} />
							<div>
								<Text fw={500} size="sm" c="dimmed">
									セッション時間
								</Text>
								<Text fw={500}>60分</Text>
							</div>
						</Flex>

						<Flex align="center" gap="sm">
							<IconUser size={20} />
							<div>
								<Text fw={500} size="sm" c="dimmed">
									クライアント情報
								</Text>
								<Text fw={500}>田中太郎（初回セッション）</Text>
							</div>
						</Flex>
					</Stack>

					<div>
						<Text fw={500} mb="sm">
							セッション内容
						</Text>
						<Text size="sm" c="dimmed">
							肩こり改善のためのストレッチとマッサージを中心としたセッションを予定しています。
							クライアントの現在の状態をヒアリングし、最適なアプローチを検討します。
						</Text>
					</div>
				</Card>
			</Stack>
		</Container>
	);
};