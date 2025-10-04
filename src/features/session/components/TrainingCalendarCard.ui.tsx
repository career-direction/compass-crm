import { useEffect, useMemo, useState } from "react";
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
} from "@mantine/core";
import {
	IconChevronLeft,
	IconChevronRight,
	IconPlus,
	IconTrash,
} from "@tabler/icons-react";

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
		<Card withBorder radius="md" shadow="xs" p="md">
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
		<Box>
			<Card withBorder radius="lg" shadow="sm" p="lg">
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
			</Card>
		</Box>
	);
}

// =====================
// Content Calendar UI
// (MantineProvider 済みのプロダクトでそのまま使える)
// =====================

export type ExerciseMenuItem = {
	name: string;
	volume: string;
	note?: string;
};

export type DateCarouselItem = {
	label: string;
	weekdayIndex?: number;
};

export interface ContentCalendarProps {
	dateLabel?: string; // 例: "2025年1月14日 (火)"
	selectedWeekdayIndex?: number; // 0:Sun - 6:Sat
	sessionMenu?: ExerciseMenuItem[];
	homeworkMenu?: ExerciseMenuItem[];
	dateItems?: DateCarouselItem[];
	initialDateIndex?: number;
}

function SessionDateCarousel({
	items,
	activeIndex,
	onSelect,
}: {
	items: DateCarouselItem[];
	activeIndex: number;
	onSelect: (index: number) => void;
}) {
	if (items.length === 0) return null;

	return (
		<Box style={{ overflowX: "auto" }}>
			<Group gap="sm" wrap="nowrap" align="stretch">
				{items.map((item, idx) => {
					const active = idx === activeIndex;
					return (
						<Card
							withBorder
							radius="lg"
							p="sm"
							key={item.label}
							bg={active ? "blue.6" : "white"}
							style={{
								cursor: "pointer",
								minWidth: 180,
							}}
							onClick={() => onSelect(idx)}
						>
							<Stack gap={4}>
								<Text size="sm" fw={600} c={active ? "white" : "dark.7"}>
									{item.label}
								</Text>
							</Stack>
						</Card>
					);
				})}
			</Group>
		</Box>
	);
}

function ExerciseRow({ item }: { item: ExerciseMenuItem }) {
	return (
		<Group align="flex-start" wrap="nowrap">
			<Group gap="xs" wrap="nowrap" align="flex-start" style={{ flex: 1 }}>
				<Stack gap={6} align="center">
					<Box w={3} h={30} bg="gray.3" style={{ borderRadius: 2 }} />
				</Stack>
				<Stack gap={4} style={{ flex: 1 }}>
					<Text fw={600}>{item.name}</Text>
					<Text size="sm" c="dimmed">
						{item.volume}
					</Text>
					{item.note && (
						<Text size="sm" c="gray.6">
							{item.note}
						</Text>
					)}
				</Stack>
			</Group>
		</Group>
	);
}

function ExerciseListCard({
	title,
	items,
	highlight,
}: {
	title: string;
	items: ExerciseMenuItem[];
	highlight?: string;
}) {
	return (
		<Card withBorder radius="xl" p="lg">
			<Stack gap="md">
				<Group justify="space-between" align="center">
					<Text c="dimmed">{title}</Text>
					{highlight && (
						<Group gap={8} align="center">
							<Box w={8} h={8} bg="green" style={{ borderRadius: 8 }} />
							<Text fw={600}>{highlight}</Text>
						</Group>
					)}
				</Group>
					<Stack gap="lg">
						{items.map((exercise, i) => (
							<ExerciseRow
								key={`${exercise.name}-${exercise.volume}-${i}`}
								item={exercise}
							/>
						))}
					</Stack>
			</Stack>
		</Card>
	);
}

export function ContentCalendarCard({
	dateLabel = "2025年1月14日 (火)",
	selectedWeekdayIndex = 2,
	sessionMenu = [],
	homeworkMenu = [],
	dateItems,
	initialDateIndex,
}: ContentCalendarProps) {
	const dateCarouselItems = useMemo(() => {
		if (dateItems && dateItems.length > 0) return dateItems;
		if (dateLabel) {
			return [
				{
					label: dateLabel,
					weekdayIndex: selectedWeekdayIndex,
				},
			];
		}
		return [];
	}, [dateItems, dateLabel, selectedWeekdayIndex]);

	const [activeDateIndex, setActiveDateIndex] = useState(() => {
		if (dateCarouselItems.length === 0) return 0;
		const initial = initialDateIndex ?? dateCarouselItems.length - 1;
		return Math.min(Math.max(initial, 0), dateCarouselItems.length - 1);
	});

	useEffect(() => {
		if (dateCarouselItems.length === 0) {
			setActiveDateIndex(0);
			return;
		}

		setActiveDateIndex((prev) => {
			if (initialDateIndex !== undefined) {
				const next = Math.min(
					Math.max(initialDateIndex, 0),
					dateCarouselItems.length - 1,
				);
				return next;
			}
			if (prev >= dateCarouselItems.length) {
				return dateCarouselItems.length - 1;
			}
			if (prev < 0) return 0;
			return prev;
		});
	}, [dateCarouselItems, initialDateIndex]);

	const hasMultipleDates = dateCarouselItems.length > 1;
	const currentDate = dateCarouselItems[activeDateIndex];

	const handlePrevDate = () => {
		if (dateCarouselItems.length === 0) return;
		setActiveDateIndex((prev) => {
			if (!hasMultipleDates) return prev;
			return (prev - 1 + dateCarouselItems.length) % dateCarouselItems.length;
		});
	};

	const handleNextDate = () => {
		if (dateCarouselItems.length === 0) return;
		setActiveDateIndex((prev) => {
			if (!hasMultipleDates) return prev;
			return (prev + 1) % dateCarouselItems.length;
		});
	};

	const handleSelectDate = (index: number) => {
		if (index < 0 || index >= dateCarouselItems.length) return;
		setActiveDateIndex(index);
	};

	return (
		<Stack gap="lg">
			{/* Header */}
			<Group justify="space-between" align="center">
				<Text size="xl" fw={700}>
					エクササイズメニュー履歴
				</Text>
				{dateCarouselItems.length > 0 ? (
					<Group gap="xs" align="center">
						<ActionIcon
							variant="subtle"
							aria-label="日付を前に送る"
							onClick={handlePrevDate}
							disabled={!hasMultipleDates}
						>
							<IconChevronLeft size={18} />
						</ActionIcon>
						<Text c="dimmed" fw={600}>
							{currentDate?.label}
						</Text>
						<ActionIcon
							variant="subtle"
							aria-label="日付を次に送る"
							onClick={handleNextDate}
							disabled={!hasMultipleDates}
						>
							<IconChevronRight size={18} />
						</ActionIcon>
					</Group>
				) : (
					<Text c="dimmed">日付情報なし</Text>
				)}
			</Group>

			{/* Dates */}
			{dateCarouselItems.length > 0 ? (
				<SessionDateCarousel
					items={dateCarouselItems}
					activeIndex={activeDateIndex}
					onSelect={handleSelectDate}
				/>
			) : (
				<Card withBorder radius="lg" p="md">
					<Text size="sm" c="dimmed">
						日付情報がありません
					</Text>
				</Card>
			)}

			{/* Lists */}
			<Stack gap="xl">
				<ExerciseListCard
					title="本日のセッション"
					items={sessionMenu}
					highlight="スタート 08:00"
				/>
				{homeworkMenu.length > 0 && (
					<ExerciseListCard
						title="宿題メニュー"
						items={homeworkMenu}
					/>
				)}
			</Stack>
		</Stack>
	);
}

// --- Demo (削除可能) ---
export function DemoContentCalendar() {
	const sessionMenu: ExerciseMenuItem[] = [
		{
			name: "ダイナミックストレッチ",
			volume: "10分",
			note: "股関節まわりを中心に可動域を広げる",
		},
		{
			name: "スクワット",
			volume: "4セット × 10回",
			note: "60kgから始めてセットごとに5kgずつ増やす",
		},
		{
			name: "ブルガリアンスクワット",
			volume: "3セット × 12回",
			note: "左右差を意識してフォームを確認",
		},
		{
			name: "プランク",
			volume: "3セット × 45秒",
			note: "腹圧を抜かず体幹を安定させる",
		},
	];
	const homeworkMenu: ExerciseMenuItem[] = [
		{
			name: "ヒップリフト",
			volume: "3セット × 15回",
			note: "就寝前に実施し、臀部の収縮を意識",
		},
		{
			name: "ドローイン",
			volume: "5分",
			note: "朝晩で各5分ずつ腹横筋を活性化",
		},
	];
	return (
		<ContentCalendarCard
			sessionMenu={sessionMenu}
			homeworkMenu={homeworkMenu}
		/>
	);
}
