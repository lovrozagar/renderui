import { cn, polymorphic } from "@renderui/utils"
import { loaderClasses } from "../classes/loader-classes"
import { LOADER_DOTS } from "../constants/constants"
import type { LoaderProps } from "../types/loader"
import { LoaderDot } from "./loader-dot"

const Loader = (props: LoaderProps) => {
  const {
    asChild,
    isPaused,
    className,
    dotProps,
    position = "relative",
    variant = "base",
    size = "small",
    ...restProps
  } = props

  const Component = polymorphic(asChild, "span")

  return (
    <Component
      aria-label="loading"
      data-slot="loader"
      className={cn(
        loaderClasses({
          variant,
          isPaused,
          size,
          position,
        }),
        className,
      )}
      {...restProps}
    >
      {variant === "dots"
        ? LOADER_DOTS.map((element) => (
            <LoaderDot key={element} isPaused={isPaused} element={element} {...dotProps} />
          ))
        : null}
    </Component>
  )
}

export { Loader }
