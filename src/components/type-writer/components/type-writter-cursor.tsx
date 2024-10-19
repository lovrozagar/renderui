import { useTypeWritterContext } from '@/components/type-writer/contexts/type-writter-context'
import type { TypeWritterCursorProps } from '@/components/type-writer/types/type-writter-cursor'
import { cn, polymorphic } from '@renderui/utils'

const TypeWritterCursor = (props: TypeWritterCursorProps) => {
	const { asChild, className, children = '|', ...restProps } = props

	const { cursorRef } = useTypeWritterContext()

	const Component = polymorphic(asChild, 'span')

	return (
		<Component
			ref={cursorRef}
			className={cn('_type-writter-cursor font-extralight', className)}
			{...restProps}
		/>
	)
}

export { TypeWritterCursor }
