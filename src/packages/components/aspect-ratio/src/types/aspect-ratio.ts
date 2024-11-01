import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { CSSProperties, ComponentPropsWithRef } from "react"

type AspectRatioPrimitiveProps = Omit<ComponentPropsWithRef<"div">, "className">

type AspectRatioCustomProps = ClassNameProps &
  PolymorphicProps & {
    ratio: CSSProperties["aspectRatio"]
  }

type AspectRatioProps = Simplify<AspectRatioPrimitiveProps & AspectRatioCustomProps>

export type { AspectRatioProps }
