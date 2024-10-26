import {
  RIPPLE_BASE_MULTIPLIER,
  RIPPLE_MIDDLE_DURATION,
  RIPPLE_OVER_100_DURATION,
  RIPPLE_SIZE_100,
  RIPPLE_UNDER_100_DURATION,
} from "../constants/constants"

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getRippleDuration(rippleSize: number) {
  return clamp(
    RIPPLE_BASE_MULTIPLIER * rippleSize,
    RIPPLE_MIDDLE_DURATION,
    rippleSize > RIPPLE_SIZE_100 ? RIPPLE_OVER_100_DURATION : RIPPLE_UNDER_100_DURATION,
  )
}

export { getRippleDuration }
