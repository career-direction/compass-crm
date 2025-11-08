"use client";

import { Box, NavLink } from "@mantine/core";
import {
	IconBook,
	IconCalendar,
	IconChevronsLeft,
	IconChevronsRight,
	IconUser,
	IconUsers,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { memo, useMemo } from "react";
import Image from "next/image";

type SidebarProps = {
	isOpen: boolean;
	onToggle: () => void;
};

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
		'&[dataActive="true"]': {
			color: "white",
		},
		"&:hover": {
			backgroundColor: "#fff4e6",
		},
	},
};

export const Sidebar = memo(({ isOpen, onToggle }: SidebarProps) => {
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

	const containerPadding = isOpen ? "16px" : "8px";
	const toggleLabel = isOpen ? "Close sidebar" : "Open sidebar";

	return (
		<div
			style={{
				padding: containerPadding,
				display: "flex",
				flexDirection: "column",
				alignItems: isOpen ? "center" : "flex-start",
				height: "100%",
				gap: isOpen ? "24px" : "0",
				justifyContent: "flex-start",
				backgroundColor: "#FAFAFA",
			}}
		>
			<Box
				component="button"
				onClick={onToggle}
				type="button"
				aria-label={toggleLabel}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: isOpen ? "center" : "flex-start",
					gap: isOpen ? "8px" : "0",
					backgroundColor: "transparent",
					border: "none",
					cursor: "pointer",
					width: isOpen ? "100%" : "auto",
				}}
			>
				{isOpen ? (
					<>
						<Image
							alt="COMPASS logo"
							height={401}
							src="/COMPASS_Logo_BLACK_ORANGE.png"
							width={2481}
							style={{ width: "140px", height: "auto" }}
							priority
						/>
						<IconChevronsLeft size="1.4rem" stroke={1.5} />
					</>
				) : (
					<IconChevronsRight size="1.4rem" stroke={1.5} />
				)}
			</Box>

			{isOpen && (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "4px",
						width: "100%",
					}}
				>
					{renderedNavItems}
				</div>
			)}
		</div>
	);
});

Sidebar.displayName = "Sidebar";
