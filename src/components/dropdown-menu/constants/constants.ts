const DEFAULT_DROPDOWN_MENU_TRIGGER_CLASSNAME =
  "_dropdown-menu-trigger rounded transition-[background-color,shadow] duration-fast outline-none focus-visible:ring ring-ring-color [&]:ring-ring-offset ring-offset-background"

const DEFAULT_DROPDOWN_MENU_CONTENT_CLASSNAME =
  "_dropdown-menu-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-mode-accent bg-background p-1 text-foreground shadow-md data-[state=closed]:data-[side=bottom]:animate-popover-exit-from-top-and-fade-out data-[state=closed]:data-[side=top]:animate-popover-exit-from-bottom-and-fade-out data-[state=closed]:data-[side=right]:animate-popover-exit-from-left-and-fade-out data-[state=closed]:data-[side=left]:animate-popover-exit-from-right-and-fade-out data-[state=open]:data-[side=bottom]:animate-popover-enter-to-top-and-fade-in data-[state=open]:data-[side=left]:animate-popover-enter-to-right-and-fade-in data-[state=open]:data-[side=right]:animate-popover-enter-to-left-and-fade-in data-[state=open]:data-[side=top]:animate-popover-enter-to-bottom-and-fade-in will-change-[transform,opacity] data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom"

const DEFAULT_DROPDOWN_MENU_SUB_TRIGGER_CLASSNAME =
  "_dropdown-menu-sub-trigger flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-mode-accent data-[state=open]:bg-accent"

const DEFAULT_DROPDOWN_MENU_SUB_CONTENT_CLASSNAME =
  "_dropdown-menu-sub-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-mode-accent bg-background p-1 text-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"

const DEFAULT_DROPDOWN_MENU_SEPARATOR_CLASSNAME =
  "_dropdown-menu-separator -mx-1 my-1 h-px bg-mode-accent"

const DEFAULT_DROPDOWN_MENU_LABEL_CLASSNAME =
  "_dropdown-menu-label px-2 py-1.5 text-sm font-semibold"

const DEFAULT_DROPDOWN_MENU_ITEM_CLASSNAME =
  "_dropdown-menu-item relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-mode-accent focus:text-mode-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"

const DEFAULT_DROPDOWN_MENU_CHECKBOX_ITEM_CLASSNAME =
  "_dropdown-menu-checkbox-item relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"

export {
  DEFAULT_DROPDOWN_MENU_SUB_TRIGGER_CLASSNAME,
  DEFAULT_DROPDOWN_MENU_TRIGGER_CLASSNAME,
  DEFAULT_DROPDOWN_MENU_CONTENT_CLASSNAME,
  DEFAULT_DROPDOWN_MENU_SUB_CONTENT_CLASSNAME,
  DEFAULT_DROPDOWN_MENU_SEPARATOR_CLASSNAME,
  DEFAULT_DROPDOWN_MENU_LABEL_CLASSNAME,
  DEFAULT_DROPDOWN_MENU_ITEM_CLASSNAME,
  DEFAULT_DROPDOWN_MENU_CHECKBOX_ITEM_CLASSNAME,
}
