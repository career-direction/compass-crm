"use client";

import {
	Group,
	Select,
	SimpleGrid,
	Stack,
	Textarea,
	TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { CPButton } from "@/components/ui/CPButton";

export type ClientFormData = {
	firstName: string;
	lastName: string;
	firstNameKana: string;
	lastNameKana: string;
	birthDate: Date | null;
	gender: string;
	occupation: string;
	hobby: string;
	allowSnsPost: string;
	exerciseHistory: string;
};

type NewClientModalUIProps = {
	formData: ClientFormData;
	onFormChange: (data: ClientFormData) => void;
	onSubmit: () => void;
	onClose: () => void;
	isSubmitting: boolean;
};

const genderOptions = [
	{ value: "0", label: "女性" },
	{ value: "1", label: "男性" },
	{ value: "2", label: "その他" },
];

const allowSnsPostOptions = [
	{ value: "yes", label: "許可する" },
	{ value: "no", label: "許可しない" },
];

export const NewClientModalUI = ({
	formData,
	onFormChange,
	onSubmit,
	onClose,
	isSubmitting,
}: NewClientModalUIProps) => {
	return (
		<Stack gap="md">
			<SimpleGrid cols={2}>
				<TextInput
					label="姓"
					placeholder="山田"
					value={formData.lastName}
					onChange={(event) =>
						onFormChange({ ...formData, lastName: event.currentTarget.value })
					}
					required
				/>
				<TextInput
					label="名"
					placeholder="太郎"
					value={formData.firstName}
					onChange={(event) =>
						onFormChange({ ...formData, firstName: event.currentTarget.value })
					}
					required
				/>
			</SimpleGrid>

			<SimpleGrid cols={2}>
				<TextInput
					label="姓（カナ）"
					placeholder="ヤマダ"
					value={formData.lastNameKana}
					onChange={(event) =>
						onFormChange({
							...formData,
							lastNameKana: event.currentTarget.value,
						})
					}
					required
				/>
				<TextInput
					label="名（カナ）"
					placeholder="タロウ"
					value={formData.firstNameKana}
					onChange={(event) =>
						onFormChange({
							...formData,
							firstNameKana: event.currentTarget.value,
						})
					}
					required
				/>
			</SimpleGrid>

			<SimpleGrid cols={2}>
				<DateInput
					label="誕生日"
					placeholder="生年月日を選択"
					value={formData.birthDate}
					onChange={(value) => onFormChange({ ...formData, birthDate: value })}
					required
				/>
				<Select
					label="性別"
					placeholder="性別を選択"
					data={genderOptions}
					value={formData.gender}
					onChange={(value) =>
						onFormChange({ ...formData, gender: value || "" })
					}
					required
				/>
			</SimpleGrid>

			<TextInput
				label="職業"
				placeholder="会社員、学生など"
				value={formData.occupation}
				onChange={(event) =>
					onFormChange({ ...formData, occupation: event.currentTarget.value })
				}
				required
			/>

			<TextInput
				label="趣味"
				placeholder="読書、旅行など"
				value={formData.hobby}
				onChange={(event) =>
					onFormChange({ ...formData, hobby: event.currentTarget.value })
				}
				required
			/>

			<Select
				label="SNS投稿許可"
				placeholder="SNS投稿の許可を選択"
				data={allowSnsPostOptions}
				value={formData.allowSnsPost}
				onChange={(value) =>
					onFormChange({ ...formData, allowSnsPost: value || "" })
				}
				required
			/>

			<Textarea
				label="運動履歴"
				placeholder="これまでの運動経験を入力"
				value={formData.exerciseHistory}
				onChange={(event) =>
					onFormChange({
						...formData,
						exerciseHistory: event.currentTarget.value,
					})
				}
				minRows={3}
				required
			/>

			<Group justify="flex-end" mt="md">
				<CPButton variant="outline" onClick={onClose} disabled={isSubmitting}>
					キャンセル
				</CPButton>
				<CPButton onClick={onSubmit} loading={isSubmitting}>
					クライアントを追加
				</CPButton>
			</Group>
		</Stack>
	);
};
