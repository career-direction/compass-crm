"use client";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar.ui";

type Props = {
	children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
	const [opened, { toggle }] = useDisclosure(true);

	return (
		<AppShell
			navbar={{
				width: 250,
				breakpoint: "sm",
				collapsed: { mobile: !opened, desktop: !opened },
			}}
			padding="md"
		>
			<AppShell.Navbar>
				<Sidebar onToggle={toggle} />
			</AppShell.Navbar>

			<AppShell.Main>
				{!opened && (
					<div style={{ position: "fixed", top: 16, left: 16, zIndex: 1000 }}>
						<Burger opened={opened} onClick={toggle} size="sm" />
					</div>
				)}
				{children}
			</AppShell.Main>
		</AppShell>
	);
}
