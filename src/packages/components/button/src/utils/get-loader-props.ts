type GetLoaderPropsArgs = {
  isLoading: boolean
}

const getLoaderProps = (props: GetLoaderPropsArgs) => {
  const { isLoading } = props

  return {
    "data-slot": "loader",
    "className": isLoading ? "text-[rgba(var(--button-color))]" : undefined,
  } as const
}

type GetLoaderPropsReturn = ReturnType<typeof getLoaderProps>

export { getLoaderProps, type GetLoaderPropsReturn }
