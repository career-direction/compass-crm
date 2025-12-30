"use client";

import { useGetTrainersQuery } from "@/graphql/generated/client/gql/urql";
import { toTrainers } from "../trainer.mapper";
import { TrainerListUI } from "./TrainerList.ui";

export const TrainerList = () => {
	const [{ data, fetching, error }] = useGetTrainersQuery();

	const trainers = data ? toTrainers(data) : [];

	const handleNewTrainerClick = () => {
		console.log("新規トレーナー登録ボタンがクリックされました");
	};

	return (
		<TrainerListUI
			trainers={trainers}
			fetching={fetching}
			error={error?.message}
			onNewTrainerClick={handleNewTrainerClick}
		/>
	);
};
