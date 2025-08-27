import { SessionDetail } from "@/features/session/views/SessionDetail.ui";

type Props = {
	params: Promise<{
		id: string;
	}>;
};

export default async function SessionDetailPage({ params }: Props) {
	const { id } = await params;

	return <SessionDetail sessionId={id} />;
}
