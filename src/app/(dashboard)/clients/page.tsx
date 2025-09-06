import { Container } from "@mantine/core";
import { ClientList } from "@/features/client/views/ClientList.ui";

export default function ClientsPage() {
	return (
		<Container>
			<ClientList />
		</Container>
	);
}
