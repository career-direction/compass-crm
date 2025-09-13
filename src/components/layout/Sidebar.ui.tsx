"use client";

import { ActionIcon, Box, NavLink } from "@mantine/core";
import Image from "next/image";
import {
	IconBook,
	IconCalendar,
	IconLayoutSidebar,
	IconSettings,
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
	{
		label: "設定",
		icon: IconSettings,
		href: "/settings",
	},
];

const navLinkStyles = {
	root: {
		backgroundColor: "transparent",
		borderRadius: "8px",
		'&[data-active="true"]': {
			background: "linear-gradient(135deg, #ffa94d, #FF6000)",
			color: "white",
			"&:hover": {
				background: "linear-gradient(135deg, #fd7e14, #e8590c)",
			},
		},
		"&:hover": {
			backgroundColor: "#fff4e6",
		},
	},
};

type Props = {
	onToggle: () => void;
};

export const Sidebar = memo<Props>(({ onToggle }: Props) => {
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
			{/* 完全に静的なヘッダー */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "24px",
				}}
			>
				<Box pl={10} pt={2}>
					<Image
						src="/COMPASS_Logo_BLACK_ORANGE.png"
						alt="COMPASS"
						width={150}
						height={62}
					/>
				</Box>

				<ActionIcon
					variant="subtle"
					onClick={onToggle}
					size="md"
					style={{
						color: "#666",
					}}
				>
					<IconLayoutSidebar size={20} />
				</ActionIcon>
			</div>

			{/* ナビゲーション項目 */}
			<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
				{renderedNavItems}
			</div>
		</div>
	);
});

Sidebar.displayName = "Sidebar";
