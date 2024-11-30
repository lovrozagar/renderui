import type { PopoverClose as PopoverClosePrimitive } from "@radix-ui/react-popover"
import type { ClassValue, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type PopoverClosePrimitivePrimitiveProps = Omit<ComponentPropsWithRef<typeof PopoverClosePrimitive>, 'className'>

type PopoverClosePrimitiveCustomProps = {
  className?: ClassValue
}

type PopoverClosePrimitiveProps = Simplify<PopoverClosePrimitivePrimitiveProps & PopoverClosePrimitiveCustomProps>

export type { PopoverClosePrimitiveProps }
