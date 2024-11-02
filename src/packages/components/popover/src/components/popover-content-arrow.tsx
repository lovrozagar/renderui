"use client"

import { cn, getOptionalObject } from "@renderui/utils"
import {
  DEFAULT_POPOVER_CONTENT_ARROW_CLASSNAME,
  DEFAULT_POPOVER_CONTENT_ARROW_CONTAINER_CLASSNAME,
} from "../constants/constants"
import type { PopoverContentArrowProps } from "../types/popover-content-arrow"

const PopoverContentArrow = (props: PopoverContentArrowProps) => {
  const { arrowContainerProps, arrowProps } = props

  const { className: containerClassName, ...restArrowContainerProps } =
    getOptionalObject(arrowContainerProps)

  const { className: svgClassName, ...restArrowProps } = getOptionalObject(arrowProps)

  return (
    <span
      data-slot="popover-arrow-container"
      className={cn(DEFAULT_POPOVER_CONTENT_ARROW_CONTAINER_CLASSNAME, containerClassName)}
      {...restArrowContainerProps}
    >
      <svg
        data-slot="popover-arrow"
        className={cn(DEFAULT_POPOVER_CONTENT_ARROW_CLASSNAME, svgClassName)}
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

export { PopoverContentArrow }

export type { PopoverContentArrowProps }
