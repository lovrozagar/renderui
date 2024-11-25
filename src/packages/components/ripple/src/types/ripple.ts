import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"
import type { RippleItemProps } from "./ripple-item"

type RipplePrimitiveProps = Omit<ComponentPropsWithRef<"span">, "className" | "children">

type RippleCustomProps = ClassNameProps &
  PolymorphicProps & {
    isDisabled?: boolean
    isTriggeredOnEnter?: boolean
    isTriggeredOnSpace?: boolean
    animationDuration?: number
    itemOpacity?: number
    animationTimingFunction?: string
    itemProps?: RippleItemProps
  } & (
    | {
        type: "child"
      }
    | {
        type: "wrapper"
        children: (props: { ripples: ReactNode }) => ReactNode
      }
  )

type RippleProps = Simplify<RipplePrimitiveProps & RippleCustomProps>

export type { RippleProps }
