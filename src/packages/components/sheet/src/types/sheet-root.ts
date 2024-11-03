import type { Dialog as DialogPrimitive } from "@radix-ui/react-dialog"
import type { Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, Dispatch, ReactNode, SetStateAction } from "react"

type SheetRootPrimitiveProps = Omit<ComponentPropsWithRef<typeof DialogPrimitive>, "children">

type SheetRootRenderProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

type SheetRootCustomProps = {
  children: ((props: SheetRootRenderProps) => ReactNode) | ReactNode
}

type SheetRootProps = Simplify<SheetRootPrimitiveProps & SheetRootCustomProps>

export type { SheetRootProps }
