"use client"

import { Accordion as AccordionPrimitive } from "@radix-ui/react-accordion"
import { useControlledState } from "@renderui/hooks-internal"
import { cn } from "@renderui/utils"
import { DEFAULT_ACCORDION_CLASSNAME } from "../constants/constants"
import type {
  AccordionRootProps,
  AccordionRootRenderProps,
  AccordionRootType,
} from "../types/accordion-root"

const AccordionRoot = <T extends AccordionRootType, V extends string | number>(
  props: AccordionRootProps<T, V>,
) => {
  const {
    type,
    value: valueProp,
    defaultValue,
    onValueChange,
    children,
    className,
    ...restProps
  } = props

  /* biome-ignore lint/suspicious/noExplicitAny: cast as any for primitive compatiblity */
  const [value, setValue] = useControlledState<any>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange as (state: string | string[] | number | number[]) => void,
  })

  return (
    <AccordionPrimitive
      data-slot="accordion-root"
      type={type}
      value={value}
      onValueChange={setValue}
      className={cn(DEFAULT_ACCORDION_CLASSNAME, className)}
      {...restProps}
    >
      {typeof children === "function"
        ? children({
            value: value as AccordionRootRenderProps<T, V>["value"],
            setValue: onValueChange as AccordionRootRenderProps<T, V>["setValue"],
          })
        : children}
    </AccordionPrimitive>
  )
}

export { AccordionRoot }
