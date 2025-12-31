"use client";

import { useGetClientsQuery } from "@/lib/graphql/generated/client/gql/urql";
import { toClients } from "../client.mapper";
import { ClientListUI } from "./ClientList.ui";

export const ClientList = () => {
	const [{ data, fetching, error }, refetch] = useGetClientsQuery();

	const clients = data ? toClients(data) : [];

	const handleAddSuccess = () => {
		refetch({ requestPolicy: "network-only" });
	};

	return (
		<ClientListUI
			clients={clients}
			fetching={fetching}
			error={error?.message}
			onAddSuccess={handleAddSuccess}
		/>
	);
};
