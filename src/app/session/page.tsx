import { Container } from "@mantine/core";
import { SessionList } from "@/features/session/views/SessionList.ui";

export default function RegisterPage() {
	return (
		<Container size={420} my={40}>
			<SessionList />
		</Container>
	);
}
