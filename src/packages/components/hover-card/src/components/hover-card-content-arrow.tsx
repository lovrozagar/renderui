"use client"

import { cn, getOptionalObject } from "@renderui/utils"
import {
  DEFAULT_HOVER_CARD_CONTENT_ARROW_CLASSNAME,
  DEFAULT_HOVER_CARD_CONTENT_ARROW_CONTAINER_CLASSNAME,
} from "../constants/constants"
import type { HoverCardContentArrowProps } from "../types/hover-card-content-arrow"

const HoverCardContentArrow = (props: HoverCardContentArrowProps) => {
  const { arrowContainerProps, arrowProps } = props

  const { className: containerClassName, ...restArrowContainerProps } =
    getOptionalObject(arrowContainerProps)

  const { className: svgClassName, ...restArrowProps } = getOptionalObject(arrowProps)

  return (
    <span
      data-slot="hover-card-arrow-container"
      className={cn(DEFAULT_HOVER_CARD_CONTENT_ARROW_CONTAINER_CLASSNAME, containerClassName)}
      {...restArrowContainerProps}
    >
      <svg
        data-slot="hover-card-arrow"
        className={cn(DEFAULT_HOVER_CARD_CONTENT_ARROW_CLASSNAME, svgClassName)}
        width="10"
        height="5"
        viewBox="0 0 30 10"
        preserveAspectRatio="none"
        {...restArrowProps}
      >
        <title>Arrow</title>
        <polygon points="0,0 30,0 15,10" />
      </svg>
    </span>
  )
}

export { HoverCardContentArrow }
