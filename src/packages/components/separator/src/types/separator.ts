import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SeparatorPrimitiveProps = Omit<ComponentPropsWithRef<"hr">, "className">

type SeparatorCustomProps = ClassNameProps &
  PolymorphicProps & {
    orientation?: "horizontal" | "vertical"
  }

type SeparatorProps = Simplify<SeparatorPrimitiveProps & SeparatorCustomProps>

export type { SeparatorProps }
