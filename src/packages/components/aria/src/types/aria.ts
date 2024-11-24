import type { UseAriaHandlersProps } from "@renderui/hooks-internal"
import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type AriaPrimitiveProps = Omit<ComponentPropsWithRef<"div">, "className">

type AriaCustomProps = ClassNameProps &
  PolymorphicProps &
  Partial<UseAriaHandlersProps> & {
    asChild?: boolean
    isDisabled?: boolean
    isUsingAriaPressProps?: boolean
  }

type AriaProps = Simplify<AriaPrimitiveProps & AriaCustomProps>

export type { AriaProps }
