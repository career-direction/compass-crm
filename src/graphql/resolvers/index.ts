import { userResolvers } from "./userResolvers";
import { clientResolvers } from "./clientResolvers";
import { trainerResolvers } from "./trainerResolvers";
import { sessionResolvers } from "./sessionResolvers";

export const resolvers = {
	Query: {
		...userResolvers.Query,
		...clientResolvers.Query,
		...trainerResolvers.Query,
		...sessionResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
		...clientResolvers.Mutation,
		...trainerResolvers.Mutation,
		...sessionResolvers.Mutation,
	},
	...(userResolvers.User && { User: userResolvers.User }),
	...(userResolvers.UserCredentials && {
		UserCredentials: userResolvers.UserCredentials,
	}),
	...(clientResolvers.Client && { Client: clientResolvers.Client }),
	...(clientResolvers.ClientProfile && {
		ClientProfile: clientResolvers.ClientProfile,
	}),
	...(trainerResolvers.Trainer && { Trainer: trainerResolvers.Trainer }),
	...(trainerResolvers.TrainerProfile && {
		TrainerProfile: trainerResolvers.TrainerProfile,
	}),
	...(sessionResolvers.PTSession && { PTSession: sessionResolvers.PTSession }),
	...(sessionResolvers.PTSessionItem && {
		PTSessionItem: sessionResolvers.PTSessionItem,
	}),
};

export type { Context } from "../types";
