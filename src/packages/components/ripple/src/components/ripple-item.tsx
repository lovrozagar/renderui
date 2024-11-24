import { type ClassNameProps, type Simplify, cn } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"
import { DEFAULT_RIPPLE_ITEM_CLASSNAME } from "../constants/constants"

type RippleItemPrimitiveProps = Omit<ComponentPropsWithRef<"span">, "className">

type RippleItemCustomProps = ClassNameProps

type RippleItemProps = Simplify<RippleItemPrimitiveProps & RippleItemCustomProps>

const RippleItem = (props: RippleItemProps) => {
	const { className, ...restProps } = props

	return (
		<span
			data-slot="ripple-item"
			className={cn(DEFAULT_RIPPLE_ITEM_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { RippleItem }
