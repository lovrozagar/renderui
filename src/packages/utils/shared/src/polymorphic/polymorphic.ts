import { Slot } from '@radix-ui/react-slot'
import type React from 'react'

type PolymorphicComponent<T extends keyof React.JSX.IntrinsicElements> = (
	props: React.ComponentPropsWithRef<T>,
) => React.ReactNode

function polymorphic<T extends keyof React.JSX.IntrinsicElements>(
	isAsChild: boolean | undefined,
	defaultElement: T,
) {
	return (isAsChild ? Slot : defaultElement) as PolymorphicComponent<T>
}

export { polymorphic }
