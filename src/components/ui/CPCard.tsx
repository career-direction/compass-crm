"use client";

import { Card, type CardProps } from "@mantine/core";
import { forwardRef } from "react";

export type Props = CardProps & {
	onClick?: () => void;
};

export const CPCard = forwardRef<HTMLDivElement, Props>(
	({ children, onClick, ...props }, ref) => {
		return (
			<Card
				ref={ref}
				shadow="md"
				padding="lg"
				radius="md"
				{...props}
				onClick={onClick}
			>
				{children}
			</Card>
		);
	},
);

CPCard.displayName = "CPCard";
