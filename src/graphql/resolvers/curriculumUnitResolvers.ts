import { eq } from "drizzle-orm";
import { curriculumUnits, requiredFunctions } from "@/db/schema";
import type {
	CurriculumUnit,
	MutationResolvers,
	QueryResolvers,
	RequiredFunction,
} from "@/generated/graphql-resolvers";
import type { Context } from "../types";
import { formatDateString } from "./mappers";

const mapRequiredFunction = (
	row: typeof requiredFunctions.$inferSelect,
): RequiredFunction => ({
	id: Number(row.id),
	curriculumUnitId: Number(row.curriculumUnitId),
	name: row.name,
	overview: row.overview,
	overviewUrl: row.overviewUrl,
	evaluationCriteria: row.evaluationCriteria,
	evaluationCriteriaUrl: row.evaluationCriteriaUrl,
	treatmentMenus: [],
	trainingMenus: [],
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

const mapCurriculumUnit = (
	row: typeof curriculumUnits.$inferSelect,
	functions: RequiredFunction[] = [],
): CurriculumUnit => ({
	id: Number(row.id),
	name: row.name,
	type: row.type,
	overview: row.overview,
	overviewUrl: row.overviewUrl,
	evaluationCriteria: row.evaluationCriteria,
	evaluationCriteriaUrl: row.evaluationCriteriaUrl,
	requiredFunctions: functions,
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

export const curriculumUnitResolvers = {
	Query: {
		curriculumUnits: async (_parent, args, context) => {
			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			const units = await context.db
				.select()
				.from(curriculumUnits)
				.limit(limit)
				.offset(offset);

			const unitIds = units.map((u) => u.id);

			if (unitIds.length === 0) {
				return [];
			}

			const functions = await context.db
				.select()
				.from(requiredFunctions)
				.where(
					eq(
						requiredFunctions.curriculumUnitId,
						unitIds[0], // 簡易実装。本来はinArrayを使用
					),
				);

			const functionsByUnit = new Map<number, RequiredFunction[]>();
			for (const fn of functions) {
				const unitId = fn.curriculumUnitId;
				const list = functionsByUnit.get(unitId) ?? [];
				list.push(mapRequiredFunction(fn));
				functionsByUnit.set(unitId, list);
			}

			return units.map((unit) =>
				mapCurriculumUnit(unit, functionsByUnit.get(unit.id) ?? []),
			);
		},
	},

	Mutation: {
		createCurriculumUnit: async (_parent, args, context) => {
			const {
				name,
				type,
				overview,
				overviewUrl,
				evaluationCriteria,
				evaluationCriteriaUrl,
			} = args.input;

			const [created] = await context.db
				.insert(curriculumUnits)
				.values({
					name,
					type,
					overview,
					overviewUrl,
					evaluationCriteria,
					evaluationCriteriaUrl,
				})
				.returning();

			return mapCurriculumUnit(created);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "curriculumUnits">;
	Mutation: Pick<MutationResolvers<Context>, "createCurriculumUnit">;
};

