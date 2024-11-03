const DEFAULT_TOAST_PROPS = {
	position: "top-center",
	duration: 3600,
} as const

const DEFAULT_TOAST_CONTAINER_CLASSNAME =
	"relative box-border shadow-lg max-h-[300px] w-auto min-w-[356px] select-none overflow-auto rounded-[8px] border-[1px] p-4 sm:w-[356px]"

const DEFAULT_TOAST_TITLE_CLASSNAME = "font-medium text-sm"

const DEFAULT_TOAST_DESCRIPTION_CLASSNAME = "m-0 mt-2 font-medium text-sm leading-[1.2]"

const DEFAULT_TOAST_ACTION_BUTTON_CLASSNAME =
	"relative mt-1 ml-auto box-border flex min-w-[100px] shrink-0 cursor-pointer items-center justify-center rounded border-none bg-brand-blue-accent px-2 py-1 text-end transition-colors duration-fast"

const DEFAULT_TOAST_CLOSE_BUTTON_CLASSNAME =
	"absolute top-[4px] right-[4px] z-[1] flex size-[24px] cursor-pointer appearance-none items-center justify-center rounded border-none bg-transparent p-0 text-neutral-700 outline-none ring-ring-color ring-offset-0 transition-colors duration-fast focus-visible:ring-[2px]"

export {
	DEFAULT_TOAST_PROPS,
	DEFAULT_TOAST_CONTAINER_CLASSNAME,
	DEFAULT_TOAST_TITLE_CLASSNAME,
	DEFAULT_TOAST_DESCRIPTION_CLASSNAME,
	DEFAULT_TOAST_ACTION_BUTTON_CLASSNAME,
	DEFAULT_TOAST_CLOSE_BUTTON_CLASSNAME,
}
