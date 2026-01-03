"use client";

import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
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
		const result = await logout();

		if (result.success) {
			closeLogoutModal();
			router.push("/login");
		} else {
			closeLogoutModal();
			notifications.show({
				title: "エラー",
				message: result.error,
				color: "red",
			});
		}
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
