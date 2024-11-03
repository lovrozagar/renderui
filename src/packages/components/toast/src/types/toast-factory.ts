import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"
import type { ToastT } from "sonner"

type ContainerProps = Simplify<Omit<ComponentPropsWithRef<"div">, "className"> & ClassNameProps>

type TitleProps = Simplify<Omit<ComponentPropsWithRef<"p">, "className"> & ClassNameProps>

type DescriptionProps = Simplify<Omit<ComponentPropsWithRef<"p">, "className"> & ClassNameProps>

type CloseButtonProps = Simplify<
	Omit<ComponentPropsWithRef<"button">, "className"> & ClassNameProps
>

type CloseIconProps = Simplify<Omit<ComponentPropsWithRef<"svg">, "className"> & ClassNameProps>

type ActionButtonProps = Simplify<
	Omit<ComponentPropsWithRef<"button">, "className" | "onClick"> &
		ClassNameProps & {
			onClick: (t: string | number) => void
		}
>

type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

type ToastProps = {
	onDismiss?: ((toast: ToastT) => void) 
	dismissible?: boolean 
	duration?: number 
	important?: boolean 
	onAutoClose?: ((toast: ToastT) => void) 
	invert?: boolean 
	position?: ToastPosition 
	containerProps?: ContainerProps
	title?: string
	description?: string
	titleProps?: TitleProps
	descriptionProps?: DescriptionProps
	children?: ReactNode | ((t: string | number) => ReactNode)
	closeButtonProps?: CloseButtonProps
	closeIconProps?: CloseIconProps
	actionButtonProps?: ActionButtonProps
}

type ToastClasses = {
	title: string
	description: string
	container: string
	button: string
}

export type { ToastClasses, ToastProps, ToastPosition }
