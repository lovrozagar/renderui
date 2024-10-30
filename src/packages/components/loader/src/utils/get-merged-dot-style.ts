import type { LoaderDotProps } from "../types/loader-dot"

const getMergedDotStyle = (element: LoaderDotProps["element"], style: LoaderDotProps["style"]) => {
  if (element === "middle") {
    return {
      animationDelay: "200ms",
      ...style,
    }
  }

  if (element === "end") {
    return {
      animationDelay: "400ms",
      ...style,
    }
  }

  return style
}

export { getMergedDotStyle }
