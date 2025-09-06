import { Button, type ButtonProps } from "@mantine/core";
import { forwardRef } from "react";

export type Props = ButtonProps & {
	onClick?: () => void;
};

export const CPButton = forwardRef<HTMLButtonElement, Props>(
	({ children, ...props }, ref) => {
		return (
			<Button ref={ref} color="brand" {...props}>
				{children}
			</Button>
		);
	},
);
