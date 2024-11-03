import type { Dialog as DialogPrimitive } from "@radix-ui/react-dialog"
import type { Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, Dispatch, ReactNode, SetStateAction } from "react"

type DialogRootPrimitiveProps = Omit<ComponentPropsWithRef<typeof DialogPrimitive>, 'children'>

type DialogRootRenderProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

type DialogRootCustomProps = {
  children: ((props: DialogRootRenderProps) => ReactNode) | ReactNode
}

type DialogRootProps = Simplify<DialogRootPrimitiveProps & DialogRootCustomProps>

export type { DialogRootProps }
