import { type VariantProps, cva } from "@renderui/utils"

const buttonClasses = cva(
  "_button group relative box-border inline-flex cursor-pointer select-none appearance-none items-center justify-center gap-3 whitespace-nowrap rounded text-sm font-medium outline-none ring-ring-color ring-offset-background transition-[box-shadow,color,background-color,transform,opacity] duration-fast data-[loading=true]:cursor-default",
  {
    variants: {
      variant: {
        plain: "text-mode-foreground",
        solid: undefined,
        outline: undefined,
        text: "data-[hover=true]:text-[rgba(var(--button-bg),0.85)]",
        ghost: "data-[hover=true]:bg-[rgba(var(--button-bg),0.15)]",
        shadow: "shadow-lg shadow-[rgba(var(--button-bg),0.3)]",
        light:
          "bg-[rgba(var(--button-bg),0.15)] text-[rgba(var(--button-bg))] data-[hover=true]:bg-[rgba(var(--button-bg),0.2)]",
      },
      size: {
        auto: undefined,
        icon: "apsect-square p-1",
        small: "px-4.5 py-2 text-xs",
        medium: "px-5 py-2.5 text-sm",
        large: "px-7 py-3 text-base",
      },
      hasDefaultFocusVisibleStyles: {
        true: "data-[focus-visible=true]:ring data-[focus-visible=true]:ring-offset",
        false: undefined,
      },
      hasRingOnAnyFocus: {
        true: "data-[focus=true]:ring data-[focus=true]:ring-offset",
        false: undefined,
      },
      hasDefaultInnerRing: {
        true: undefined,
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
      hasLowerOpacityOnLoading: {
        true: "data-[loading=true]:opacity-70",
        false: undefined,
      },
      hasContentOnLoading: {
        true: undefined,
        false: "data-[loading=true]:text-transparent",
      },
      hasDisabledStyles: {
        true: "disabled:cursor-not-allowed disabled:opacity-40",
        false: undefined,
      },
      hasShadowOnHover: {
        true: "data-[hover=true]:shadow-md data-[hover=true]:shadow-[rgba(var(--button-bg),0.2)]",
        false: undefined,
      },
    },
    compoundVariants: [
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
        hasDefaultHoverStyles: true,
        variant: ["solid", "shadow"],
        className: "data-[hover=true]:bg-[rgba(var(--button-bg),0.85)]",
      },
      {
        variant: ["text", "outline", "ghost"],
        className:
          "text-[rgba(var(--button-bg))] data-[pressed=true]:text-[rgba(var(--button-bg))]",
      },
      {
        hasDefaultHoverStyles: true,
        variant: ["outline"],
        className:
          "data-[hover=true]:before:ring-[rgba(var(--button-bg))] data-[hover=true]:data-[pressed=true]:before:ring-[rgba(var(--button-bg))]",
      },
      {
        variant: "outline",
        className:
          "before:absolute before:ring before:ring-[1px] before:ring-inset before:ring-[rgba(var(--button-bg))] before:ring-offset-[0px] before:transition-[inherit] before:duration-[inherit]",
      },
      {
        hasDefaultHoverStyles: true,
        variant: "outline",
        className: "data-[hover=true]:bg-[rgba(var(--button-bg),0.1)]",
      },
    ],
  },
)

type ButtonClassesProps = VariantProps<typeof buttonClasses>

export { buttonClasses, type ButtonClassesProps }
