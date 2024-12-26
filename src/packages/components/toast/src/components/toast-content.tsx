"use client"

import { chain, cn, optional } from "@renderui/utils"
import { toast as toastPrimitive } from "sonner"
import {
  DEFAULT_TOAST_ACTION_BUTTON_CLASSNAME,
  DEFAULT_TOAST_CLOSE_BUTTON_CLASSNAME,
  DEFAULT_TOAST_CONTAINER_CLASSNAME,
  DEFAULT_TOAST_DESCRIPTION_CLASSNAME,
  DEFAULT_TOAST_TITLE_CLASSNAME,
} from "../constants/constants"
import type { ToastContentProps } from "../types/toast-content"

const ToastContent = (props: ToastContentProps) => {
  const {
    t,
    styles,
    title,
    description,
    containerProps,
    titleProps,
    descriptionProps,
    closeButtonProps,
    closeIconProps,
    actionButtonProps,
    children,
  } = props

  const { className: containerClassName, ...restContainerProps } = optional(containerProps)

  const { className: titleClassName, ...restTitleProps } = optional(titleProps)

  const { className: descriptionClassName, ...restDescriptionProps } = optional(descriptionProps)

  const {
    className: closeButtonClassName,
    children: closeButtonChildren,
    onClick: onCloseButtonClick,
    ...restCloseButtonProps
  } = optional(closeButtonProps)

  const { className: closeIconClassName, ...restCloseIconProps } = optional(closeIconProps)

  const {
    className: actionButtonClassName,
    children: actionButtonChildren,
    onClick: onActionButtonClick,
    ...restActionButtonProps
  } = optional(actionButtonProps)

  const {
    container: factoryContainerClassName,
    title: factoryTitleClassName,
    description: factoryDescriptionClassname,
    button: factoryButtonClassName,
  } = styles

  return (
    <div
      data-slot="toast-container"
      className={cn(
        DEFAULT_TOAST_CONTAINER_CLASSNAME,
        factoryContainerClassName,
        containerClassName,
      )}
      {...restContainerProps}
    >
      {title ? (
        <p
          data-slot="toast-title"
          className={cn(DEFAULT_TOAST_TITLE_CLASSNAME, factoryTitleClassName, titleClassName)}
          {...restTitleProps}
        >
          {title}
        </p>
      ) : null}
      {description ? (
        <p
          data-slot="toast-description"
          className={cn(
            DEFAULT_TOAST_DESCRIPTION_CLASSNAME,
            factoryDescriptionClassname,
            descriptionClassName,
          )}
          {...restDescriptionProps}
        >
          {description}
        </p>
      ) : null}
      {actionButtonProps ? (
        <button
          data-slot="toast-action-button"
          className={cn(DEFAULT_TOAST_ACTION_BUTTON_CLASSNAME, actionButtonClassName)}
          onClick={() => onActionButtonClick(t)}
          {...restActionButtonProps}
        >
          {actionButtonChildren}
        </button>
      ) : null}
      {typeof children === "function" ? children(t) : children}
      <button
        data-slot="toast-close-button"
        className={cn(
          DEFAULT_TOAST_CLOSE_BUTTON_CLASSNAME,
          factoryButtonClassName,
          closeButtonClassName,
        )}
        onClick={chain(() => toastPrimitive.dismiss(t), onCloseButtonClick)}
        {...restCloseButtonProps}
      >
        {closeButtonChildren ?? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            className={cn("size-3.5", closeIconClassName)}
            {...restCloseIconProps}
          >
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export { ToastContent }
