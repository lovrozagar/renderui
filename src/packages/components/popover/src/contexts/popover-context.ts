import { initializeContext } from "@renderui/utils"
import type { Dispatch, RefObject, SetStateAction } from "react"

type PopoverContext = {
  triggerRef: RefObject<HTMLButtonElement>
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const [PopoverProvider, usePopoverContext] = initializeContext<PopoverContext>({
  name: "Popover",
})

export { PopoverProvider, usePopoverContext }
