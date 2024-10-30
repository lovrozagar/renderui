import type { ButtonProps } from "../types/button"

type GetLoaderPropsArgs = Pick<ButtonProps, "isLoading" | "loaderPosition">

const getLoaderProps = (props: GetLoaderPropsArgs) => {
  const { isLoading, loaderPosition } = props

  return {
    "data-slot": "loader",
    "position":
      loaderPosition === "start" || loaderPosition === "end" ? "relative" : loaderPosition,
    "className": isLoading ? "text-[rgba(var(--button-color))]" : undefined,
  }
}

export { getLoaderProps }
