import { cn, getOptionalObject, polymorphic } from "@renderui/utils"
import type { CSSProperties } from "react"
import { DEFAULT_PROGRESS_CLASSNAME } from "../constants/constants"
import type { ProgressProps } from "../types/progress"
import { getProgressIndicatorClassName } from "../utils/get-progress-indicator-class-name"
import { getTranslateXStyleByValue } from "../utils/get-translate-x-style-by-value"

const Progress = (props: ProgressProps) => {
  const {
    asChild,
    className,
    value,
    isIndeterminate,
    indicatorProps,
    spotCount,
    color = "primary",
    variant = "path",
    orientation = "horizontal",
    ...restProps
  } = props

  const {
    asChild: indicatorAsChild,
    className: indicatorClassName,
    style: indicatorStyle,
    ...restIndicatorProps
  } = getOptionalObject(indicatorProps)

  /* Cap value to between 0 and 100 */
  const definedValue = Math.min(100, Math.max(0, value || 0))

  const ProgressContainerComponent = polymorphic(asChild, "div")
  const ProgressIndicatorComponent = polymorphic(indicatorAsChild, "div")

  return (
    <ProgressContainerComponent
      data-min={0}
      data-value={value}
      data-max={100}
      data-state="loading"
      data-slot="progress-container"
      className={cn(DEFAULT_PROGRESS_CLASSNAME, className)}
      {...restProps}
    >
      <ProgressIndicatorComponent
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-valuetext={isIndeterminate ? "indeterminate" : `${value ?? 0}%`}
        data-value={value}
        data-min={0}
        data-max={100}
        data-state="loading"
        data-slot="progress-indicator"
        role="progressbar"
        className={cn(getProgressIndicatorClassName(isIndeterminate), indicatorClassName)}
        style={
          {
            ...getTranslateXStyleByValue({
              isIndeterminate,
              orientation,
              variant,
              value,
              definedValue,
              spotCount,
            }),
            ...indicatorStyle,
            "--indicator-bg": `var(--${color})`,
          } as CSSProperties
        }
        {...restIndicatorProps}
      />
    </ProgressContainerComponent>
  )
}

export { Progress }
