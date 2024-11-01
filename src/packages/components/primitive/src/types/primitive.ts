import type { CxOptions } from "@renderui/utils"
import type React from "react"
import type { ComponentPropsWithRef } from "react"

type PrimitiveProps<T extends keyof React.JSX.IntrinsicElements = "div"> = Omit<
  ComponentPropsWithRef<T>,
  "className"
> & { as?: T; asChild?: boolean; className?: CxOptions }

export type { PrimitiveProps }
