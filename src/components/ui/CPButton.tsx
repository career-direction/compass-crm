import { Button, type ButtonProps } from "@mantine/core";
import { type ComponentPropsWithoutRef, type ReactNode, forwardRef } from "react";

export type Props = ButtonProps &
	Pick<ComponentPropsWithoutRef<"button">, "type" | "onClick"> & {
		prefixIcon?: ReactNode;
		suffixIcon?: ReactNode;
	};

export const CPButton = forwardRef<HTMLButtonElement, Props>(
	({ children, variant = "filled", prefixIcon, suffixIcon, ...props }, ref) => {
		const getGradientStyles = () => {
			switch (variant) {
				case "filled":
					return {
						root: {
							background: "linear-gradient(135deg, #ffa94d, #FF6000)",
							border: "none",
							"&[dataHovered]": {
								background: "linear-gradient(135deg, #fd7e14, #e8590c)",
								transform: "translateY(-1px)",
							},
							"&[dataActive]": {
								transform: "translateY(0)",
							},
						},
					};
				case "light":
					return {
						root: {
							backgroundColor: "#fff4e6",
							color: "#FF6000",
							border: "none",
							"&[dataHovered]": {
								backgroundColor: "#ffe8cc",
								transform: "translateY(-1px)",
							},
							"&[dataActive]": {
								transform: "translateY(0)",
							},
						},
					};
				case "outline":
					return {
						root: {
							borderColor: "#FF6000",
							color: "#FF6000",
							backgroundColor: "transparent",
							"&[dataHovered]": {
								backgroundColor: "#fff4e6",
								transform: "translateY(-1px)",
							},
							"&[dataActive]": {
								transform: "translateY(0)",
							},
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
				leftSection={prefixIcon}
				rightSection={suffixIcon}
				styles={getGradientStyles()}
				{...props}
			>
				{children}
			</Button>
		);
	},
);
