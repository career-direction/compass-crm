"use client";

import { Card, type CardProps } from "@mantine/core";
import { forwardRef } from "react";

export type Props = CardProps;

export const CPCard = forwardRef<HTMLDivElement, Props>(
	({ children, ...props }, ref) => {
		return (
			<Card ref={ref} shadow="sm" padding="lg" radius="md" {...props}>
				{children}
			</Card>
		);
	},
);

CPCard.displayName = "CPCard";
