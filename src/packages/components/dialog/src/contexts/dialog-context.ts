import { createContext } from "@radix-ui/react-context"
import type { useControllableState } from "@radix-ui/react-use-controllable-state"
import type { RefObject } from "react"

type DialogContext = {
  triggerRef: RefObject<HTMLButtonElement>
  open: ReturnType<typeof useControllableState<boolean>>[0]
  setOpen: ReturnType<typeof useControllableState<boolean>>[1]
}

const [DialogProvider, useDialogContext] = createContext<DialogContext>("DialogRoot")

export { DialogProvider, useDialogContext }
