import type {
  DialogContent as SheetContentPrimitive,
  DialogPortal as SheetPortalPrimitive,
} from "@radix-ui/react-dialog"
import type { ButtonProps } from "@renderui/button"
import type { OverlayProps } from "@renderui/overlay"
import type { ClassNameProps, Simplify, VariantProps } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"
import type { sheetClasses } from "../classes/sheet-classes"

type SheetContentPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof SheetContentPrimitive>,
  "className" | "onPointerDownOutside"
>

type SheetContentCustomProps = ClassNameProps &
  VariantProps<typeof sheetClasses> & {
    hasCloseButton?: boolean
    hasOverlay?: boolean
    portalProps?: ComponentPropsWithRef<typeof SheetPortalPrimitive>
    overlayProps?: OverlayProps
    closeButtonProps?: ButtonProps
    closeButtonIconProps?: ComponentPropsWithRef<"svg">
    smallSizeWidth?: "3/4" | "full"
    onPointerDownOutside?: (event: PointerEvent) => void
  }

type SheetContentProps = Simplify<SheetContentPrimitiveProps & SheetContentCustomProps> &
  AnimationStyleVariables

export type { SheetContentProps }
