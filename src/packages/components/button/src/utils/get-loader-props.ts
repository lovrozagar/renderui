import type { ButtonProps } from "../types/button"

type GetLoaderPropsArgs = Pick<ButtonProps, "isLoading" | "loaderPosition">

const getLoaderProps = (props: GetLoaderPropsArgs) => {
  const { isLoading, loaderPosition } = props

  return {
    "data-slot": "loader",
    "position": loaderPosition === "start" || loaderPosition === "end" ? undefined : loaderPosition,
    "className": isLoading ? "text-[rgba(var(--button-color))]" : undefined,
  } as const
}

export { getLoaderProps }
