import { initializeContext } from "@renderui/utils"
import type { Dispatch, RefObject, SetStateAction } from "react"

type DialogContext = {
  triggerRef: RefObject<HTMLButtonElement>
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const [DialogProvider, useDialogContext] = initializeContext<DialogContext>({
  name: "Dialog",
})

export { DialogProvider, useDialogContext }
