"use client";

import {
	Box,
	Group,
	Select,
	SimpleGrid,
	Stack,
	Textarea,
	TextInput,
} from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useState } from "react";
import { CPButton } from "@/components/ui/CPButton";

export const NewSessionModal = () => {
	const [formData, setFormData] = useState({
		client: "",
		trainer: "",
		date: "",
		time: "",
		sessionType: "",
		duration: "",
		room: "",
		theme: "",
		memo: "",
	});

	const trainerOptions = [
		{ value: "yamada", label: "山田トレーナー" },
		{ value: "tanaka", label: "田中トレーナー" },
		{ value: "sato", label: "佐藤トレーナー" },
		{ value: "suzuki", label: "鈴木トレーナー" },
	];

	const clientOptions = [
		{ value: "client1", label: "クライアント1" },
		{ value: "client2", label: "クライアント2" },
		{ value: "client3", label: "クライアント3" },
	];

	const sessionTypeOptions = [
		{ value: "personal", label: "パーソナルトレーニング" },
		{ value: "group", label: "グループレッスン" },
		{ value: "consultation", label: "コンサルテーション" },
	];

	const durationOptions = [
		{ value: "30", label: "30分" },
		{ value: "60", label: "60分" },
		{ value: "90", label: "90分" },
		{ value: "120", label: "120分" },
	];

	const roomOptions = [
		{ value: "room1", label: "ルーム1" },
		{ value: "room2", label: "ルーム2" },
		{ value: "room3", label: "ルーム3" },
	];

	const handleSubmit = () => {
		console.log("フォームデータ:", formData);
	};

	const handleCancelClick = () => {
		console.log("キャンセルボタンがクリックされました");
	};

	return (
		<Box>
			<Stack gap="md">
				<SimpleGrid cols={2} spacing="md">
					<Select
						label="クライアント"
						placeholder="クライアントを選択"
						data={clientOptions}
						value={formData.client}
						onChange={(value) =>
							setFormData({ ...formData, client: value || "" })
						}
						required
					/>

					<Select
						label="トレーナー"
						placeholder="トレーナーを選択"
						data={trainerOptions}
						searchable
						value={formData.trainer}
						onChange={(value) =>
							setFormData({ ...formData, trainer: value || "" })
						}
						required
					/>

					<DateInput
						label="日付"
						placeholder="日付を選択"
						value={formData.date ? new Date(formData.date) : null}
						onChange={(value) =>
							setFormData({
								...formData,
								date: value ? value.toString().split("T")[0] : "",
							})
						}
						required
					/>

					<TimeInput
						label="時間"
						placeholder="時間を選択"
						value={formData.time}
						onChange={(event) =>
							setFormData({ ...formData, time: event.currentTarget.value })
						}
						required
					/>

					<Select
						label="セッションタイプ"
						placeholder="セッションタイプを選択"
						data={sessionTypeOptions}
						value={formData.sessionType}
						onChange={(value) =>
							setFormData({ ...formData, sessionType: value || "" })
						}
						required
					/>

					<Select
						label="所要時間"
						placeholder="所要時間を選択"
						data={durationOptions}
						value={formData.duration}
						onChange={(value) =>
							setFormData({ ...formData, duration: value || "" })
						}
						required
					/>
				</SimpleGrid>

				<Select
					label="ルーム"
					placeholder="ルームを選択"
					data={roomOptions}
					value={formData.room}
					onChange={(value) => setFormData({ ...formData, room: value || "" })}
					required
				/>

				<TextInput
					label="テーマ"
					placeholder="セッションのテーマを入力"
					value={formData.theme}
					onChange={(event) =>
						setFormData({ ...formData, theme: event.currentTarget.value })
					}
				/>

				<Textarea
					label="メモ"
					placeholder="メモを入力"
					rows={4}
					value={formData.memo}
					onChange={(event) =>
						setFormData({ ...formData, memo: event.currentTarget.value })
					}
				/>

				<Group justify="flex-end" mt="md">
					<CPButton variant="outline" onClick={handleCancelClick}>
						キャンセル
					</CPButton>
					<CPButton onClick={handleSubmit}>セッションを追加</CPButton>
				</Group>
			</Stack>
		</Box>
	);
};
