import { Button, Card, Text, Image, Group, Badge } from "@mantine/core";

export const SessionListItem = () => {
	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Group justify="space-between" mt="xs" mb="xs">
				<Text fw={500}>田中太郎</Text>
				<Badge color="gray">予定</Badge>
			</Group>

			<Text size="sm" c="dimmed">
				With Fjord Tours you can explore more of the magical fjord landscapes
				with tours and activities on and around the fjords of Norway
			</Text>
		</Card>
	);
};
