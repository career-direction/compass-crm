import { Button, type ButtonProps } from "@mantine/core";
import { forwardRef } from "react";

export type Props = ButtonProps & {
	onClick?: () => void;
};

export const CPButton = forwardRef<HTMLButtonElement, Props>(
	({ children, variant = "filled", ...props }, ref) => {
		const getGradientStyles = () => {
			switch (variant) {
				case "filled":
					return {
						background: "linear-gradient(135deg, #ffa94d, #FF6000)",
						border: "none",
						"&:hover": {
							background: "linear-gradient(135deg, #fd7e14, #e8590c)",
							transform: "translateY(-1px)",
						},
						"&:active": {
							transform: "translateY(0)",
						},
					};
				case "light":
					return {
						backgroundColor: "#fff4e6",
						color: "#FF6000",
						border: "none",
						"&:hover": {
							backgroundColor: "#ffe8cc",
							transform: "translateY(-1px)",
						},
						"&:active": {
							transform: "translateY(0)",
						},
					};
				case "outline":
					return {
						borderColor: "#FF6000",
						color: "#FF6000",
						backgroundColor: "transparent",
						"&:hover": {
							backgroundColor: "#fff4e6",
							transform: "translateY(-1px)",
						},
						"&:active": {
							transform: "translateY(0)",
						},
					};
				default:
					return {};
			}
		};

		return (
			<Button
				ref={ref}
				color="brand"
				variant={variant}
				styles={{
					root: getGradientStyles(),
				}}
				{...props}
			>
				{children}
			</Button>
		);
	},
);
