"use client";

import {
	IconBook,
	IconCalendar,
	IconChevronsLeft,
	IconChevronsRight,
	IconLogout,
	IconSettings,
	IconUser,
	IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import classes from "./Sidebar.module.css";

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

export const Sidebar = memo(({ isOpen, onToggle }: SidebarProps) => {
	const pathname = usePathname();

	if (!isOpen) {
		return (
			<div className={classes.collapsedNavbar}>
				<button
					type="button"
					onClick={onToggle}
					className={classes.toggleButton}
					aria-label="Open sidebar"
				>
					<IconChevronsRight size="1.4rem" stroke={1.5} />
				</button>
				<div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={classes.collapsedLink}
							data-active={pathname.startsWith(item.href) || undefined}
							title={item.label}
						>
							<item.icon className={classes.collapsedLinkIcon} stroke={1.5} />
						</Link>
					))}
				</div>
			</div>
		);
	}

	return (
		<nav className={classes.navbar}>
			<div className={classes.navbarMain}>
				<div className={classes.header}>
					<div className={classes.logoContainer}>
						<Image
							alt="COMPASS logo"
							height={401}
							src="/COMPASS_Logo_BLACK_ORANGE.png"
							width={2481}
							style={{ width: "140px", height: "auto" }}
							priority
						/>
						<button
							type="button"
							onClick={onToggle}
							className={classes.toggleButton}
							aria-label="Close sidebar"
						>
							<IconChevronsLeft size="1.4rem" stroke={1.5} />
						</button>
					</div>
				</div>
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={classes.link}
						data-active={pathname.startsWith(item.href) || undefined}
					>
						<item.icon className={classes.linkIcon} stroke={1.5} />
						<span>{item.label}</span>
					</Link>
				))}
			</div>

			<div className={classes.footer}>
				<Link href="/settings" className={classes.link}>
					<IconSettings className={classes.linkIcon} stroke={1.5} />
					<span>設定</span>
				</Link>
				<button
					type="button"
					className={classes.link}
					onClick={() => {
						// TODO: ログアウト処理を実装
					}}
				>
					<IconLogout className={classes.linkIcon} stroke={1.5} />
					<span>ログアウト</span>
				</button>
			</div>
		</nav>
	);
});

Sidebar.displayName = "Sidebar";
