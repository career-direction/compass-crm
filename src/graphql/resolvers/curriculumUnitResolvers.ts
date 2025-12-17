import { eq, inArray } from "drizzle-orm";
import { curriculumUnits, requiredFunctions } from "@/db/schema";
import type {
	CurriculumUnit,
	MutationResolvers,
	QueryResolvers,
	RequiredFunction,
} from "@/generated/graphql-resolvers";
import type { Context } from "../types";
import { formatDateString } from "./mappers";
import { requireAdmin, requireAuth } from "../utils/auth";

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
			// 認証チェック
			requireAuth(context.user);

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

			// N+1問題を解決: inArrayで一括取得
			const functions = await context.db
				.select()
				.from(requiredFunctions)
				.where(inArray(requiredFunctions.curriculumUnitId, unitIds));

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
			// 管理者のみカリキュラム作成可能
			requireAdmin(context.user);

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

