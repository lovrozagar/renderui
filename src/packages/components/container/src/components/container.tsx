"use client"

import { Primitive } from "@renderui/primitive"
import {
  CONTAINER_FULL_HEIGHT_CLASSNAME,
  DEFAULT_CONTAINER_CLASSNAME,
} from "../constants/constants"
import type { ContainerProps } from "../types/container"

const Container = <T extends keyof React.JSX.IntrinsicElements = "div">(
  props: ContainerProps<T>,
) => {
  const { asChild, isFullHeight, className, ...restProps } = props

  return (
    <Primitive
      className={[
        DEFAULT_CONTAINER_CLASSNAME,
        isFullHeight ? CONTAINER_FULL_HEIGHT_CLASSNAME : undefined,
        className,
      ]}
      {...restProps}
    />
  )
}

export { Container }
