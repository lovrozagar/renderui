import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type LoaderDotPrimitiveProps = Omit<ComponentPropsWithRef<"span">, "className">

type LoaderDotCustomProps = ClassNameProps & {
  isPaused: boolean | null | undefined
  element?: "start" | "middle" | "end"
}

type LoaderDotProps = Simplify<LoaderDotPrimitiveProps & LoaderDotCustomProps>

export type { LoaderDotProps }
