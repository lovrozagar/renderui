import { cn, polymorphic } from "@renderui/utils"
import type { CSSProperties } from "react"
import { DEFAULT_BADGE_CONSTANTS } from "../constants/constants"
import type { BadgeProps } from "../types/badge"

const Badge = (props: BadgeProps) => {
  const { asChild, className, style, color = "mode-accent", ...restProps } = props

  const Component = polymorphic(asChild, "div")

  return (
    <Component
      data-slot="badge"
      className={cn(DEFAULT_BADGE_CONSTANTS, className)}
      style={{ ...style, "--badge-color": `var(--${color})` } as CSSProperties}
      {...restProps}
    />
  )
}

export { Badge }
