const DEFAULT_LINK_CLASSES =
	'_link tap-highlight-transparent appearence-none m-0 box-border inline-flex cursor-pointer items-center bg-transparent p-0 text-base text-[rgba(var(--link-color))] underline-offset-2 outline-none ring-ring-color ring-offset-background transition-[color,box-shadow] duration-fast focus-visible:ring-[2px] focus-visible:ring-offset-offset active:text-[rgba(var(--link-color),0.8)]'

const LINK_UNDERLINE_CLASSES = {
	none: undefined,
	hover: 'hover:underline',
	active: 'active:underline',
	focus: 'focus:underline',
	'focus-visible': 'focus-visible:underline',
}

export { DEFAULT_LINK_CLASSES, LINK_UNDERLINE_CLASSES }

