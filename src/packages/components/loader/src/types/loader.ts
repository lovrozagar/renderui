import type { PolymorphicProps, Simplify } from "@renderui/utils"
import type { VariantProps } from "class-variance-authority"
import type { loaderClasses } from "../classes/loader-classes"
import type { LoaderDotProps } from "./loader-dot"

type LoaderPrimitiveProps = React.ComponentPropsWithRef<"span">

type LodaerCustomProps = {
  dotProps?: Omit<LoaderDotProps, "isPaused" | "element">
}

type LoaderProps = Simplify<
  LoaderPrimitiveProps & VariantProps<typeof loaderClasses> & LodaerCustomProps & PolymorphicProps
>

export type { LoaderProps }
