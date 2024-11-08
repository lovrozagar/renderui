import { cn, polymorphic } from "@renderui/utils"
import { DEFAULT_SWITCH_THUMB_CLASSNAME } from "../constants/constants"
import type { SwitchThumbProps } from "../types/switch-thumb"

const SwitchThumb = (props: SwitchThumbProps) => {
  const { asChild, className, ...restProps } = props

  const Component = polymorphic(asChild, "span")

  return (
    <Component
      data-slot="switch-thumb"
      className={cn(DEFAULT_SWITCH_THUMB_CLASSNAME, className)}
      {...restProps}
    />
  )
}

export { SwitchThumb }
