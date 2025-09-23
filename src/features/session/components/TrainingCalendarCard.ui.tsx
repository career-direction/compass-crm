import React, { useEffect, useState } from "react";
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
import { IconPlus, IconTrash } from "@tabler/icons-react";

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
						{sets.map((s, i) => (
							<Grid.Col key={i} span={12}>
								<SetRow
									index={i + 1}
									value={s}
									onChange={(next) => updateSet(i, next)}
									onRemove={() => removeSet(i)}
								/>
							</Grid.Col>
						))}
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
import { IconDotsVertical } from "@tabler/icons-react";

export type CalendarPost = { time: string; title: string };

export interface ContentCalendarProps {
	dateLabel?: string; // 例: "14th January, 2025"
	selectedWeekdayIndex?: number; // 0:Sun - 6:Sat
	scheduled: CalendarPost[];
	assignments: CalendarPost[];
}

const weekShort = ["S", "M", "T", "W", "T", "F", "S"];

function WeekStrip({ selected = 2 }: { selected?: number }) {
	return (
		<Group gap="md" align="stretch">
			{weekShort.map((d, idx) => {
				const active = idx === selected;
				return (
					<Card
						key={idx}
						radius="xl"
						withBorder
						p="xs"
						style={{ width: 48, textAlign: "center" }}
						bg={active ? "gray.0" : undefined}
					>
						<Stack align="center" gap={2}>
							<Text size="sm" c="dimmed">
								{d}
							</Text>
							<Card
								radius="lg"
								px="sm"
								py={6}
								withBorder={false}
								bg={active ? "white" : "transparent"}
							>
								<Text fw={700}>{[11, 12, 13, 14, 15, 16, 17][idx]}</Text>
							</Card>
							{active && (
								<Group gap={4} mt={2}>
									<Box w={6} h={6} bg="gray.8" style={{ borderRadius: 6 }} />
									<Box w={6} h={6} bg="gray.5" style={{ borderRadius: 6 }} />
									<Box w={6} h={6} bg="gray.3" style={{ borderRadius: 6 }} />
									<Box w={6} h={6} bg="gray.2" style={{ borderRadius: 6 }} />
								</Group>
							)}
						</Stack>
					</Card>
				);
			})}
		</Group>
	);
}

function PostRow({ post }: { post: CalendarPost }) {
	return (
		<Group align="flex-start" justify="space-between" wrap="nowrap">
			<Group gap="xs" wrap="nowrap" align="flex-start" style={{ flex: 1 }}>
				<Stack gap={6} align="center">
					<Box w={3} h={30} bg="gray.3" style={{ borderRadius: 2 }} />
				</Stack>
				<Stack gap={2} style={{ flex: 1 }}>
					<Text size="sm" c="dimmed">
						{post.time}
					</Text>
					<Text fw={500}>{post.title}</Text>
				</Stack>
			</Group>
			<ActionIcon variant="subtle" aria-label="menu">
				<IconDotsVertical size={18} />
			</ActionIcon>
		</Group>
	);
}

function PostListCard({
	title,
	posts,
	liveAt,
}: {
	title: string;
	posts: CalendarPost[];
	liveAt?: string;
}) {
	return (
		<Card withBorder radius="xl" p="lg">
			<Stack gap="md">
				<Group justify="space-between" align="center">
					<Text c="dimmed">{title}</Text>
					{liveAt && (
						<Group gap={8} align="center">
							<Box w={8} h={8} bg="green" style={{ borderRadius: 8 }} />
							<Text fw={600}>{liveAt}</Text>
						</Group>
					)}
				</Group>
				<Stack gap="lg">
					{posts.map((p, i) => (
						<PostRow key={i} post={p} />
					))}
				</Stack>
			</Stack>
		</Card>
	);
}

export function ContentCalendarCard({
	dateLabel = "14th January, 2025",
	selectedWeekdayIndex = 2,
	scheduled,
	assignments,
}: ContentCalendarProps) {
	return (
		<Stack gap="lg">
			{/* Header */}
			<Group justify="space-between" align="baseline">
				<Text size="xl" fw={700}>
					Content calendar
				</Text>
				<Text c="dimmed">{dateLabel}</Text>
			</Group>

			{/* Week */}
			<WeekStrip selected={selectedWeekdayIndex} />

			{/* Lists */}
			<Stack gap="xl">
				<PostListCard
					title="Scheduled posts for today"
					posts={scheduled}
					liveAt="08:00 am"
				/>
				<Group justify="space-between">
					<Text size="xl" fw={700}>
						My assignments
					</Text>
					<Text c="dimmed">{assignments.length} Tasks</Text>
				</Group>
				<PostListCard title="" posts={assignments} />
			</Stack>
		</Stack>
	);
}

// --- Demo (削除可能) ---
export function DemoContentCalendar() {
	const scheduled: CalendarPost[] = [
		{
			time: "06:30 am",
			title: "The Art of Balancing Aesthetics and Usability in Design",
		},
		{
			time: "10:00 am",
			title: "Why a Design-First Approach Is the Key to Creating Impa…",
		},
		{
			time: "02:00 pm",
			title: "Design Systems: The Secret Sauce for Scalable Product De…",
		},
		{
			time: "05:00 pm",
			title: "From Bedroom Pop to Indie Rock: My Playlist for Productivity",
		},
	];
	const assignments: CalendarPost[] = scheduled.slice(1);
	return (
		<ContentCalendarCard scheduled={scheduled} assignments={assignments} />
	);
}
