import type { Color } from "@renderui/utils"
import type { CSSProperties } from "react"
import type { ButtonClassesProps } from "../classes/button-classes"

type GetStyleVariablesProps = {
  color: Color
  variant: ButtonClassesProps["variant"]
}

function getStyleVariables(props: GetStyleVariablesProps) {
  const { color, variant } = props

  return {
    "--button-bg": `var(--${color})`,
    "--button-color": variant === "light" ? `var(--${color})` : `var(--${color}-foreground)`,
  } as CSSProperties
}

export { getStyleVariables }
