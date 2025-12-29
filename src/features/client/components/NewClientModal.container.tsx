"use client";

import { useState } from "react";
import { useCreateClientWithProfileMutation } from "@/graphql/generated/client/gql/urql";
import { type ClientFormData, NewClientModalUI } from "./NewClientModal.ui";

type NewClientModalProps = {
	onClose: () => void;
};

const initialFormData: ClientFormData = {
	firstName: "",
	lastName: "",
	firstNameKana: "",
	lastNameKana: "",
	birthDate: null,
	gender: "",
	occupation: "",
	hobby: "",
	allowSnsPost: "",
	exerciseHistory: "",
};

export const NewClientModal = ({ onClose }: NewClientModalProps) => {
	const [formData, setFormData] = useState<ClientFormData>(initialFormData);
	const [, createClientWithProfile] = useCreateClientWithProfileMutation();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async () => {
		if (
			!formData.firstName ||
			!formData.lastName ||
			!formData.firstNameKana ||
			!formData.lastNameKana ||
			!formData.birthDate ||
			!formData.gender ||
			!formData.occupation ||
			!formData.hobby ||
			!formData.allowSnsPost ||
			!formData.exerciseHistory
		) {
			return;
		}

		setIsSubmitting(true);
		try {
			const birthDateObj =
				formData.birthDate instanceof Date
					? formData.birthDate
					: new Date(formData.birthDate);
			const birthDateStr = birthDateObj.toISOString().split("T")[0];

			const result = await createClientWithProfile({
				input: {
					firstName: formData.firstName,
					lastName: formData.lastName,
					firstNameKana: formData.firstNameKana,
					lastNameKana: formData.lastNameKana,
					birthDate: birthDateStr,
					gender: Number(formData.gender),
					occupation: formData.occupation,
					hobby: formData.hobby,
					allowSnsPost: formData.allowSnsPost,
					exerciseHistory: formData.exerciseHistory,
				},
			});

			if (result.error) {
				console.error("クライアントの追加に失敗しました:", result.error);
				return;
			}

			setFormData(initialFormData);
			onClose();
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<NewClientModalUI
			formData={formData}
			onFormChange={setFormData}
			onSubmit={handleSubmit}
			onClose={onClose}
			isSubmitting={isSubmitting}
		/>
	);
};
