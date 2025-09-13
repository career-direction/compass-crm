"use client";

import { ActionIcon, Box, NavLink } from "@mantine/core";
import {
	IconBook,
	IconCalendar,
	IconLayoutSidebar,
	IconUser,
	IconUsers,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { memo, useMemo } from "react";

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
		label: "トレーナー",
		icon: IconUser,
		href: "/trainers",
	},
	{
		label: "教材一覧",
		icon: IconBook,
		href: "/trainingMaterial",
	},
];

const navLinkStyles = {
	root: {
		backgroundColor: "transparent",
		borderRadius: "8px",
		'&[data-active="true"]': {
			color: "white",
		},
		"&:hover": {
			backgroundColor: "#fff4e6",
		},
	},
};

export const Sidebar = memo(() => {
	const pathname = usePathname();

	const renderedNavItems = useMemo(() => {
		return navItems.map((item) => (
			<NavLink
				key={item.href}
				href={item.href}
				label={item.label}
				leftSection={<item.icon size="1rem" />}
				active={pathname.startsWith(item.href)}
				styles={navLinkStyles}
			/>
		));
	}, [pathname]);

	return (
		<div style={{ padding: "16px" }}>
			{/* ナビゲーション項目 */}
			<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
				{renderedNavItems}
			</div>
		</div>
	);
});

Sidebar.displayName = "Sidebar";
