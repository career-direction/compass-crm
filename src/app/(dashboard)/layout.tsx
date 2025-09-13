"use client";

import { ActionIcon, AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLayoutSidebar } from "@tabler/icons-react";
import type { ReactNode } from "react";
import { useCallback } from "react";
import { Sidebar } from "@/components/layout/Sidebar.ui";

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
			navbar={{
				width: 250,
				breakpoint: "sm",
				collapsed: { mobile: !opened, desktop: !opened },
			}}
			padding="xl"
			transitionDuration={300}
			transitionTimingFunction="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
		>
			<AppShell.Navbar>
				<Sidebar onToggle={stableToggle} />
			</AppShell.Navbar>

			<AppShell.Main
				style={{
					minHeight: "100vh",
				}}
			>
				{!opened && (
					<div style={{ position: "fixed", top: 16, left: 16, zIndex: 1000 }}>
						<ActionIcon onClick={stableToggle} size="md" variant="transparent">
							<IconLayoutSidebar size={48} />
						</ActionIcon>
					</div>
				)}
				{children}
			</AppShell.Main>
		</AppShell>
	);
}
