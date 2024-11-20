import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SubLayerPrimitiveProps = Omit<ComponentPropsWithRef<"span">, "className">

type SubLayerCustomProps = ClassNameProps & PolymorphicProps

type SubLayerProps = Simplify<SubLayerPrimitiveProps & SubLayerCustomProps>

export type { SubLayerProps }
