"use client";

import { AppShell, Text } from "@mantine/core";
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
				width: opened ? 250 : 56,
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
			padding="xl"
			transitionDuration={300}
			transitionTimingFunction="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
		>
			<AppShell.Navbar style={{ borderInlineEnd: "none" }}>
				<Sidebar isOpen={opened} onToggle={toggle} />
			</AppShell.Navbar>

			<AppShell.Main
				style={{
					minHeight: "100vh",
				}}
			>
				<Header />
				{children}
			</AppShell.Main>
		</AppShell>
	);
}

// TODO: Headerをいい感じにする
const Header = () => {
	return <Text>Session</Text>;
};
