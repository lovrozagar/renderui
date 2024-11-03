import type { ToastClasses, ToastProps } from "./toast-factory"

type ToastContentProps = Pick<
  ToastProps,
  | "containerProps"
  | "title"
  | "titleProps"
  | "description"
  | "descriptionProps"
  | "children"
  | "closeButtonProps"
  | "closeIconProps"
  | "actionButtonProps"
> & {
  styles: ToastClasses
} & {
  t: string | number
}

export type { ToastContentProps }
