const DEFAULT_TOOLTIP_TRIGGER_CLASSNAME = "_tooltip-trigger"

const DEFAULT_TOOLTIP_TRIGGER_PRIMITIVE_CLASSNAME = "_tooltip-trigger-primitive"

const DEFAULT_TOOLTIP_CONTENT_CLASSNAME =
  "_tooltip-content data-[state=delayed-open]:data-[side=top]:animate-popover-enter-to-bottom-and-fade-in data-[state=delayed-open]:data-[side=right]:animate-popover-enter-to-left-and-fade-in data-[state=delayed-open]:data-[side=left]:animate-popover-enter-to-right-and-fade-in data-[state=delayed-open]:data-[side=bottom]:animate-popover-enter-to-top-and-fade-in data-[state=closed]:data-[side=top]:animate-popover-exit-from-bottom-and-fade-out data-[state=closed]:data-[side=right]:animate-popover-exit-from-left-and-fade-out data-[state=closed]:data-[side=left]:animate-popover-exit-from-right-and-fade-out data-[state=closed]:data-[side=bottom]:animate-popover-exit-from-top-and-fade-out relative select-none rounded-md bg-[rgba(var(--tooltip-content-bg))] px-3 py-2 text-sm leading-none text-[rgba(var(--tooltip-content-color))] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom"

const DEFAULT_TOOLTIP_ARROW_CLASSNAME =
  "_tooltip-arrow fill-[rgba(var(--tooltip-content-bg))] transition-colors"

const DEFAULT_SIDE_OFFSET = 4

export {
  DEFAULT_SIDE_OFFSET,
  DEFAULT_TOOLTIP_ARROW_CLASSNAME,
  DEFAULT_TOOLTIP_CONTENT_CLASSNAME,
  DEFAULT_TOOLTIP_TRIGGER_CLASSNAME,
  DEFAULT_TOOLTIP_TRIGGER_PRIMITIVE_CLASSNAME,
}
