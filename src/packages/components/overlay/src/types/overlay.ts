import type { DialogOverlay as OverlayPrimitive } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"

type OverlayPrimitiveProps = Omit<ComponentPropsWithRef<typeof OverlayPrimitive>, "className">

type OverlayCustomProps = AnimationStyleVariables & ClassNameProps

type OverlayProps = Simplify<OverlayPrimitiveProps & OverlayCustomProps>

export type { OverlayProps }
