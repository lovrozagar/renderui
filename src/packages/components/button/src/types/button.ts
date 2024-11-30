import type { RippleProps } from "@renderui/ripple"
import type { ClassValue } from "@renderui/utils"
import type { ClassNameProps, Color, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"
import type { ButtonClassesProps } from "../classes/button-classes"
import type { useButton } from "../hooks/use-button"

type ButtonPrimitiveProps = Omit<
	ComponentPropsWithRef<"button">,
	"className" | "children" | "disabled" | "color"
>

type ButtonRenderPropProps = ReturnType<typeof useButton>["ui"]["renderProps"]

type ButtonRenderProp = ((props: ButtonRenderPropProps) => ReactNode) | ReactNode

type LoaderPosition = "start" | "end"

type ButtonCustomProps = ClassNameProps &
	ButtonClassesProps &
	PolymorphicProps & {
		/* Children element or render function. */
		children?: ButtonRenderProp

		/** Content rendered before children, can be element or render function. */
		startContent?: ButtonRenderProp

		/** Content rendered after children, can be element or render function. */
		endContent?: ButtonRenderProp

		/** Content rendered instead of children only when button has loading: true, can be element or render function. */
		loadingContent?: ButtonRenderProp

		/** Loader displayed when loading: true, can be element or render function. */
		loader?: ButtonRenderProp

		/** Position of the loader relative to children. */
		loaderPosition?: LoaderPosition

		/** Button color variant. */
		color?: Color

		/** Controls styles and interactivity. */
		isDisabled?: boolean

		/** Controls styles, interactivity and loader. */
		isLoading?: boolean

		/* Controls if Ripple is merged with button to have ripple functionality on interaction. */
		hasRipple?: boolean

		/** Props passed to the ripple component. */
		rippleProps?: RippleProps

		/** ClassNames applied to element slots, have highest specificity. */
		classNames?: {
			button?: ClassValue
			"ripple-item"?: ClassValue
		}

		/** Same as onClick but stops click propagation by default if passed. */
		onPress?: ButtonPrimitiveProps["onClick"]
	}

type ButtonProps = Simplify<ButtonPrimitiveProps & ButtonCustomProps>

export type { ButtonProps }
