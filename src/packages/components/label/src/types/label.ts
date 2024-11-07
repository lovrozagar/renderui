import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type LabelPrimitiveProps = Omit<ComponentPropsWithRef<"label">, "className">

type LabelProps = Simplify<
  LabelPrimitiveProps &
    ClassNameProps &
    PolymorphicProps & {
      hasPreventedDoubleClickTextSelection?: boolean
    }
>

export type { LabelProps }
