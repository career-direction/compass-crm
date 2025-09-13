"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import { useCallback } from "react";
import { Sidebar } from "@/components/layout/Sidebar.ui";
import { Header } from "@/components/layout/Header.ui";

type Props = {
	children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
	const [opened, { toggle }] = useDisclosure(true);

	const stableToggle = useCallback(() => {
		toggle();
	}, [toggle]);

	return (
		<AppShell
			header={{ height: 70 }}
			navbar={{
				width: 250,
				breakpoint: "sm",
				collapsed: { mobile: !opened, desktop: !opened },
			}}
			padding="xl"
			transitionDuration={300}
			transitionTimingFunction="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
		>
			<AppShell.Header>
				<Header onToggle={stableToggle} />
			</AppShell.Header>

			<AppShell.Navbar style={{ borderInlineEnd: "none" }}>
				<Sidebar />
			</AppShell.Navbar>

			<AppShell.Main
				style={{
					minHeight: "100vh",
				}}
			>
				{children}
			</AppShell.Main>
		</AppShell>
	);
}
