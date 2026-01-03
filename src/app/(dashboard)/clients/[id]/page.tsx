import { ClientDetail } from "@/features/client/views/ClientDetail.container";

type Props = {
	params: Promise<{
		id: string;
	}>;
};

export default async function ClientDetailPage({ params }: Props) {
	const { id } = await params;

	return <ClientDetail clientId={id} />;
}
