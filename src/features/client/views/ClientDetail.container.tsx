"use client";

import { useRouter } from "next/navigation";
import { useGetClientQuery } from "@/lib/graphql/generated/client/gql/urql";
import { toClient } from "../client.mapper";
import { ClientDetailUI } from "./ClientDetail.ui";

type Props = {
	clientId: string;
};

export const ClientDetail = ({ clientId }: Props) => {
	const router = useRouter();
	const [{ data, fetching, error }] = useGetClientQuery({
		variables: { id: Number(clientId) },
	});

	const client = data ? toClient(data) : null;

	const handleBack = () => {
		router.push("/clients");
	};

	return (
		<ClientDetailUI
			client={client}
			fetching={fetching}
			error={error?.message}
			onBack={handleBack}
		/>
	);
};
