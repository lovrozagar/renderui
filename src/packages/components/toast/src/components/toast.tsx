"use client"

import { toast as toastPrimitive } from "sonner"
import type { Toast } from "../types/toast"
import { toastFactory } from "./toast-factory"

const default_ = toastFactory({
  container: "bg-mode border-mode-900 dark:bg-mode-950 dark:border-mode-800",
  title: "text-mode-contrast",
  description: "text-mode-200",
  button: "text-mode-contrast hover:bg-mode-900 dark:hover:bg-mode-800",
})

const success = toastFactory({
  container: "bg-green-200 border-green-500/80",
  title: "text-green-800",
  description: "text-green-900",
  button: "text-green-900 hover:bg-green-400/70",
})

const error = toastFactory({
  container: "bg-red-200 border-red-500/80",
  title: "text-red-800",
  description: "text-red-900",
  button: "text-red-900 hover:bg-red-400/70",
})

const info = toastFactory({
  container: "bg-sky-200 border-sky-500/80",
  title: "text-sky-800",
  description: "text-sky-900",
  button: "text-sky-900 hover:bg-sky-400/70",
})

const warning = toastFactory({
  container: "bg-amber-200 border-amber-500/80",
  title: "text-amber-800",
  description: "text-amber-900",
  button: "text-amber-900 hover:bg-amber-400/70",
})

const toast: Toast = {
  length: toastPrimitive.length,
  getHistory: toastPrimitive.getHistory,
  message: toastPrimitive.message,
  loading: toastPrimitive.loading,
  promise: toastPrimitive.promise,
  custom: toastPrimitive.custom,
  default: default_,
  success,
  error,
  info,
  warning,
}

export { toast }
