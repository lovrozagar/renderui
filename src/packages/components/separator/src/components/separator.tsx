import { cn, polymorphic } from "@renderui/utils"
import {
  DEFAULT_SEPARATOR_CLASSNAME,
  SEPARATOR_HORIZONTAL_CLASSNAME,
  SEPARATOR_VERTICAL_CLASSNAME,
} from "../constants/constants"
import type { SeparatorProps } from "../types/separator"

const Separator = (props: SeparatorProps) => {
  const { asChild, className, role = "separator", orientation = "horizontal", ...restProps } = props

  const Component = polymorphic(asChild, "hr")

  return (
    <Component
      role={role}
      data-orientation={orientation}
      data-slot="separator"
      className={cn(
        DEFAULT_SEPARATOR_CLASSNAME,
        orientation === "horizontal"
          ? SEPARATOR_HORIZONTAL_CLASSNAME
          : SEPARATOR_VERTICAL_CLASSNAME,
        className,
      )}
      {...restProps}
    />
  )
}

export { Separator }
