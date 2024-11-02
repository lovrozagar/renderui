const DEFAULT_HOVER_CARD_TRIGGER_CLASSNAME = "_hover-card-trigger"

const DEFAULT_HOVER_CARD_TRIGGER_PRIMITIVE_CLASSNAME = "_hover-card-trigger-primitive"

const DEFAULT_HOVER_CARD_CONTENT_CLASSNAME =
  "_hover-card-content data-[state=closed]:data-[side=bottom]:animate-popover-exit-from-top-and-fade-out data-[state=closed]:data-[side=top]:animate-popover-exit-from-bottom-and-fade-out data-[state=closed]:data-[side=right]:animate-popover-exit-from-left-and-fade-out data-[state=closed]:data-[side=left]:animate-popover-exit-from-right-and-fade-out data-[state=open]:data-[side=bottom]:animate-popover-enter-to-top-and-fade-in data-[state=open]:data-[side=left]:animate-popover-enter-to-right-and-fade-in data-[state=open]:data-[side=right]:animate-popover-enter-to-left-and-fade-in data-[state=open]:data-[side=top]:animate-popover-enter-to-bottom-and-fade-in z-50 box-border w-fit rounded-md border bg-background border-mode-accent text-mode-contrast p-4 shadow-md outline-none will-change-[transform,opacity] data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom"

const DEFAULT_HOVER_CARD_CONTENT_ARROW_CONTAINER_CLASSNAME =
  "_hover-card-content-arrow-container relative before:absolute before:size-[8px] before:rotate-45 before:top-[-4px] before:left-1/2 before:-translate-x-1/2 before:inline-block before:z-[1] before:border before:border-r-mode-accent before:border-b-mode-accent before:border-t-transparent before:border-l-transparent"

const DEFAULT_HOVER_CARD_CONTENT_ARROW_CLASSNAME =
  "_hover-card-arrow bg-transparent fill-background"

export {
  DEFAULT_HOVER_CARD_TRIGGER_CLASSNAME,
  DEFAULT_HOVER_CARD_TRIGGER_PRIMITIVE_CLASSNAME,
  DEFAULT_HOVER_CARD_CONTENT_CLASSNAME,
  DEFAULT_HOVER_CARD_CONTENT_ARROW_CONTAINER_CLASSNAME,
  DEFAULT_HOVER_CARD_CONTENT_ARROW_CLASSNAME,
}
