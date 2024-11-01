"use client"

import { cn, polymorphic } from "@renderui/utils"
import type { CSSProperties } from "react"
import { DEFAULT_ASPECT_RATIO_CLASSNAME } from "../constants/constants"
import type { AspectRatioProps } from "../types/aspect-ratio"

const AspectRatio = (props: AspectRatioProps) => {
  const { asChild, ratio, className, style, ...restProps } = props

  const Component = polymorphic(asChild, "div")

  return (
    <Component
      data-slot="aspect-ratio"
      className={cn(DEFAULT_ASPECT_RATIO_CLASSNAME, className)}
      style={
        {
          "--ratio": ratio,
          ...style,
        } as CSSProperties
      }
      {...restProps}
    />
  )
}

export { AspectRatio }
