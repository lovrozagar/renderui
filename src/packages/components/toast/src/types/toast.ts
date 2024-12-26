import type { ReactElement, ReactNode } from "react"
import type { ExternalToast, ToastT } from "sonner"
import type { ToastProps } from "./toast-factory"

type ToastToDismiss = {
  id: number | string
  dismiss: boolean
}

/* biome-ignore lint/suspicious/noExplicitAny: internal copy of sonner non exported type */
type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>)

/* biome-ignore lint/suspicious/noExplicitAny: internal copy of sonner non exported type */
type PromiseTResult<Data = any> =
  | string
  | ReactNode
  | ((data: Data) => ReactNode | string | Promise<ReactNode | string>)

type PromiseExternalToast = Omit<ExternalToast, "description">

/* biome-ignore lint/suspicious/noExplicitAny: internal copy of sonner non exported type */
type PromiseData<ToastData = any> = PromiseExternalToast & {
  loading?: string | ReactNode
  success?: PromiseTResult<ToastData>
  error?: PromiseTResult
  description?: PromiseTResult
  finally?: () => void | Promise<void>
}

type Toast = {
  default: (props?: ToastProps) => void
  success: (props?: ToastProps) => void
  error: (props?: ToastProps) => void
  info: (props?: ToastProps) => void
  warning: (props?: ToastProps) => void
  custom: (jsx: (id: number | string) => ReactElement, data?: ExternalToast) => string | number
  getHistory: () => (ToastT | ToastToDismiss)[]
  length: number
  loading: (message: string | ReactNode, data?: ExternalToast) => string | number
  message: (message: string | ReactNode, data?: ExternalToast) => string | number
  promise: <ToastData>(
    promise: PromiseT<ToastData>,
    data?: PromiseData<ToastData>,
  ) =>
    | (string & {
        unwrap: () => Promise<ToastData>
      })
    | (number & {
        unwrap: () => Promise<ToastData>
      })
    | {
        unwrap: () => Promise<ToastData>
      }
}

export type { Toast }
