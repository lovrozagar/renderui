"use client"

import { toast as toastPrimitive } from "sonner"
import { DEFAULT_TOAST_PROPS } from "../constants/constants"
import type { ToastClasses, ToastProps } from "../types/toast-factory"
import { ToastContent } from "./toast-content"

const toastFactory = (styles: ToastClasses) => {
  return (props: ToastProps = {}) => {
    const { title, description, children, closeButtonProps, actionButtonProps, ...restProps } =
      props

    toastPrimitive.custom(
      (t) => (
        <ToastContent
          t={t}
          title={title}
          description={description}
          styles={styles}
          closeButtonProps={closeButtonProps}
          actionButtonProps={actionButtonProps}
        />
      ),
      { ...DEFAULT_TOAST_PROPS, ...restProps },
    )
  }
}

export { toastFactory }
