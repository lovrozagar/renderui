import type {
  DialogContent as DialogContentPrimitive,
  DialogPortal as DialogPortalPrimitive,
} from "@radix-ui/react-dialog"
import type { ButtonProps } from "@renderui/button"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"
import type { DialogOverlayProps } from "./dialog-overlay"

type DialogContentPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof DialogContentPrimitive>,
  "className" | "onPointerDownOutside"
>

type DialogContentCustomProps = ClassNameProps & {
  hasCloseButton?: boolean
  hasOverlay?: boolean
  portalProps?: ComponentPropsWithRef<typeof DialogPortalPrimitive>
  overlayProps?: DialogOverlayProps
  closeButtonProps?: ButtonProps
  closeButtonIconProps?: ComponentPropsWithRef<"svg">
  onPointerDownOutside?: (event: PointerEvent) => void
}

type DialogContentProps = Simplify<DialogContentPrimitiveProps & DialogContentCustomProps> &
  AnimationStyleVariables

export type { DialogContentProps }
