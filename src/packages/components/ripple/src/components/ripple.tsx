"use client"

import { chain, cn, optional, polymorphic } from "@renderui/utils"
import type { CSSProperties } from "react"
import {
  DEFAULT_RIPPLE_CLASSNAME,
  RIPPLE_CHILD_CLASSNAME,
  RIPPLE_WRAPPER_CLASSNAME,
} from "../constants/constants"
import { useRipple } from "../hooks/use-ripple"
import type { RippleProps } from "../types/ripple"
import { RippleItem } from "./ripple-item"

const Ripple = (props: RippleProps) => {
  const {
    ref,
    asChild,
    tabIndex,
    style,
    className,
    classNames,
    /* @ts-ignore children exists if type is wrapper */
    children,
    itemProps,
    onKeyUp,
    onClick,
    type = "child",
    animationDuration = 700,
    itemOpacity = 0.3,
    isDisabled = false,
    isTriggeredOnEnter = true,
    isTriggeredOnSpace = true,
    animationTimingFunction = "ease-out",
    ...restProps
  } = props

  const { className: itemClassName, style: itemStyle, ...restItemProps } = optional(itemProps)

  const { ripples, mergedCallbackRef, handleClick, handleKeyUp } = useRipple({
    ref,
    animationDuration,
    isDisabled,
    isTriggeredOnEnter,
    isTriggeredOnSpace,
  })

  const Component = polymorphic(asChild, "span")

  const rippleItems = ripples.map((ripple) => (
    <RippleItem
      key={ripple.key}
      className={[itemClassName, classNames?.rippleItem]}
      style={
        {
          width: ripple.size,
          height: ripple.size,
          top: ripple.y,
          left: ripple.x,
          ...itemStyle,
        } as CSSProperties
      }
      {...restItemProps}
    />
  ))

  return (
    <Component
      data-slot="ripple"
      data-disabled={isDisabled}
      ref={mergedCallbackRef}
      tabIndex={tabIndex ?? (type === "wrapper" ? 0 : -1)}
      className={cn(
        DEFAULT_RIPPLE_CLASSNAME,
        type === "wrapper" ? RIPPLE_WRAPPER_CLASSNAME : RIPPLE_CHILD_CLASSNAME,
        className,
        classNames?.ripple,
      )}
      onClick={chain(onClick, handleClick)}
      onKeyUp={chain(onKeyUp, handleKeyUp)}
      style={
        {
          "--animation-duration": `${animationDuration}ms`,
          "--animation-timing-function": animationTimingFunction,
          "--ripple-opacity": itemOpacity,
          ...style,
        } as CSSProperties
      }
      {...restProps}
    >
      {typeof children === "function" ? children({ ripples: rippleItems }) : rippleItems}
    </Component>
  )
}

export { Ripple }
