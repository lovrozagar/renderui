import type { MouseEvent } from "react"

type CreateRipplePointerProps = {
  type: "pointer"
  event: React.MouseEvent<HTMLElement, MouseEvent>
}

type CreateRippleKeyboardProps = {
  type: "keyboard"
  width: number
  height: number
}

type CreateRippleProps = CreateRipplePointerProps | CreateRippleKeyboardProps

function createRipple(props: CreateRippleProps) {
  const { type } = props

  const rippleKey = crypto.randomUUID()

  const size =
    type === "keyboard"
      ? Math.max(props.width, props.height)
      : Math.max(props.event.clientX, props.event.clientY)

  const rect =
    type === "keyboard" ? { x: 0, y: 0 } : props.event.currentTarget.getBoundingClientRect()

  const coordinates =
    type === "keyboard"
      ? {
          /* center keyboard ripple in middle of element */
          x: 0,
          y: -props.width / 2 + props.height / 2,
        }
      : {
          /* origin point is the exact pointer click coordinate */
          x: props.event.clientX - rect.x - size / 2,
          y: props.event.clientY - rect.y - size / 2,
        }

  return {
    key: rippleKey,
    size,
    ...coordinates,
  }
}

export { createRipple }
