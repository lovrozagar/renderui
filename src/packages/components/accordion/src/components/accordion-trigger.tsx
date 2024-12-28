"use client"

import {
  AccordionHeader as AccordionHeaderPrimitive,
  AccordionTrigger as AccordionTriggerPrimitive,
} from "@radix-ui/react-accordion"
import { Button } from "@renderui/button"
import { cn, optional } from "@renderui/utils"
import {
  DEFAULT_ACCORDION_HEADER_CLASSNAME,
  DEFAULT_ACCORDION_TRIGGER_CLASSNAME,
  DEFAULT_ACCORDION_TRIGGER_ICON_CLASSNAME,
} from "../constants/constants"
import type { AccordionTriggerProps } from "../types/accordion-trigger"

const AccordionTrigger = (props: AccordionTriggerProps) => {
  const {
    ref,
    className,
    children,
    icon,
    iconProps,
    headerProps,
    variant = "plain",
    hasIcon = true,
    hasRipple = false,
    hasDefaultPressedStyles = false,
    ...restProps
  } = props

  const { className: headerClassName, ...restAccordionHeaderProps } = optional(headerProps)

  const { className: iconClassName, ...restIconProps } = optional(iconProps)

  const renderIcon = () => {
    if (!hasIcon) return null

    if (icon) return icon

    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        className={cn(DEFAULT_ACCORDION_TRIGGER_ICON_CLASSNAME, iconClassName)}
        {...restIconProps}
      >
        <path
          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  return (
    <AccordionHeaderPrimitive
      data-slot="accordion-header"
      className={cn(DEFAULT_ACCORDION_HEADER_CLASSNAME, headerClassName)}
      {...restAccordionHeaderProps}
    >
      <AccordionTriggerPrimitive asChild>
        <Button
          data-slot="accordion-trigger"
          ref={ref}
          variant={variant}
          hasRipple={hasRipple}
          hasDefaultPressedStyles={hasDefaultPressedStyles}
          className={cn(DEFAULT_ACCORDION_TRIGGER_CLASSNAME, className)}
          {...restProps}
        >
          {typeof children === "function" ? (
            children
          ) : (
            <>
              {children}
              {renderIcon()}
            </>
          )}
        </Button>
      </AccordionTriggerPrimitive>
    </AccordionHeaderPrimitive>
  )
}

export { AccordionTrigger }
