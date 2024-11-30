import { type VariantProps, cva } from "@renderui/utils"

const buttonClasses = cva(
	"_button group relative box-border inline-flex cursor-pointer select-none appearance-none items-center justify-center gap-x-3 whitespace-nowrap rounded font-medium outline-none ring-ring-color ring-offset-background transition-[box-shadow,color,background-color,transform,opacity] duration-fast data-[loading=true]:cursor-default",
	{
		variants: {
			variant: {
				plain: "text-mode-foreground",
				solid: undefined,
				outline: undefined,
				text: "hover:text-[rgba(var(--button-bg),0.85)]",
				ghost: "hover:bg-[rgba(var(--button-bg),0.15)]",
				shadow: "shadow-lg shadow-[rgba(var(--button-bg),0.3)]",
				light:
					"bg-[rgba(var(--button-bg),0.15)] text-[rgba(var(--button-bg))] hover:bg-[rgba(var(--button-bg),0.2)]",
			},
			size: {
				auto: undefined,
				icon: "apsect-square p-1",
				small: "px-4.5 py-2 text-xs",
				medium: "px-5 py-2.5 text-sm",
				large: "px-7 py-3 text-base",
			},
			ring: {
				default: undefined,
				"no-offset": undefined,
				"inset": undefined,
			},
			hasDefaultFocusVisibleStyles: {
				true: "focus-visible:ring",
				false: undefined,
			},
			hasRingOnAnyFocus: {
				true: "focus:ring",
				false: undefined,
			},
			hasDefaultPressedStyles: {
				true: "data-[pressed=true]:scale-pressed",
				false: undefined,
			},
			hasDefaultHoverStyles: {
				true: undefined,
				false: undefined,
			},
			hasDefaultLoadingStyles: {
				true: "data-[loading=true]:opacity-70",
				false: undefined,
			},
			hasDisabledStyles: {
				/* if disabled and loading, disabled styles have presedence */
				true: "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-40 data-[disabled=true]:data-[loading=true]:cursor-not-allowed data-[disabled=true]:data-[loading=true]:opacity-40",
				false: undefined,
			},
			hasShadowOnHover: {
				true: "hover:shadow-md hover:shadow-[rgba(var(--button-bg),0.2)]",
				false: undefined,
			},
			isInactive: {
				true: undefined,
				false: undefined,
			},
		},
		compoundVariants: [
			{
				hasDefaultFocusVisibleStyles: true,
				ring: "default",
				className: "focus-visible:ring-offset",
			},
			{
				hasDefaultFocusVisibleStyles: true,
				ring: "no-offset",
				className: "focus-visible:ring-offset-0",
			},
			{
				hasDefaultFocusVisibleStyles: true,
				ring: "inset",
				className: "focus-visible:ring-inset focus-visible:ring-offset-0",
			},
			{
				hasRingOnAnyFocus: true,
				ring: "default",
				className: "focus:ring-offset",
			},
			{
				hasRingOnAnyFocus: true,
				ring: "no-offset",
				className: "focus:ring-offset-0",
			},
			{
				hasRingOnAnyFocus: true,
				ring: "inset",
				className: "focus:ring-inset focus:ring-offset-0",
			},
			{
				variant: ["solid", "shadow", "outline"],
				className:
					'before:pointer-events-none before:inset-0 before:inline-block before:size-full before:rounded-[inherit] before:content-[""]',
			},
			{
				variant: ["solid", "shadow"],
				className: "bg-[rgba(var(--button-bg))] text-[rgba(var(--button-color))]",
			},
			{
				variant: ["solid", "shadow"],
				className:
					'before:absolute before:z-[0] before:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:pointer-events-none after:absolute after:inset-0 after:z-[0] after:inline-block after:size-full after:rounded-[inherit] after:ring after:ring-[0.5px] after:ring-inset after:ring-offset-[0px] after:content-[""] data-[color=mode-accent]:before:shadow-[shadow:inset_0_1px_theme(colors.white/10%)] data-[color=mode]:after:hidden after:ring-white/[5%]',
			},
			{
				isInactive: false,
				hasDefaultHoverStyles: true,
				variant: ["solid", "shadow"],
				className: "hover:bg-[rgba(var(--button-bg),0.85)]",
			},
			{
				variant: ["text", "outline", "ghost"],
				className:
					"text-[rgba(var(--button-bg))] data-[pressed=true]:text-[rgba(var(--button-bg))]",
			},
			{
				isInactive: false,
				hasDefaultHoverStyles: true,
				variant: ["outline"],
				className:
					"hover:before:ring-[rgba(var(--button-bg))] hover:data-[pressed=true]:before:ring-[rgba(var(--button-bg))]",
			},
			{
				variant: "outline",
				className:
					"before:absolute before:ring before:ring-[1px] before:ring-inset before:ring-[rgba(var(--button-bg))] before:ring-offset-[0px] before:transition-[inherit] before:duration-[inherit]",
			},
			{
				isInactive: false,
				hasDefaultHoverStyles: true,
				variant: "outline",
				className: "hover:bg-[rgba(var(--button-bg),0.1)]",
			},
		],
	},
)

type ButtonClassesProps = Omit<VariantProps<typeof buttonClasses>, "isInactive">

export { buttonClasses, type ButtonClassesProps }
