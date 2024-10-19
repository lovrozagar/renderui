import { chain } from "../chain/chain"
import { cn } from "../cn/cn"

type Props = {
	/* biome-ignore lint/suspicious/noExplicitAny: allow maximally generic */
	[key: string]: any
}

type PropsArgument = Props | null | undefined

/* biome-ignore lint/complexity/noBannedTypes: allow maximally generic */
type NullToObject<T> = T extends null | undefined ? Readonly<{}> : T

type TupleTypes<T> = { [P in keyof T]: T[P] } extends { [key: number]: infer V }
	? NullToObject<V>
	: never

/* biome-ignore lint/suspicious/noExplicitAny: allow maximally generic */
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
	? I
	: never

function isEventProps(propA: unknown, propB: unknown, key: string) {
	return (
		typeof propA === 'function' &&
		typeof propB === 'function' &&
		key[0] === 'o' &&
		key[1] === 'n' &&
		(key.codePointAt(2) ?? 0) >= 65 &&
		(key.codePointAt(2) ?? 0) <= 90
	)
}

function isClassNameProps(propA: unknown, propB: unknown, key: string) {
	return key === 'className' && typeof propA === 'string' && typeof propB === 'string'
}

function mergeProps<T extends PropsArgument[]>(...args: T): UnionToIntersection<TupleTypes<T>> {
	const result: Props = { ...args[0] }

	for (let index = 1; index < args.length; index += 1) {
		const props = args[index]

		for (const key in props) {
			if (Object.prototype.hasOwnProperty.call(props, key)) {
				const propA = result[key]
				const propB = props[key]

				if (isEventProps(propA, propB, key)) {
					result[key] = chain(propA, propB)
				} else if (isClassNameProps(propA, propB, key)) {
					result[key] = cn(propA as string, propB as string)
				} else {
					result[key] = propB === undefined ? propA : propB
				}
			}
		}
	}

	return result as UnionToIntersection<TupleTypes<T>>
}

export { mergeProps }
