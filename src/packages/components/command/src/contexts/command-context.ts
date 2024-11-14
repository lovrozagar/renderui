"use client"

import { createContext } from "@radix-ui/react-context"
import type { CommandContext } from "../types/command-context"

const [CommandProvider, useCommandContext] = createContext<CommandContext>("CommandRoot")

export { CommandProvider, useCommandContext }
