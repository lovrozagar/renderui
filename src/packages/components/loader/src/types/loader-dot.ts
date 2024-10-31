import type { Simplify } from "@renderui/utils"

type LoaderDotPrimitiveProps = React.ComponentPropsWithRef<"span">

type LoaderDotCustomProps = {
  isPaused: boolean | null | undefined
  element?: "start" | "middle" | "end"
}

type LoaderDotProps = Simplify<LoaderDotPrimitiveProps & LoaderDotCustomProps>

export type { LoaderDotProps }
