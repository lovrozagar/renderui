import { cva, type VariantProps as CVAVariantProps } from "class-variance-authority"

/* biome-ignore lint/suspicious/noExplicitAny: allow any function */
type VariantProps<T extends (...args: any) => any> = {
	[K in keyof CVAVariantProps<T>]: NonNullable<CVAVariantProps<T>[K]>
}

export { cva, type VariantProps }