"use client";

import { useDisclosure } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import { memo, useCallback } from "react";
import { useAuth } from "@/features/auth/contexts/AuthContext";
import { SidebarUI } from "./Sidebar.ui";

type SidebarContainerProps = {
	isOpen: boolean;
	onToggle: () => void;
};

export const Sidebar = memo(({ isOpen, onToggle }: SidebarContainerProps) => {
	const pathname = usePathname();
	const router = useRouter();
	const { logout } = useAuth();
	const [logoutModalOpened, { open: openLogoutModal, close: closeLogoutModal }] =
		useDisclosure(false);

	const handleLogout = useCallback(async () => {
		await logout();
		closeLogoutModal();
		router.push("/login");
	}, [logout, closeLogoutModal, router]);

	return (
		<SidebarUI
			isOpen={isOpen}
			pathname={pathname}
			logoutModalOpened={logoutModalOpened}
			onToggle={onToggle}
			onOpenLogoutModal={openLogoutModal}
			onCloseLogoutModal={closeLogoutModal}
			onLogout={handleLogout}
		/>
	);
});

Sidebar.displayName = "Sidebar";
