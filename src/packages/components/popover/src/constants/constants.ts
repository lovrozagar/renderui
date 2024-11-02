const DEFAULT_POPOVER_CONTENT_CLASSNAME =
  "_popover-content data-[state=closed]:data-[side=bottom]:animate-popover-exit-from-top-and-fade-out data-[state=closed]:data-[side=top]:animate-popover-exit-from-bottom-and-fade-out data-[state=closed]:data-[side=right]:animate-popover-exit-from-left-and-fade-out data-[state=closed]:data-[side=left]:animate-popover-exit-from-right-and-fade-out data-[state=open]:data-[side=bottom]:animate-popover-enter-to-top-and-fade-in data-[state=open]:data-[side=left]:animate-popover-enter-to-right-and-fade-in data-[state=open]:data-[side=right]:animate-popover-enter-to-left-and-fade-in data-[state=open]:data-[side=top]:animate-popover-enter-to-bottom-and-fade-in z-50 box-border w-fit rounded-md border bg-background border-mode-accent text-mode-contrast p-4 shadow-md outline-none will-change-[transform,opacity] data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom"

const DEFAULT_POPOVER_CONTENT_ARROW_CONTAINER_CLASSNAME =
  "_popover-content-arrow-container relative before:absolute before:size-[8px] before:rotate-45 before:top-[-4px] before:left-1/2 before:-translate-x-1/2 before:inline-block before:z-[1] before:border before:border-r-mode-accent before:border-b-mode-accent before:border-t-transparent before:border-l-transparent"

const DEFAULT_POPOVER_CONTENT_ARROW_CLASSNAME = "_popover-arrow bg-transparent fill-background"

const DEFAULT_POPOVER_TRIGGER_CLASSNAME = "_popover-trigger"

const POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME = "w-[var(--radix-popover-trigger-width)]"

const POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME = "h-[var(--radix-popover-trigger-width)]"

const POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME = "min-w-[var(--radix-popover-trigger-width)]"

const POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME = "min-h-[var(--radix-popover-trigger-width)]"

const POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME = "max-w-[var(--radix-popover-trigger-width)]"

const POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME = "max-h-[var(--radix-popover-trigger-width)]"

export {
  DEFAULT_POPOVER_CONTENT_ARROW_CLASSNAME,
  DEFAULT_POPOVER_CONTENT_ARROW_CONTAINER_CLASSNAME,
  DEFAULT_POPOVER_CONTENT_CLASSNAME,
  DEFAULT_POPOVER_TRIGGER_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME,
}
