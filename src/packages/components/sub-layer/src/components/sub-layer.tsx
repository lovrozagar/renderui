import { cn, polymorphic } from "@renderui/utils"
import { DEFAULT_SUB_LAYER_CLASSNAME } from "../constants/constants"
import type { SubLayerProps } from "../types/sub-layer"

const SubLayer = (props: SubLayerProps) => {
  const { asChild, className, role = "presentation", ...restProps } = props

  const Component = polymorphic(asChild, "span")

  return (
    <Component
      role={role}
      aria-hidden
      data-slot="sub-layer"
      className={cn(DEFAULT_SUB_LAYER_CLASSNAME, className)}
      {...restProps}
    />
  )
}

export { SubLayer }
