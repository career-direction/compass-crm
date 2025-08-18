"use client";

import { List } from "@mantine/core";
import { SessionListItem } from "../components/SessionListItem.ui";

export const SessionList = () => {
	return (
		<List>
			<List.Item>
				<SessionListItem />
			</List.Item>
			<List.Item>
				<SessionListItem />
			</List.Item>
		</List>
	);
};
