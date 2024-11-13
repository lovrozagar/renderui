const DEFAULT_TEXT_INPUT_CONTAINER_CLASSNAME = "_text-input-container"

const TEXT_INPUT_CONTAINER_BASE_PADDING = "pr-3"
const TEXT_INPUT_CONTAINER_ACTIONS_PADDING = "pr-1.5"

const DEFAULT_TEXT_INPUT_CLASSNAME =
	"_text-input relative z-[1] text-elipsis h-full w-full min-w-[0px] pl-3 overflow-hidden bg-transparent text-sm text-mode-contrast outline-none data-[disabled=true]:cursor-[inherit] data-[disabled=true]:pointer-events-none placeholder:text-mode-foreground/50"

const DEFAULT_TEXT_INPUT_CLEAR_BUTTON_CLASSNAME =
	"_text-input-clear-button h-6 w-6 shrink-0 rounded-full p-0 data-[focus-visible=true]:ring-offset-0 data-[focus-visible=true]:ring-[2px]"

const DEFAULT_TEXT_INPUT_CLEAR_BUTTON_ICON_CLASSNAME =
	"_text-input-clear-button-icon text-mode-foreground/50 transition-[color] duration-fast"

const DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_BUTTON_CLASSNAME =
	"_text-input-password-toggle-button relative z-[1] flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-offset-mode-accent p-0 data-[focus-visible=true]:ring-offset-0 data-[focus-visible=true]:ring-[2px]"

const DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_BUTTON_ICON_CLASSNAME =
	"_text-input-password-toggle-button-icon pointer-events-none absolute inset-0 left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-mode-foreground/50 transition-[opacit,color] duration-fast"

const TEXT_INPUT_INVALID_BUTTON_RING_CLASSNAME = "ring-destructive"

const TEXT_INPUT_DISABLED_BUTTON_CLASSNAME = "pointer-events-none"

export {
	DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_BUTTON_ICON_CLASSNAME,
	DEFAULT_TEXT_INPUT_CLASSNAME,
	DEFAULT_TEXT_INPUT_CLEAR_BUTTON_CLASSNAME,
	DEFAULT_TEXT_INPUT_CLEAR_BUTTON_ICON_CLASSNAME,
	DEFAULT_TEXT_INPUT_CONTAINER_CLASSNAME,
	DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_BUTTON_CLASSNAME,
	TEXT_INPUT_CONTAINER_ACTIONS_PADDING,
	TEXT_INPUT_CONTAINER_BASE_PADDING,
	TEXT_INPUT_INVALID_BUTTON_RING_CLASSNAME,
	TEXT_INPUT_DISABLED_BUTTON_CLASSNAME,
}
