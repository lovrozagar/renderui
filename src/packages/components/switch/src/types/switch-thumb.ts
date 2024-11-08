import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SwitchPrimitiveProps = Omit<ComponentPropsWithRef<"span">, "className">

type SwitchThumbCustomProps = ClassNameProps & PolymorphicProps

type SwitchThumbProps = Simplify<SwitchPrimitiveProps & SwitchThumbCustomProps>

export type { SwitchThumbProps }
