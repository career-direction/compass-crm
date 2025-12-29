import type * as Operations from "@/graphql/generated/client/gql/graphql";
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
		name: `${client.user.last_name} ${client.user.first_name}`,
		nameKana: `${client.user.last_name_kana} ${client.user.first_name_kana}`,
		occupation: client.profile?.occupation ?? "",
		hobby: client.profile?.hobby ?? "",
		gender: genderLabel(client.user.gender),
	}));
}
