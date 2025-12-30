"use client";

import { useState } from "react";
import { useCreateLearningMaterialMutation } from "@/graphql/generated/client/gql/urql";
import {
	NewTrainingMaterialModalUI,
	type TrainingMaterialFormData,
} from "./NewTrainingMaterialModal.ui";

type NewTrainingMaterialModalProps = {
	onClose: () => void;
};

const initialFormData: TrainingMaterialFormData = {
	name: "",
	status: "draft",
	sourceUrl: "",
	contentType: "",
	contentId: "",
};

export const NewTrainingMaterialModal = ({
	onClose,
}: NewTrainingMaterialModalProps) => {
	const [formData, setFormData] =
		useState<TrainingMaterialFormData>(initialFormData);
	const [, createLearningMaterial] = useCreateLearningMaterialMutation();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async () => {
		if (
			!formData.name ||
			!formData.status ||
			!formData.sourceUrl ||
			!formData.contentType ||
			formData.contentId === ""
		) {
			return;
		}

		setIsSubmitting(true);
		try {
			const result = await createLearningMaterial({
				input: {
					name: formData.name,
					status: formData.status,
					sourceUrl: formData.sourceUrl,
					contentType: formData.contentType,
					contentId: Number(formData.contentId),
				},
			});

			if (result.error) {
				console.error("教材の追加に失敗しました:", result.error);
				return;
			}

			setFormData(initialFormData);
			onClose();
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<NewTrainingMaterialModalUI
			formData={formData}
			onFormChange={setFormData}
			onSubmit={handleSubmit}
			onClose={onClose}
			isSubmitting={isSubmitting}
		/>
	);
};
