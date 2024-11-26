import type { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { cx } from "../cx/cx"

function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}

type ClassNameProps = { className?: ClassValue }

export { cn, type ClassValue, type ClassNameProps }
