import type { VisuallyHiddenProps } from "../types/visually-hidden"

const VisuallyHidden = (props: VisuallyHiddenProps) => {
  const { className, ...restProps } = props

  return <span data-slot="visually-hidden" className="_visually-hidden sr-only" {...restProps} />
}

export { VisuallyHidden }
