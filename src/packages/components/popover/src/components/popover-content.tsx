"use client"

import {
  PopoverArrow as PopoverArrowPrimitive,
  PopoverContent as PopoverContentPrimitive,
  PopoverPortal as PopoverPortalPrimitive,
} from "@radix-ui/react-popover"
import { useEventListener, useMergedRef } from "@renderui/hooks"
import { cn } from "@renderui/utils"
import { getAnimationStyleVariables } from "@renderui/utils-internal"
import { useRef } from "react"
import {
  DEFAULT_POPOVER_CONTENT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME,
} from "../constants/constants"
import { usePopoverContext } from "../contexts/popover-context"
import type { PopoverContentProps } from "../types/popover-content"
import { PopoverContentArrow } from "./popover-content-arrow"

const PopoverContent = (props: PopoverContentProps) => {
  const {
    ref,
    children,
    style,
    className,
    portalContainer,
    forceMount,
    hasTriggerHeight,
    hasTriggerWidth,
    hasTriggerMinWidth,
    hasTriggerMinHeight,
    hasTriggerMaxWidth,
    hasTriggerMaxHeight,
    arrowContainerProps,
    arrowProps,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    animationTimingFunction,
    animationInTimingFunction,
    animationOutTimingFunction,
    onPointerDownOutside,
    hasArrow = true,
    align = "center",
    sideOffset = 4,
    ...restProps
  } = props

  const internalRef = useRef<HTMLDivElement | null>(null)
  const mergedRefCallback = useMergedRef([ref, internalRef])

  const { triggerRef, open, setOpen } = usePopoverContext()

  /* on outside pointer down capture, close popover */
  /* react-aria press event support inside content */
  useEventListener({
    event: "pointerdown",
    enabled: open,
    handler: (event) => {
      if (!(event.target instanceof Node)) return

      /* return if the click is within the popover content */
      if (internalRef.current?.contains(event.target)) return

      /* return if the click is on or within the trigger element */
      if (triggerRef.current?.contains(event.target)) return

      onPointerDownOutside?.(event)
      setOpen(false)
    },
    options: { capture: true },
  })

  return (
    <PopoverPortalPrimitive container={portalContainer} forceMount={forceMount}>
      <PopoverContentPrimitive
        data-slot="popover-content"
        ref={mergedRefCallback}
        align={align}
        forceMount={forceMount}
        sideOffset={sideOffset}
        className={cn(
          DEFAULT_POPOVER_CONTENT_CLASSNAME,
          hasTriggerHeight ? POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME : undefined,
          hasTriggerWidth ? POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME : undefined,
          hasTriggerMinHeight ? POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME : undefined,
          hasTriggerMinWidth ? POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME : undefined,
          hasTriggerMaxHeight ? POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME : undefined,
          hasTriggerMaxWidth ? POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME : undefined,
          className,
        )}
        style={{
          ...getAnimationStyleVariables({
            animationDuration,
            animationInDuration,
            animationOutDuration,
            animationTimingFunction,
            animationInTimingFunction,
            animationOutTimingFunction,
            defaultAnimationDuration: 150,
            defaultAnimationTimingFunction: "ease",
          }),
          ...style,
        }}
        {...restProps}
      >
        {children}
        {hasArrow ? (
          <PopoverArrowPrimitive asChild>
            <PopoverContentArrow
              arrowContainerProps={arrowContainerProps}
              arrowProps={arrowProps}
            />
          </PopoverArrowPrimitive>
        ) : null}
      </PopoverContentPrimitive>
    </PopoverPortalPrimitive>
  )
}

export { PopoverContent }
