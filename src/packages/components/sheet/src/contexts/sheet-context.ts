import { initializeContext } from "@renderui/utils"
import type { Dispatch, RefObject, SetStateAction } from "react"

type SheetContext = {
  triggerRef: RefObject<HTMLButtonElement>
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const [SheetProvider, useSheetContext] = initializeContext<SheetContext>({
  name: "Sheet",
})

export { SheetProvider, useSheetContext }
