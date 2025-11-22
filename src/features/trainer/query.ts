import { graphql } from "../../gql";

export const allFilmsWithVariablesQueryDocument = graphql(`
	query GetTrainers {
		trainers {
			id
			user {
				first_name
				last_name
			}
		}
	}
`);
