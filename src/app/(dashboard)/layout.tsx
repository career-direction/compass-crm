"use client";

import { AppShell } from "@mantine/core";
import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar.ui";

type Props = {
	children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
	return (
		<AppShell
			navbar={{
				width: 250,
				breakpoint: "sm",
			}}
			padding="xl"
			transitionDuration={300}
			transitionTimingFunction="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
		>
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
