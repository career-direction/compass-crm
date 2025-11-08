"use client";

import {
	Card,
	Grid,
	Group,
	Text,
	NumberInput,
	Select,
	TextInput,
	Button,
	Divider,
	Box,
	Badge,
	ActionIcon,
	Stack,
	Title,
	Flex,
	Space,
} from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";

import { useEffect, useState } from "react";
import {
	ContentCalendarCard,
	type ExerciseMenuItem,
	type DateCarouselItem,
} from "../components/TrainingCalendarCard.ui";

type Props = {
	sessionId: string;
};

const sessionMenu: ExerciseMenuItem[] = [
	{
		name: "ダイナミックストレッチ",
		volume: "10分",
		note: "股関節と肩甲骨の可動域を意識",
	},
	{
		name: "スクワット",
		volume: "4セット × 10回 @60-70kg",
		note: "膝が内側に入らないよう注意",
	},
	{
		name: "ブルガリアンスクワット",
		volume: "3セット × 12回",
		note: "左右差を確認しながら実施",
	},
	{
		name: "プランク",
		volume: "3セット × 45秒",
		note: "呼吸を止めず体幹を安定",
	},
];

const homeworkMenu: ExerciseMenuItem[] = [
	{
		name: "ヒップリフト",
		volume: "3セット × 15回",
		note: "寝る前に臀部の収縮を意識",
	},
	{
		name: "ドローイン",
		volume: "5分",
		note: "朝晩で各5分ずつ腹圧を高める",
	},
];

const exerciseHistoryDates: DateCarouselItem[] = [
	{ label: "2025年1月12日 (日)", weekdayIndex: 0 },
	{ label: "2025年1月13日 (月)", weekdayIndex: 1 },
	{ label: "2025年1月14日 (火)", weekdayIndex: 2 },
	{ label: "2025年1月15日 (水)", weekdayIndex: 3 },
];

export const SessionDetail = ({ sessionId: _sessionId }: Props) => {
	const handleChange = (sets: SetItem[]) => {
		// 保存やバリデーションなど
		console.log(sets);
	};
	return (
		<Flex
			gap="xl"
			align="flex-start"
			direction={{ base: "column", lg: "row" }}
			w="100%"
		>
			<Stack style={{ flex: 3, minWidth: 0 }}>
				<Flex gap={36} align="stretch">
					<Flex direction="column">
						<Title order={1} mb="sm">
							田中太郎
						</Title>

						<Flex
							justify="flex-start"
							align="flex-start"
							direction="row"
							wrap="wrap"
						>
							<Flex align="center" justify={"center"}>
								<Text fw={500} size="sm">
									開始時間
								</Text>
								<Text fw={500}>14:00</Text>
							</Flex>
							<Flex align="center" justify={"center"}>
								<Text fw={500} size="sm">
									セッション時間
								</Text>
								<Text fw={500}>60分</Text>
							</Flex>
						</Flex>

						<Flex mt={24} gap={24}>
							<Flex direction={"column"}>
								<Text size="lg" fw={700} mb={8}>
									体重
								</Text>
								<Flex align="center">
									<Text>
										<span
											style={{
												fontWeight: "bold",
												fontSize: 32,
												marginRight: 8,
											}}
										>
											65
										</span>
										kg
									</Text>
									<Space w="md" />
									<Text c="green">-5kg</Text>
								</Flex>
							</Flex>
							<Flex direction={"column"}>
								<Text size="lg" fw={700} mb={8}>
									BMI
								</Text>
								<Flex align="center">
									<span style={{ fontWeight: "bold", fontSize: 32 }}>20.0</span>
									<Space w="md" />
									<Text c="green">-5</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Flex gap={24} direction="column">
						<Flex direction="column">
							<Text size="lg" fw={700} mb={8}>
								月次健康目標
							</Text>
							<Box bg="#FAFAFA" bdrs={12} p={24}>
								<Text>体重を2kg減量し、スクワットの重量を10kg増やす</Text>
							</Box>
						</Flex>

						<Flex direction="column">
							<Text size="lg" fw={700} mb={8}>
								中期健康目標
							</Text>
							<Box bg="#FAFAFA" bdrs={12} p={24}>
								<Text>体重を2kg減量し、スクワットの重量を10kg増やす</Text>
							</Box>
						</Flex>
					</Flex>
				</Flex>

				<Flex direction="column">
					<Text size="lg" fw={700} mb={8}>
						セッションテーマ
					</Text>
					<Box bg="#FAFAFA" bdrs={12} p={24}>
						<Text>フォーム改善と筋力向上</Text>
					</Box>
				</Flex>

				{/* エクササイズメニュー */}
				<Text size="lg" fw={700} mb={8}>
					エクササイズメニュー
				</Text>
				<TrainingSetsCard title="スクワット" onChange={handleChange} />
			</Stack>
			<Box style={{ flex: 1, minWidth: 0 }}>
				<ContentCalendarCard
					dateItems={exerciseHistoryDates}
					initialDateIndex={exerciseHistoryDates.length - 1}
					sessionMenu={sessionMenu}
					homeworkMenu={homeworkMenu}
				/>
			</Box>
		</Flex>
	);
};

// --- Types ---
export type SetItem = {
	reps: number | "";
	weight: number | "";
	unit: string;
	note: string;
};

export interface TrainingSetsCardProps {
	/** 見出し（例: 種目名） */
	title?: string;
	/** セット配列の制御用（未指定なら内部 state） */
	value?: SetItem[];
	/** セット配列が更新されたら呼ばれる */
	onChange?: (next: SetItem[]) => void;
}

const unitOptions = [
	{ value: "kg", label: "kg" },
	{ value: "lb", label: "lb" },
	{ value: "sec", label: "sec" },
];

function SetRow({
	index,
	value,
	onChange,
	onRemove,
}: {
	index: number;
	value: SetItem;
	onChange: (next: SetItem) => void;
	onRemove?: () => void;
}) {
	return (
		<Card radius="md" shadow="xs" p="md">
			<Grid align="center" gutter="md">
				<Grid.Col span={{ base: 12, sm: 1 }}>
					<Badge size="lg" radius="sm" variant="light">
						{index}
					</Badge>
				</Grid.Col>

				<Grid.Col span={{ base: 12, sm: 2 }}>
					<Text size="sm" c="dimmed" mb={4}>
						回数
					</Text>
					<NumberInput
						value={value.reps}
						onChange={(v) => onChange({ ...value, reps: Number(v) || "" })}
						min={0}
						placeholder="0"
					/>
				</Grid.Col>

				<Grid.Col span={{ base: 12, sm: 4 }}>
					<Text size="sm" c="dimmed" mb={4}>
						重量／秒数
					</Text>
					<Group wrap="nowrap" gap="xs" align="center">
						<NumberInput
							flex={1}
							value={value.weight}
							onChange={(v) => onChange({ ...value, weight: Number(v) || "" })}
							min={0}
							placeholder="0"
						/>
						<Select
							w={90}
							value={value.unit}
							onChange={(v) => onChange({ ...value, unit: v || "kg" })}
							data={unitOptions}
							allowDeselect={false}
						/>
					</Group>
				</Grid.Col>

				<Grid.Col span={{ base: 12, sm: 5 }}>
					<Text size="sm" c="dimmed" mb={4}>
						備考
					</Text>
					<Group wrap="nowrap" justify="space-between">
						<TextInput
							style={{ flex: 1 }}
							value={value.note}
							onChange={(e) =>
								onChange({ ...value, note: e.currentTarget.value })
							}
							placeholder="メモを入力"
						/>
						{onRemove && (
							<ActionIcon
								variant="light"
								color="red"
								aria-label="remove"
								onClick={onRemove}
							>
								<IconTrash size={18} />
							</ActionIcon>
						)}
					</Group>
				</Grid.Col>
			</Grid>
		</Card>
	);
}

/**
 * MantineProvider 済みのアプリに組み込むだけで動くカードコンポーネント
 */
export default function TrainingSetsCard({
	title = "スクワット",
	value,
	onChange,
}: TrainingSetsCardProps) {
	const [sets, setSets] = useState<SetItem[]>(
		value ?? [
			{ reps: 12, weight: 60, unit: "kg", note: "膝が少し内側に入る傾向" },
			{ reps: 12, weight: 60, unit: "kg", note: "フォーム改善、安定してきた" },
			{
				reps: 10,
				weight: 65,
				unit: "kg",
				note: "重量アップ、最後少しきつそう",
			},
		],
	);

	// 外部制御モード: value が変わったら同期
	useEffect(() => {
		if (value) setSets(value);
	}, [value]);

	// 内外どちらでも変更通知
	useEffect(() => {
		onChange?.(sets);
	}, [sets, onChange]);

	const updateSet = (i: number, next: SetItem) => {
		setSets((prev) => prev.map((s, idx) => (idx === i ? next : s)));
	};

	const addSet = () => {
		setSets((prev) => [
			...prev,
			{ reps: "", weight: "", unit: "kg", note: "" },
		]);
	};

	const removeSet = (i: number) => {
		setSets((prev) => prev.filter((_, idx) => idx !== i));
	};

	return (
		<Box bg="#FAFAFA" bdrs={12}>
			<Box p="lg">
				<Stack gap="md">
					<Text size="lg" fw={600}>
						{title}
					</Text>

					<Group gap="sm" wrap="nowrap">
						<Text size="sm" c="dimmed">
							セット
						</Text>
						<Divider orientation="vertical" />
						<Text size="sm" c="dimmed">
							回数
						</Text>
						<Divider orientation="vertical" />
						<Text size="sm" c="dimmed">
							重量／秒数
						</Text>
						<Divider orientation="vertical" />
						<Text size="sm" c="dimmed">
							備考
						</Text>
					</Group>

					<Grid gutter="sm">
						{sets.map((s, i) => {
							const key = `${s.reps}-${s.weight}-${s.unit}-${s.note}-${i}`;
							return (
								<Grid.Col key={key} span={12}>
									<SetRow
										index={i + 1}
										value={s}
										onChange={(next) => updateSet(i, next)}
										onRemove={() => removeSet(i)}
									/>
								</Grid.Col>
							);
						})}
					</Grid>

					<Group justify="center">
						<Button
							leftSection={<IconPlus size={18} />}
							variant="light"
							radius="md"
							onClick={addSet}
						>
							セット追加
						</Button>
					</Group>
				</Stack>
			</Box>
		</Box>
	);
}
