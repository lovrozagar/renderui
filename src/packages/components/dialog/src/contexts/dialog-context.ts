import { createContext } from "@radix-ui/react-context"
import type { Dispatch, RefObject, SetStateAction } from "react"

type DialogContext = {
  triggerRef: RefObject<HTMLButtonElement>
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const [DialogProvider, useDialogContext] = createContext<DialogContext>('Dialog')

export { DialogProvider, useDialogContext }
