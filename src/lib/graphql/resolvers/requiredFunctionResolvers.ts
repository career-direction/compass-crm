import { eq, inArray } from "drizzle-orm";

import { requiredFunctions, trainingMenus, treatmentMenus } from "@/db/schema";
import type {
	MutationResolvers,
	QueryResolvers,
	RequiredFunction,
	TrainingMenu,
	TreatmentMenu,
} from "@/lib/graphql/generated/server/graphql-resolvers";

import type { Context } from "../context";
import { requireTrainer } from "@/features/auth/auth";
import { formatDateString } from "./mappers";

const mapTreatmentMenu = (
	row: typeof treatmentMenus.$inferSelect,
): TreatmentMenu => ({
	id: Number(row.id),
	name: row.name,
	requiredFunctionId: Number(row.requiredFunctionId),
	requiredFunction: null,
	learningMaterialId: Number(row.learningMaterialId),
	learningMaterial: null,
	tips: row.tips,
	commonErrors: row.commonErrors,
	targetMuscles: row.targetMuscles,
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

const mapTrainingMenu = (
	row: typeof trainingMenus.$inferSelect,
): TrainingMenu => ({
	id: Number(row.id),
	name: row.name,
	requiredFunctionId: Number(row.requiredFunctionId),
	requiredFunction: null,
	learningMaterialId: Number(row.learningMaterialId),
	learningMaterial: null,
	tips: row.tips,
	commonErrors: row.commonErrors,
	targetMuscles: row.targetMuscles,
	level: row.level,
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

const mapRequiredFunction = (
	row: typeof requiredFunctions.$inferSelect,
	treatments: TreatmentMenu[] = [],
	trainings: TrainingMenu[] = [],
): RequiredFunction => ({
	id: Number(row.id),
	curriculumUnitId: Number(row.curriculumUnitId),
	curriculumUnit: null,
	name: row.name,
	overview: row.overview,
	overviewUrl: row.overviewUrl,
	evaluationCriteria: row.evaluationCriteria,
	evaluationCriteriaUrl: row.evaluationCriteriaUrl,
	treatmentMenus: treatments,
	trainingMenus: trainings,
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

export const requiredFunctionResolvers = {
	Query: {
		requiredFunctions: async (_parent, args, context) => {
			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			const functions = await context.db
				.select()
				.from(requiredFunctions)
				.where(eq(requiredFunctions.curriculumUnitId, args.curriculumUnitId))
				.limit(limit)
				.offset(offset);

			if (functions.length === 0) {
				return [];
			}

			const functionIds = functions.map((f) => f.id);

			const [treatments, trainings] = await Promise.all([
				context.db
					.select()
					.from(treatmentMenus)
					.where(inArray(treatmentMenus.requiredFunctionId, functionIds)),
				context.db
					.select()
					.from(trainingMenus)
					.where(inArray(trainingMenus.requiredFunctionId, functionIds)),
			]);

			const treatmentsByFn = new Map<number, TreatmentMenu[]>();
			for (const t of treatments) {
				const fnId = t.requiredFunctionId;
				const list = treatmentsByFn.get(fnId) ?? [];
				list.push(mapTreatmentMenu(t));
				treatmentsByFn.set(fnId, list);
			}

			const trainingsByFn = new Map<number, TrainingMenu[]>();
			for (const t of trainings) {
				const fnId = t.requiredFunctionId;
				const list = trainingsByFn.get(fnId) ?? [];
				list.push(mapTrainingMenu(t));
				trainingsByFn.set(fnId, list);
			}

			return functions.map((fn) =>
				mapRequiredFunction(
					fn,
					treatmentsByFn.get(fn.id) ?? [],
					trainingsByFn.get(fn.id) ?? [],
				),
			);
		},
	},

	Mutation: {
		createRequiredFunction: async (_parent, args, context) => {
			// トレーナー以上の権限が必要
			requireTrainer(context.user);

			const {
				curriculumUnitId,
				name,
				overview,
				overviewUrl,
				evaluationCriteria,
				evaluationCriteriaUrl,
			} = args.input;

		const [created] = await context.db
			.insert(requiredFunctions)
			.values({
				curriculumUnitId,
				name,
				overview,
				overviewUrl,
				evaluationCriteria,
				evaluationCriteriaUrl,
			})
			.returning();

			return mapRequiredFunction(created);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "requiredFunctions">;
	Mutation: Pick<MutationResolvers<Context>, "createRequiredFunction">;
};
