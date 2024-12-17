import type { Color, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type BadgePrimitiveProps = Omit<ComponentPropsWithRef<"div">, "color">

type BadgeCustomProps = PolymorphicProps & {
  color?: Color
}

type BadgeProps = Simplify<BadgePrimitiveProps & BadgeCustomProps>

export type { BadgeProps }
