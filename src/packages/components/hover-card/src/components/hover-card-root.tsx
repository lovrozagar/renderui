"use client"

import { HoverCard as HoverCardRootPrimitive } from "@radix-ui/react-hover-card"
import type { HoverCardRootProps } from "../types/hover-card-root"

const HoverCardRoot = (props: HoverCardRootProps) => {
  const { openDelay = 50, closeDelay = 300, ...restProps } = props

  return <HoverCardRootPrimitive openDelay={openDelay} closeDelay={closeDelay} {...restProps} />
}

export { HoverCardRoot }
