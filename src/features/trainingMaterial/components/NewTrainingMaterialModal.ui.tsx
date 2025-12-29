"use client";

import { Group, Select, Stack, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import { CPButton } from "@/components/ui/CPButton";

type NewTrainingMaterialModalProps = {
	onClose: () => void;
};

export const NewTrainingMaterialModal = ({
	onClose,
}: NewTrainingMaterialModalProps) => {
	const [formData, setFormData] = useState({
		title: "",
		category: "",
		type: "",
		duration: "",
		description: "",
	});

	const categoryOptions = [
		{ value: "strength", label: "筋力" },
		{ value: "nutrition", label: "栄養" },
		{ value: "flexibility", label: "柔軟性" },
		{ value: "cardio", label: "有酸素" },
		{ value: "recovery", label: "リカバリー" },
	];

	const typeOptions = [
		{ value: "video", label: "動画" },
		{ value: "document", label: "資料" },
		{ value: "audio", label: "音声" },
	];

	const durationOptions = [
		{ value: "5", label: "5分" },
		{ value: "10", label: "10分" },
		{ value: "15", label: "15分" },
		{ value: "20", label: "20分" },
		{ value: "30", label: "30分" },
		{ value: "60", label: "60分" },
	];

	const handleSubmit = () => {
		console.log("教材データ:", formData);
		onClose();
	};

	return (
		<Stack gap="md">
			<TextInput
				label="教材タイトル"
				placeholder="教材のタイトルを入力"
				value={formData.title}
				onChange={(event) =>
					setFormData({ ...formData, title: event.currentTarget.value })
				}
				required
			/>

			<Select
				label="カテゴリ"
				placeholder="カテゴリを選択"
				data={categoryOptions}
				value={formData.category}
				onChange={(value) =>
					setFormData({ ...formData, category: value || "" })
				}
				required
			/>

			<Select
				label="タイプ"
				placeholder="タイプを選択"
				data={typeOptions}
				value={formData.type}
				onChange={(value) => setFormData({ ...formData, type: value || "" })}
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

			<Textarea
				label="説明"
				placeholder="教材の説明を入力"
				rows={4}
				value={formData.description}
				onChange={(event) =>
					setFormData({ ...formData, description: event.currentTarget.value })
				}
			/>

			<Group justify="flex-end" mt="md">
				<CPButton variant="outline" onClick={onClose}>
					キャンセル
				</CPButton>
				<CPButton onClick={handleSubmit}>教材を追加</CPButton>
			</Group>
		</Stack>
	);
};
