import type { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { cx } from "../cx/cx"

function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}

export { cn, type ClassValue as CnOptions }
