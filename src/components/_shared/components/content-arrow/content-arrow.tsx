import { cn, getOptionalObject } from "@renderui/utils"

type ContentArrowProps = {
  arrowContainerProps?: React.ComponentPropsWithRef<"span">
  arrowProps?: React.ComponentPropsWithRef<"svg">
}

const ContentArrow = (props: ContentArrowProps) => {
  const { arrowContainerProps, arrowProps } = props

  const { className: containerClassName, ...restArrowContainerProps } =
    getOptionalObject(arrowContainerProps)
  const { className: svgClassName, ...restArrowProps } = getOptionalObject(arrowProps)

  return (
    <span
      data-slot="arrow-container"
      className={cn(
        "before:-translate-x-1/2 relative before:absolute before:top-[-4px] before:left-1/2 before:z-[1] before:inline-block before:size-[8px] before:rotate-45 before:border before:border-t-transparent before:border-r-mode-accent before:border-b-mode-accent before:border-l-transparent",
        containerClassName,
      )}
      {...restArrowContainerProps}
    >
      <svg
        data-slot="arrow"
        className={cn("bg-transparent fill-background", svgClassName)}
        width="10"
        height="5"
        viewBox="0 0 30 10"
        preserveAspectRatio="none"
        {...restArrowProps}
      >
        <polygon points="0,0 30,0 15,10" />
      </svg>
    </span>
  )
}

export { ContentArrow }

export type { ContentArrowProps }
