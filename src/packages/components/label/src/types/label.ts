import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type LabelPrimitiveProps = Omit<ComponentPropsWithRef<"label">, "className">

type LabelCustomProps = ClassNameProps &
  PolymorphicProps & {
    hasPreventedDoubleClickTextSelection?: boolean
  }

type LabelProps = Simplify<LabelPrimitiveProps & LabelCustomProps>

export type { LabelProps }
