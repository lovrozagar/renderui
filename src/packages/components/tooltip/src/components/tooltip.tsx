"use client"

import { TooltipContent } from "./tooltip-content"
import { TooltipRoot } from "./tooltip-root"
import { TooltipTrigger } from "./tooltip-trigger"
import { TooltipTriggerPrimitive } from "./tooltip-trigger-primitive"

const Tooltip = () => null

Tooltip.Root = TooltipRoot
Tooltip.Trigger = TooltipTrigger
Tooltip.TriggerPrimitive = TooltipTriggerPrimitive
Tooltip.Content = TooltipContent

export { Tooltip }
