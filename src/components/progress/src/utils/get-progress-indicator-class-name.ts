import { cn } from '@renderui/utils'

const getProgressIndicatorClassName = (isIntermediate: boolean | undefined) =>
	cn(
		'_progress-indicator h-full w-full flex-1 bg-[rgba(var(--indicator-color))] rounded-full origin-left transition-[width,height,background-color,transform] duration-medium',
		isIntermediate ? 'animate-infinite-progress' : undefined,
	)

export { getProgressIndicatorClassName }
