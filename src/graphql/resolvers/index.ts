import { clientResolvers } from "./clientResolvers";
import { trainerResolvers } from "./trainerResolvers";
import { sessionResolvers } from "./sessionResolvers";

export const resolvers = {
	Query: {
		...clientResolvers.Query,
		...trainerResolvers.Query,
		...sessionResolvers.Query,
	},
	Mutation: {
		...clientResolvers.Mutation,
		...trainerResolvers.Mutation,
		...sessionResolvers.Mutation,
	},
};

export type { Context } from "../types";
