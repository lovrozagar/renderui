import type { PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SubLayerProps = Simplify<ComponentPropsWithRef<"span"> & PolymorphicProps>

export type { SubLayerProps }
