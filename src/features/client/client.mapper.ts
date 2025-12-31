import type * as Operations from "@/lib/graphql/generated/client/gql/graphql";
import type { ClientType } from "./types/client";

const genderLabel = (gender: number): string => {
	switch (gender) {
		case 0:
			return "女性";
		case 1:
			return "男性";
		default:
			return "その他";
	}
};

export function toClients(data: Operations.GetClientsQuery): ClientType[] {
	return data.clients.map((client) => ({
		id: client.id,
		name: `${client.user.lastName} ${client.user.firstName}`,
		nameKana: `${client.user.lastNameKana} ${client.user.firstNameKana}`,
		occupation: client.profile?.occupation ?? "",
		hobby: client.profile?.hobby ?? "",
		gender: genderLabel(client.user.gender),
	}));
}
