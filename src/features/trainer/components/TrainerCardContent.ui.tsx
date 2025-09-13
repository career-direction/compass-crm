import { Avatar, Flex, Text } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";

export const TrainerCardContent = () => {
	return (
		<>
			<Flex justify="flex-end" direction="row">
				<IconDots />
			</Flex>
			<Flex direction="column" align="center" justify="center">
				<Avatar color="cyan" radius="60px" size="120px">
					MK
				</Avatar>
				<Flex direction="column" align="center" justify="center" m={10}>
					<Text size="lg" fw={700}>
						坂田航樹
					</Text>
					<Text size="md" c="gray">
						Koki Sakata
					</Text>
				</Flex>
			</Flex>
		</>
	);
};
