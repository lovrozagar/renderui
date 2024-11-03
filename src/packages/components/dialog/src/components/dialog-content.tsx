"use client"

import {
  DialogClose as DialogClosePrimitive,
  DialogContent as DialogContentPrimitive,
  DialogPortal as DialogPortalPrimitive,
} from "@radix-ui/react-dialog"
import { Button } from "@renderui/button"
import { useEventListener, useMergedRef } from "@renderui/hooks"
import { Overlay } from "@renderui/overlay"
import { cn, getOptionalObject } from "@renderui/utils"
import { getAnimationStyleVariables } from "@renderui/utils-internal"
import { useRef } from "react"
import {
  DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME,
  DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME,
  DFEAULT_DIALOG_CONTENT_CLASSNAME,
} from "../constants/constants"
import { useDialogContext } from "../contexts/dialog-context"
import type { DialogContentProps } from "../types/dialog-content"

const DialogContent = (props: DialogContentProps) => {
  const {
    ref,
    className,
    style,
    children,
    closeButtonProps,
    closeButtonIconProps,
    overlayProps,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    animationTimingFunction,
    animationInTimingFunction,
    animationOutTimingFunction,
    onPointerDownOutside,
    hasOverlay = true,
    hasCloseButton = true,
    ...restProps
  } = props

  const {
    className: closeButtonClassName,
    "aria-label": closeButtonAriaLabel,
    variant = "ghost",
    color = "mode-contrast",
    ...restCloseButtonProps
  } = getOptionalObject(closeButtonProps)

  const { className: closeButtonIconClassName, ...restCloseButtonIconProps } =
    getOptionalObject(closeButtonIconProps)

  const contentRef = useRef<HTMLDivElement | null>(null)
  const mergedRefCallback = useMergedRef([ref, contentRef])

  const { triggerRef, open, setOpen } = useDialogContext()

  /* on outside pointer down capture, close popover */
  /* react-aria press event support inside content */
  useEventListener({
    event: "pointerdown",
    enabled: open,
    handler: (event) => {
      if (!(event.target instanceof Node)) return

      /* return if the click is within the popover content */
      if (contentRef.current?.contains(event.target)) return

      /* return if the click is on or within the trigger element */
      if (triggerRef.current?.contains(event.target)) return

      onPointerDownOutside?.(event)
      setOpen(false)
    },
    options: { capture: true },
  })

  return (
    <DialogPortalPrimitive>
      {hasOverlay ? <Overlay data-slot="dialog-overlay" {...overlayProps} /> : null}
      <DialogContentPrimitive
        data-slot="dialog-content"
        ref={mergedRefCallback}
        className={cn(DFEAULT_DIALOG_CONTENT_CLASSNAME, className)}
        style={{
          ...getAnimationStyleVariables({
            animationDuration,
            animationInDuration,
            animationOutDuration,
            animationTimingFunction,
            animationInTimingFunction,
            animationOutTimingFunction,
            defaultAnimationDuration: 200,
            defaultAnimationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }),
          ...style,
        }}
        {...restProps}
      >
        {children}
        {hasCloseButton ? (
          <DialogClosePrimitive asChild>
            <Button
              data-slot="dialog-close-button"
              variant={variant}
              color={color}
              className={[DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME, closeButtonClassName]}
              {...restCloseButtonProps}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                className={cn(DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME, closeButtonIconClassName)}
                {...restCloseButtonIconProps}
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              {closeButtonAriaLabel ? null : <span className="sr-only">Close</span>}
            </Button>
          </DialogClosePrimitive>
        ) : null}
      </DialogContentPrimitive>
    </DialogPortalPrimitive>
  )
}

export { DialogContent }
