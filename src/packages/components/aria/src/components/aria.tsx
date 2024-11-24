"use client"

import { useComposedRefs } from "@radix-ui/react-compose-refs"
import { useAriaHandlers } from "@renderui/hooks-internal"
import { cn, polymorphic } from "@renderui/utils"
import { splitAriaProps } from "@renderui/utils-internal"
import { useRef } from "react"
import { DEFAULT_ARIA_CLASSNAME } from "../constants/constants"
import type { AriaProps } from "../types/aria"

const Aria = (props: AriaProps) => {
  const { ariaProps, nonAriaProps } = splitAriaProps(props)

  const {
    isPressDisabled,
    isFocusDisabled,
    isLongPressDisabled,
    isHoverDisabled,
    ...restAriaProps
  } = ariaProps

  const {
    ref,
    className,
    isDisabled,
    asChild,
    isUsingAriaPressProps = false,
    ...restNonAriaProps
  } = nonAriaProps

  const internalRef = useRef<HTMLElement>(null)
  const mergedRefCallback = useComposedRefs(internalRef, ref)

  const { ariaComponentProps } = useAriaHandlers(
    {
      ...restAriaProps,
      isPressDisabled: isDisabled || isPressDisabled,
      isFocusDisabled: isDisabled || isFocusDisabled,
      isLongPressDisabled: isDisabled || isLongPressDisabled,
      isHoverDisabled: isDisabled || isHoverDisabled,
      isUsingAriaPressProps,
    },
    internalRef,
  )

  const Component = polymorphic(asChild, "div")

  return (
    <Component
      data-slot="aria"
      data-disabled={isDisabled}
      ref={mergedRefCallback as (instance: HTMLDivElement | null) => void}
      className={cn(DEFAULT_ARIA_CLASSNAME, className)}
      {...restNonAriaProps}
      {...ariaComponentProps}
    />
  )
}

export { Aria }
