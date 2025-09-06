"use client";

import { ActionIcon, Box, Group, NavLink, Stack, Text } from "@mantine/core";
import {
	IconCalendar,
	IconBook,
	IconSettings,
	IconUsers,
	IconX,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const navItems = [
	{
		label: "セッション",
		icon: IconCalendar,
		href: "/sessions",
	},
	{
		label: "クライアント",
		icon: IconUsers,
		href: "/clients",
	},
	{
		label: "教材一覧",
		icon: IconBook,
		href: "/trainingMaterial",
	},
	{
		label: "設定",
		icon: IconSettings,
		href: "/settings",
	},
];

type Props = {
	onToggle: () => void;
};

export const Sidebar = ({ onToggle }: Props) => {
	const pathname = usePathname();

	return (
		<Stack gap="sm" p="md">
			<Group justify="space-between" mb="lg">
				<Text fw={700} size="lg" c="blue">
					COMPASS
				</Text>
				<ActionIcon variant="subtle" onClick={onToggle} size="sm">
					<IconX size={16} />
				</ActionIcon>
			</Group>

			<Stack gap="xs">
				{navItems.map((item) => (
					<NavLink
						key={item.href}
						href={item.href}
						label={item.label}
						leftSection={<item.icon size="1rem" />}
						active={pathname.startsWith(item.href)}
						variant="filled"
					/>
				))}
			</Stack>
		</Stack>
	);
};
