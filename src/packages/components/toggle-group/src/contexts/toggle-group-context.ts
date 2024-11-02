import { initializeContext } from "@renderui/utils"
import type { ToggleGroupContext } from "../types/toggle-group-context"

const [ToggleGroupProvider, useToggleGroupContext] = initializeContext<ToggleGroupContext>({
  name: "ToggleGroup",
})

export { ToggleGroupProvider, useToggleGroupContext }
