import { createContext } from "@radix-ui/react-context"
import type { ToggleGroupContext } from "../types/toggle-group-context"

const [ToggleGroupProvider, useToggleGroupContext] =
  createContext<ToggleGroupContext>("ToggleGroupRoot")

export { ToggleGroupProvider, useToggleGroupContext }
