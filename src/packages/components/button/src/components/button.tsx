"use client"

import { Ripple } from "@renderui/ripple"
import { polymorphic, renderProp } from "@renderui/utils"
import { useButton } from "../hooks/use-button"
import type { ButtonProps } from "../types/button"

const Button = (props: ButtonProps) => {
  const {
    asChild,
    children,
    startContent,
    endContent,
    loader,
    loadingContent,
    hasRipple = true,
    ...restButtonProps
  } = props

  const { buttonProps, subLayerProps, rippleProps, utility } = useButton(restButtonProps)

  const { isLoading, loaderPosition, renderProps } = utility

  const Component = polymorphic(asChild, "button")

  const getChildren = () => {
    const content = props[isLoading && loadingContent ? "loadingContent" : "children"]

    return typeof content === "function" ? content(renderProps) : content
  }

  const getContent = () => {
    if (asChild) return getChildren()

    return (
      <>
        {renderProp(startContent, renderProps)}

        {isLoading && loaderPosition === "start" ? renderProp(loader, renderProps) : null}

        {renderProp(children, renderProps)}

        {isLoading && loaderPosition === "end" ? renderProp(loader, renderProps) : null}

        {renderProp(endContent, renderProps)}

        {hasRipple ? (
          <Ripple data-slot="ripple" subLayerProps={subLayerProps} {...rippleProps} />
        ) : null}
      </>
    )
  }

  return <Component {...buttonProps}>{getContent()}</Component>
}

export { Button }
