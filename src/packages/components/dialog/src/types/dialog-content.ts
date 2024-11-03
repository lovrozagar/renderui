import type {
  DialogContent as DialogContentPrimitive,
  DialogPortal as DialogPortalPrimitive,
} from "@radix-ui/react-dialog"
import type { ButtonProps } from "@renderui/button"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"

type DialogContentPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof DialogContentPrimitive>,
  "className" | "onPointerDownOutside"
>

type DialogContentCustomProps = ClassNameProps & {
  portalProps?: ComponentPropsWithRef<typeof DialogPortalPrimitive>
  overlayProps?: ComponentPropsWithRef<typeof DialogPortalPrimitive>
  closeButtonProps?: ButtonProps
  closeButtonIconProps?: ComponentPropsWithRef<"svg">
  hasCloseButton?: boolean
  onPointerDownOutside?: (event: PointerEvent) => void
}

type DialogContentProps = Simplify<DialogContentPrimitiveProps & DialogContentCustomProps> &
  AnimationStyleVariables

export type { DialogContentProps }
