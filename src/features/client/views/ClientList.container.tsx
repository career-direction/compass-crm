"use client";

import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useGetClientsQuery } from "@/lib/graphql/generated/client/gql/urql";
import { toClients } from "../client.mapper";
import { ClientListUI } from "./ClientList.ui";

export const ClientList = () => {
	const router = useRouter();
	const [opened, { open, close }] = useDisclosure(false);
	const [{ data, fetching, error }, refetch] = useGetClientsQuery();

	const clients = data ? toClients(data) : [];

	const handleRowClick = (id: number) => {
		router.push(`/clients/${id}`);
	};

	const handleOpenModal = () => {
		open();
	};

	const handleCloseModal = () => {
		close();
		refetch({ requestPolicy: "network-only" });
	};

	return (
		<ClientListUI
			clients={clients}
			fetching={fetching}
			error={error?.message}
			modalOpened={opened}
			onRowClick={handleRowClick}
			onOpenModal={handleOpenModal}
			onCloseModal={handleCloseModal}
		/>
	);
};
