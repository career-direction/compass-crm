"use client";

import { Box, List, Title } from "@mantine/core";
import { SessionListItem } from "../components/SessionListItem.ui";

export const SessionList = () => {
	return (
		<>
			<Box mb="md">
				<Title>セッション一覧</Title>
			</Box>
			<List>
				<List.Item>
					<SessionListItem />
				</List.Item>
				<List.Item>
					<SessionListItem />
				</List.Item>
			</List>
		</>
	);
};
