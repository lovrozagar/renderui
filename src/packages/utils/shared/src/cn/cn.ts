import type { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { cx } from "../cx/cx"
import type { CnOptions } from "./cn"

function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}

type ClassNameProps = { className?: CnOptions }

export { cn, type ClassValue as CnOptions, type ClassNameProps }
