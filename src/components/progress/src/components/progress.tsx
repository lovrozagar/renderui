"use client"

import { cn, getOptionalObject, polymorphic } from "@renderui/utils"


const Progress = (props: ProgressProps) => {
  const {
    asChild,
    className,
    value,
    isIndeterminate,
    indicatorRef,
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

  const definedValue = value || 0

  const ProgressContainerComponent = polymorphic(asChild, "div")
  const ProgressIndicatorComponent = polymorphic(indicatorAsChild, "div")

  return (
    <ProgressContainerComponent
      data-min={0}
      data-value={value}
      data-max={100}
      data-state="loading"
      data-slot="base"
      className={cn(DEFAULT_PROGRESS_CLASSNAME, className)}
      {...restProps}
    >
      <ProgressIndicatorComponent
        ref={indicatorRef}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-valuetext={isIndeterminate ? "indeterminate" : `${value ?? 0}%`}
        data-value={value}
        data-min={0}
        data-max={100}
        data-state="loading"
        data-slot="indicator"
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
            "--indicator-color": `var(--${color})`,
          } as React.CSSProperties
        }
        {...restIndicatorProps}
      />
    </ProgressContainerComponent>
  )
}

export { Progress }
