"use client";

import { Group, NumberInput, Select, Stack, TextInput } from "@mantine/core";
import { CPButton } from "@/components/ui/CPButton";

export type TrainingMaterialFormData = {
	name: string;
	status: string;
	sourceUrl: string;
	contentType: string;
	contentId: number | string;
};

type NewTrainingMaterialModalUIProps = {
	formData: TrainingMaterialFormData;
	onFormChange: (data: TrainingMaterialFormData) => void;
	onSubmit: () => void;
	onClose: () => void;
	isSubmitting: boolean;
};

const statusOptions = [
	{ value: "draft", label: "下書き" },
	{ value: "published", label: "公開" },
	{ value: "archived", label: "アーカイブ" },
];

const contentTypeOptions = [
	{ value: "video", label: "動画" },
	{ value: "document", label: "資料" },
	{ value: "audio", label: "音声" },
];

export const NewTrainingMaterialModalUI = ({
	formData,
	onFormChange,
	onSubmit,
	onClose,
	isSubmitting,
}: NewTrainingMaterialModalUIProps) => {
	return (
		<Stack gap="md">
			<TextInput
				label="教材名"
				placeholder="教材名を入力"
				value={formData.name}
				onChange={(event) =>
					onFormChange({ ...formData, name: event.currentTarget.value })
				}
				required
			/>

			<Select
				label="ステータス"
				placeholder="ステータスを選択"
				data={statusOptions}
				value={formData.status}
				onChange={(value) => onFormChange({ ...formData, status: value || "" })}
				required
			/>

			<TextInput
				label="ソースURL"
				placeholder="https://example.com/video.mp4"
				value={formData.sourceUrl}
				onChange={(event) =>
					onFormChange({ ...formData, sourceUrl: event.currentTarget.value })
				}
				required
			/>

			<Select
				label="コンテンツタイプ"
				placeholder="コンテンツタイプを選択"
				data={contentTypeOptions}
				value={formData.contentType}
				onChange={(value) =>
					onFormChange({ ...formData, contentType: value || "" })
				}
				required
			/>

			<NumberInput
				label="コンテンツID"
				placeholder="コンテンツIDを入力"
				value={formData.contentId}
				onChange={(value) => onFormChange({ ...formData, contentId: value })}
				required
			/>

			<Group justify="flex-end" mt="md">
				<CPButton variant="outline" onClick={onClose} disabled={isSubmitting}>
					キャンセル
				</CPButton>
				<CPButton onClick={onSubmit} loading={isSubmitting}>
					教材を追加
				</CPButton>
			</Group>
		</Stack>
	);
};
