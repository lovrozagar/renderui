import type { UseAriaHandlersProps } from "@renderui/hooks-internal"
import type { Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type AriaPrimitiveProps = ComponentPropsWithRef<"div">

type AriaCustomProps = Partial<UseAriaHandlersProps> & {
  asChild?: boolean
  isDisabled?: boolean
  isUsingAriaPressProps?: boolean
}

type AriaProps = Simplify<AriaPrimitiveProps & AriaCustomProps>

export type { AriaProps }
