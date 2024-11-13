import { cva } from "@renderui/utils"

const inputContainerClasses = cva(
	'group relative box-border appearance-none min-w-0 flex justify-center whitespace-nowrap rounded text-sm font-medium outline-none transition-[box-shadow,background-color,transform,opacity] duration-fast disabled:cursor-not-allowed disabled:opacity-40 cursor-text items-center overflow-hidden text-mode-contrast before:content-[""] before:absolute before:block before:left-0 before:top-0 before:size-full before:rounded-[inherit] before:z-[2] before:pointer-events-none before:ring-[rgba(var(--container-color))] before:ring-offset-0 before:ring-offset-background before:transition-[box-shadow,background-color,transform,opacity] before:duration-fast',
	{
		variants: {
			variant: {
				solid: "bg-mode-accent before:ring-inset",
				outline: "ring-mode-accent ring-[2px] ring-inset ring-offset-[0px] before:ring-inset",
			},
			size: {
				"extra-small": "h-[32px]",
				small: "h-[36px]",
				medium: "h-[40px]",
				large: "h-[46px]",
				"extra-large": "h-[52px]",
			},
			hasDefaultHoverStyles: {
				true: "data-[hover=true]:data-[focus-within=true]:before:ring-[2px] data-[hover=true]:before:ring-[1px]",
				false: undefined,
			},
			hasDefaultFocusWithinStyles: {
				true: "data-[focus-within=true]:before:ring-[2px]",
				false: undefined,
			},
			hasDefaultInvalidStyles: {
				true: "data-[invalid=true]:before:ring-destructive",
				false: undefined,
			},
			isDisabled: {
				true: "opacity-50",
				false: undefined,
			},
		},
	},
)

export { inputContainerClasses }
