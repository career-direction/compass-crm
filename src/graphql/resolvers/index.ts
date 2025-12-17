import { assignmentResolvers } from "./assignmentResolvers";
import { bodyConditionResolvers } from "./bodyConditionResolvers";
import { clientResolvers } from "./clientResolvers";
import { curriculumUnitResolvers } from "./curriculumUnitResolvers";
import { learningMaterialResolvers } from "./learningMaterialResolvers";
import { midtermHealthPurposeResolvers } from "./midtermHealthPurposeResolvers";
import { requiredFunctionResolvers } from "./requiredFunctionResolvers";
import { sessionResolvers } from "./sessionResolvers";
import { trainerResolvers } from "./trainerResolvers";
import { trainingMenuResolvers } from "./trainingMenuResolvers";
import { treatmentMenuResolvers } from "./treatmentMenuResolvers";
import { userResolvers } from "./userResolvers";

export const resolvers = {
	Query: {
		...userResolvers.Query,
		...clientResolvers.Query,
		...trainerResolvers.Query,
		...sessionResolvers.Query,
		...bodyConditionResolvers.Query,
		...midtermHealthPurposeResolvers.Query,
		...assignmentResolvers.Query,
		...learningMaterialResolvers.Query,
		...curriculumUnitResolvers.Query,
		...requiredFunctionResolvers.Query,
		...treatmentMenuResolvers.Query,
		...trainingMenuResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
		...clientResolvers.Mutation,
		...trainerResolvers.Mutation,
		...sessionResolvers.Mutation,
		...bodyConditionResolvers.Mutation,
		...midtermHealthPurposeResolvers.Mutation,
		...assignmentResolvers.Mutation,
		...learningMaterialResolvers.Mutation,
		...curriculumUnitResolvers.Mutation,
		...requiredFunctionResolvers.Mutation,
		...treatmentMenuResolvers.Mutation,
		...trainingMenuResolvers.Mutation,
	},
};

export type { Context } from "../types";
