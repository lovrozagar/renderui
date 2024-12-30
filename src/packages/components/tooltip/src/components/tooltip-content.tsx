"use client"

import {
  TooltipArrow as TooltipArrowPrimitive,
  TooltipContent as TooltipContentPrimitive,
  TooltipPortal as TooltipPortalPrimitive,
} from "@radix-ui/react-tooltip"
import { cn, optional } from "@renderui/utils"

import { getAnimationStyleVariables } from "@renderui/utils-internal"
import type { CSSProperties } from "react"
import {
  DEFAULT_SIDE_OFFSET,
  DEFAULT_TOOLTIP_ARROW_CLASSNAME,
  DEFAULT_TOOLTIP_CONTENT_CLASSNAME,
} from "../constants/constants"
import type { TooltipContentProps } from "../types/tooltip-content"

const TooltipContent = (props: TooltipContentProps) => {
  const {
    children,
    className,
    arrowProps,
    style,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    animationTimingFunction,
    animationInTimingFunction,
    animationOutTimingFunction,
    side = "top",
    color = "mode-contrast",
    hasArrow = true,
    avoidCollisions = true,
    sideOffset = DEFAULT_SIDE_OFFSET,
    ...restProps
  } = props

  const { className: arrowClassName, ...restArrowProps } = optional(arrowProps)

  return (
    <TooltipPortalPrimitive>
      <TooltipContentPrimitive
        data-slot="tooltip-content"
        side={side}
        sideOffset={sideOffset}
        className={cn(DEFAULT_TOOLTIP_CONTENT_CLASSNAME, className)}
        style={
          {
            ...getAnimationStyleVariables({
              animationDuration,
              animationInDuration,
              animationOutDuration,
              animationTimingFunction,
              animationInTimingFunction,
              animationOutTimingFunction,
              defaultAnimationDuration: 200,
              defaultAnimationTimingFunction: "ease",
            }),
            ...style,
            "--tooltip-content-bg": `var(--${color})`,
            "--tooltip-content-color": `var(--${color}-foreground)`,
          } as CSSProperties
        }
        {...restProps}
      >
        {children}
        {hasArrow ? (
          <TooltipArrowPrimitive
            data-slot="tooltip-content-arrow"
            className={cn(DEFAULT_TOOLTIP_ARROW_CLASSNAME, arrowClassName)}
            {...restArrowProps}
          />
        ) : null}
      </TooltipContentPrimitive>
    </TooltipPortalPrimitive>
  )
}

export { TooltipContent }
