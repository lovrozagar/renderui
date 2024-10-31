import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"
import type { LoaderClassesProps } from "../classes/loader-classes"
import type { LoaderDotProps } from "./loader-dot"

type LoaderPrimitiveProps = Omit<ComponentPropsWithRef<"span">, "className">

type LodaerCustomProps = ClassNameProps &
  LoaderClassesProps & {
    dotProps?: Omit<LoaderDotProps, "isPaused" | "element">
  }

type LoaderProps = Simplify<LoaderPrimitiveProps & LodaerCustomProps & PolymorphicProps>

export type { LoaderProps }
