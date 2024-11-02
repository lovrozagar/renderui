"use client"

import {
  HoverCardArrow as HoverCardArrowPrimitive,
  HoverCardContent as HoverCardContentPrimitive,
} from "@radix-ui/react-hover-card"
import { cn } from "@renderui/utils"
import { getAnimationStyleVariables } from "@renderui/utils-internal"
import { DEFAULT_HOVER_CARD_CONTENT_CLASSNAME } from "../constants/constants"
import type { HoverCardContentProps } from "../types/hover-card-content"
import { HoverCardContentArrow } from "./hover-card-content-arrow"

const HoverCardContent = (props: HoverCardContentProps) => {
  const {
    children,
    className,
    style,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    animationTimingFunction,
    animationInTimingFunction,
    animationOutTimingFunction,
    arrowContainerProps,
    arrowProps,
    align = "center",
    side = "bottom",
    sideOffset = 4,
    hasArrow = true,
    ...restProps
  } = props

  return (
    <HoverCardContentPrimitive
      data-slot="hover-card-content"
      align={align}
      sideOffset={sideOffset}
      side={side}
      className={cn(DEFAULT_HOVER_CARD_CONTENT_CLASSNAME, className)}
      style={{
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
      }}
      {...restProps}
    >
      {children}
      {hasArrow ? (
        <HoverCardArrowPrimitive asChild>
          <HoverCardContentArrow
            arrowContainerProps={arrowContainerProps}
            arrowProps={arrowProps}
          />
        </HoverCardArrowPrimitive>
      ) : null}
    </HoverCardContentPrimitive>
  )
}

export { HoverCardContent }
