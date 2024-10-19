const DEFAULT_ACCORDION_CLASSNAME = '_accordion'

const DEFAULT_ACCORDION_ITEM_CLASSNAME =
	'_accordion-item border-b border-mode-accent transition-[border] duration-fast'

const DEFAULT_ACCORDION_HEADER_CLASSNAME = '_accordion-header flex'

const DEFAULT_ACCORDION_TRIGGER_CLASSNAME =
	'_accordion-trigger flex flex-1 rounded-none items-center justify-between px-0 py-4 data-[focus-visible=true]:ring-offset-0 text-sm data-[hover=true]:underline [&[data-state=open]>svg]:rotate-180'

const DEFAULT_ACCORDION_TRIGGER_ICON_CLASSNAME =
	'_accordion-trigger-icon h-4 w-4 shrink-0 text-muted-foreground transition-[color,transform] duration-fast text-mode-contrast'

const DEFAULT_ACCORDION_CONTENT_CLASSNAME =
	'_accordion-content overflow-hidden text-sm text-mode-contrast data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'

const DEFAULT_ACCORDION_CONTENT_CHILDREN_CONTAINER_CLASSNAME =
	'_accordion-content-children-container pb-4 pt-0'

export {
	DEFAULT_ACCORDION_CLASSNAME,
	DEFAULT_ACCORDION_CONTENT_CHILDREN_CONTAINER_CLASSNAME,
	DEFAULT_ACCORDION_CONTENT_CLASSNAME,
	DEFAULT_ACCORDION_HEADER_CLASSNAME,
	DEFAULT_ACCORDION_ITEM_CLASSNAME,
	DEFAULT_ACCORDION_TRIGGER_CLASSNAME,
	DEFAULT_ACCORDION_TRIGGER_ICON_CLASSNAME,
}
