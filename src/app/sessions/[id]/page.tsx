import { SessionDetail } from "@/features/session/views/SessionDetail.ui";

type Props = {
	params: {
		id: string;
	};
};

export default function SessionDetailPage({ params }: Props) {
	const { id } = params;

	return <SessionDetail sessionId={id} />;
}