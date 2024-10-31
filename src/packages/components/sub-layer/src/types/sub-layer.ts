import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SubLayerPrimitiveProps = Omit<ComponentPropsWithRef<"span">, "className">

type SubLayerProps = Simplify<SubLayerPrimitiveProps & ClassNameProps & PolymorphicProps>

export type { SubLayerProps }
