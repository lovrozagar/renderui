import type { DialogOverlay as DialogOverlayPrimitive } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"

type DialogOverlayPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof DialogOverlayPrimitive>,
  "className"
>

type DialogOverlayCustomProps = ClassNameProps & AnimationStyleVariables

type DialogOverlayProps = Simplify<DialogOverlayPrimitiveProps & DialogOverlayCustomProps>

export type { DialogOverlayProps }
