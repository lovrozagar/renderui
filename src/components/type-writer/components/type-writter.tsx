import type { AsChildProp } from '@/components/_shared/types/as-child'
import { TypeWritterProvider } from '@/components/type-writer/contexts/type-writter-context'
import { cn, getNestedChildrenTextContent, polymorphic } from '@renderui/utils'
import { useEffect, useRef, useState } from 'react'

type TypeWriterProps = React.ComponentPropsWithRef<'span'> &
	AsChildProp & {
		cursorProps: React.ComponentPropsWithRef<'span'> & AsChildProp
	}

const TypeWriter = (props: TypeWriterProps) => {
	const { asChild, className, children, cursorProps } = props

	const { asChild: cursorAsChild, className: cursorClassName, ...restCursorProps } = cursorProps

	const [currentText, setCurrentText] = useState('')
	const cursorRef = useRef<HTMLSpanElement>(null)

	/* Blink the cursor only when the animation is not playing */
	useEffect(() => {
		const nodeTextContent = getNestedChildrenTextContent(children)
		const typing = currentText !== nodeTextContent

		if (cursorRef.current) {
			cursorRef.current.style.animation = typing ? 'none' : 'blink 2s infinite'
		}
	}, [currentText, children])

	useEffect(() => {
		/* If the text is different, start the animation */
		const interval = setInterval(
			() => {
				const nodeTextContent = getNestedChildrenTextContent(children)

				/* If the text is the same, stop the animation (should never be reached) */
				if (nodeTextContent === currentText) {
					clearInterval(interval)
					return
				}

				/* if currentText is included in toText, add one more character */
				if (nodeTextContent.startsWith(currentText)) {
					setCurrentText(nodeTextContent.slice(0, currentText.length + 1))
				} else {
					/* if currentText is not included in toText, remove one character */
					setCurrentText(currentText.slice(0, currentText.length - 1))
				}
			},
			Math.random() * 6 * 10,
		)
		return () => {
			clearInterval(interval)
		}
	}, [children, currentText])

	const Component = polymorphic(asChild, 'span')

	return (
		<Component className={cn('text-base', className)}>
			<TypeWritterProvider value={{ cursorRef }}>{currentText}</TypeWritterProvider>
		</Component>
	)
}

export { TypeWriter }
