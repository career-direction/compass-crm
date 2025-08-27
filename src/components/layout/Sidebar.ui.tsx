"use client";

import { NavLink, Stack, Text, Group, Box } from "@mantine/core";
import { IconCalendar, IconUsers, IconSettings } from "@tabler/icons-react";
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
		label: "設定",
		icon: IconSettings,
		href: "/settings",
	},
];

export const Sidebar = () => {
	const pathname = usePathname();

	return (
		<Stack gap="sm" p="md">
			<Box mb="lg">
				<Text fw={700} size="lg" c="blue">
					Compass CRM
				</Text>
			</Box>

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