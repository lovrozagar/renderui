import type React from "react"

import { cn, polymorphic } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"
import type { PrimitiveProps } from "../types/primitive"

const Primitive = <T extends keyof React.JSX.IntrinsicElements = "div">(
  props: PrimitiveProps<T>,
) => {
  const { className, asChild = false, as = "div", ...restProps } = props

  const Component = polymorphic(asChild, as)

  return (
    <Component
      data-tag={as}
      className={className ? cn(className) : undefined}
      {...(restProps as ComponentPropsWithRef<T>)}
    />
  )
}

export { Primitive }
