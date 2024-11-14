const DEFAULT_COMMAND_CLASSNAME =
	"_command-root flex h-full w-full flex-col overflow-hidden rounded-md bg-background text-foreground outline-none"

const COMMAND_INPUT_CONTAINER_CLASSNAME =
	"_command-input-container flex justify-start items-center border-b border-mode-accent px-3"

const COMMAND_INPUT_CLASSNAME =
	"_command-input flex h-10 rounded-md bg-transparent min-w-[0px] shrink py-3 text-sm w-full outline-none placeholder:text-mode-500 disabled:cursor-not-allowed disabled:opacity-50"

const COMMAND_INPUT_ICON_CLASSNAME = "_command-input-icon mr-2 h-4 w-4 shrink-0 opacity-50"

const DEFAULT_COMMAND_LIST_CLASSNAME =
	"_command-list max-h-[400px] overflow-y-auto overflow-x-hidden"

const DEFAULT_COMMAND_EMPTY_CLASSNAME = "_command-dialog-empty py-6 text-center text-sm"

const DEFAULT_COMMAND_GROUP_CLASSNAME =
	"_command-dialog-group overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-mode-500"

const DEFAULT_COMMAND_ITEM_CLASSNAME =
	"_command-item relative rounded flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none aria-selected:bg-[rgba(var(--item-color))] aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"

const RADIX_FOCUS_GUARD_ATTRUBUTE = "[data-radix-focus-guard]"

const COMMAND_ATTRIBUTE = "[data-command-popover-root]"

const COMMAND_ITEM_CLASSNAME_SELECTOR = "_command-item"

const SEARCH_PAUSE_DURATION = 750

const SEARCH_OBSERVER_OPTIONS = {
	childList: true,
	subtree: true,
	attributeOldValue: false,
	characterData: false,
	attributes: false,
	characterDataOldValue: false,
} as const

export {
	COMMAND_ATTRIBUTE,
	COMMAND_INPUT_CLASSNAME,
	COMMAND_INPUT_CONTAINER_CLASSNAME,
	COMMAND_INPUT_ICON_CLASSNAME,
	COMMAND_ITEM_CLASSNAME_SELECTOR,
	DEFAULT_COMMAND_CLASSNAME,
	DEFAULT_COMMAND_EMPTY_CLASSNAME,
	DEFAULT_COMMAND_GROUP_CLASSNAME,
	DEFAULT_COMMAND_ITEM_CLASSNAME,
	DEFAULT_COMMAND_LIST_CLASSNAME,
	RADIX_FOCUS_GUARD_ATTRUBUTE,
	SEARCH_OBSERVER_OPTIONS,
	SEARCH_PAUSE_DURATION,
}
