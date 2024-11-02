import type { PrimitiveProps } from "@renderui/primitive"
import type { Simplify } from "@renderui/utils"

type ContainerPrimitiveProps<T extends keyof React.JSX.IntrinsicElements> = PrimitiveProps<T>

type ContainerCustomProps = {
  isFullHeight?: boolean
}

type ContainerProps<T extends keyof React.JSX.IntrinsicElements> = Simplify<
  ContainerPrimitiveProps<T> & ContainerCustomProps
>

export type { ContainerProps }
