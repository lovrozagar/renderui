import { cn } from "@renderui/utils"
import { DEFAULT_LOADER_DOT_CLASSNAME, LOADER_DOT_PAUSED_CLASSNAME } from "../constants/constants"
import type { LoaderDotProps } from "../types/loader-dot"
import { getMergedDotStyle } from "../utils/get-merged-dot-style"

const LoaderDot = (props: LoaderDotProps) => {
  const { isPaused, className, style, element, ...restProps } = props

  return (
    <span
      data-slot="loader-dot"
      className={cn(
        DEFAULT_LOADER_DOT_CLASSNAME,
        isPaused ? LOADER_DOT_PAUSED_CLASSNAME : undefined,
        className,
      )}
      style={getMergedDotStyle(element, style)}
      {...restProps}
    />
  )
}

export { LoaderDot }
