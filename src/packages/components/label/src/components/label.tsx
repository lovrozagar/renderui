"use client"

import { chain, cn, polymorphic } from "@renderui/utils"
import { DEFAULT_LABEL_CLASSNAME } from "../constants/constants"
import type { LabelProps } from "../types/label"
import { handlePreventDoubleClickTextSelection } from "../utils/handle-prevent-double-click-text-selection"

const Label = (props: LabelProps) => {
  const {
    asChild,
    className,
    onMouseDown,
    hasPreventedDoubleClickTextSelection = true,
    ...restProps
  } = props

  const Component = polymorphic(asChild, "label")

  return (
    <Component
      className={cn(DEFAULT_LABEL_CLASSNAME, className)}
      onMouseDown={chain(
        onMouseDown,
        hasPreventedDoubleClickTextSelection ? handlePreventDoubleClickTextSelection : undefined,
      )}
      {...restProps}
    />
  )
}

export { Label }
