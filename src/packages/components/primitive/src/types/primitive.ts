import type { ClassNameProps } from "@renderui/utils"
import type React from "react"
import type { ComponentPropsWithRef } from "react"

type PrimitiveProps<T extends keyof React.JSX.IntrinsicElements = "div"> = Omit<
  ComponentPropsWithRef<T>,
  "className"
> &
  ClassNameProps & { as?: T; asChild?: boolean }

export type { PrimitiveProps }
