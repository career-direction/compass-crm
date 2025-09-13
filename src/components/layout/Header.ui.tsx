"use client";

import { Avatar, Button, Group, Menu, Text, TextInput } from "@mantine/core";
import {
	IconLogout,
	IconSearch,
	IconSettings,
	IconUser,
} from "@tabler/icons-react";
import { memo } from "react";
import Image from "next/image";

type Props = {
	onToggle: () => void;
};

export const Header = memo<Props>(({ onToggle }: Props) => {
	const userName = "坂田航樹";
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "16px 24px",
				backgroundColor: "white",
			}}
		>
			<Button
				p={0}
				variant="subtle"
				onClick={onToggle}
				style={{
					backgroundColor: "transparent",
					border: "none",
					borderRadius: "8px",
				}}
				styles={{
					root: {
						"&:hover": {
							backgroundColor: "#F8F9FA",
						},
					},
				}}
			>
				<Image
					src="/COMPASS_Logo_BLACK_ORANGE.png"
					alt="COMPASS"
					width={150}
					height={70}
				/>
			</Button>

			{/* 右側：検索、通知、ユーザーメニュー */}
			<Group gap="md">
				<Menu shadow="md" width={200} position="bottom-end">
					<Menu.Target>
						<Group
							style={{
								cursor: "pointer",
								padding: "8px 12px",
								borderRadius: "8px",
								"&:hover": {
									backgroundColor: "#F8F9FA",
								},
							}}
						>
							<Avatar radius="xl" size="sm" color="brand">
								{userName.charAt(0)}
							</Avatar>
							<Text size="sm" fw={500} c="dark">
								{userName}
							</Text>
						</Group>
					</Menu.Target>

					<Menu.Dropdown>
						<Menu.Label>アカウント</Menu.Label>
						<Menu.Item leftSection={<IconUser size={14} />}>
							プロフィール
						</Menu.Item>
						<Menu.Item leftSection={<IconSettings size={14} />}>設定</Menu.Item>

						<Menu.Divider />

						<Menu.Item leftSection={<IconLogout size={14} />} color="red">
							ログアウト
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Group>
		</div>
	);
});

Header.displayName = "Header";
