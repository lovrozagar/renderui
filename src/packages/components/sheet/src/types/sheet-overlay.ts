import type { DialogOverlay as OverlayPrimitive } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"

type SheetOverlayPrimitiveProps = Omit<ComponentPropsWithRef<typeof OverlayPrimitive>, "className">

type SheetOverlayCustomProps = AnimationStyleVariables & ClassNameProps

type SheetOverlayProps = Simplify<SheetOverlayPrimitiveProps & SheetOverlayCustomProps>

export type { SheetOverlayProps }
