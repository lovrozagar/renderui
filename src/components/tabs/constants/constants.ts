import type { NonNullableVariantProps } from "@/components/_shared/types/variant"
import type { tabsCursorClasses } from "@/components/tabs/classes/tabs-cursor-classes"

const DEFAULT_TABS_CURSOR_TRANISTION = {
  type: "spring",
  bounce: 0,
  duration: 0.3,
} as const

const DEFAULT_TABS_CLASSNAME = "_tabs"

const DEFAULT_TABS_TRIGGER_CLASSNAME = "_tabs-trigger before:hidden after:hidden"

const DEFAULT_TABS_CONTENT_CLASSNAME =
  "_tabs-content outline-none ring-ring-color ring-offset-background focus-visible:ring focus-visible:ring-offset-offset transition-colors duration-fast"

const DEFAULT_TABS_CURSOR_CLASSNAME = "_tabs-cursor transition-none"

const NO_BORDER_RADIUS_ON_TRIGGER_VARIANTS: Partial<
  NonNullableVariantProps<typeof tabsCursorClasses>["variant"]
>[] = [
  "card",
  "card-reverse",
  "lined",
  "lined-reverse",
  "lined-track",
  "lined-track-reverse",
] as const

const NO_BORDER_RADIUS_TABS_TRIGGER_CLASSNAME = "rounded-none"

const INACTIVE_TABS_TRIGGER_CLASSNAME =
  "text-mode-contrast transition-[color] duration-fast data-[hover=true]:data-[state=inactive]:text-[rgba(var(--button-bg))]"

const DEFAULT_TABS_TRIGGER_CHILDREN_CONTAINER_CLASSNAME =
  "absolute inset-0 z-[2] flex size-full items-center justify-center gap-3 text-[inherit]"

export {
  DEFAULT_TABS_CLASSNAME,
  DEFAULT_TABS_CONTENT_CLASSNAME,
  DEFAULT_TABS_CURSOR_CLASSNAME,
  DEFAULT_TABS_CURSOR_TRANISTION,
  DEFAULT_TABS_TRIGGER_CHILDREN_CONTAINER_CLASSNAME,
  DEFAULT_TABS_TRIGGER_CLASSNAME,
  INACTIVE_TABS_TRIGGER_CLASSNAME,
  NO_BORDER_RADIUS_ON_TRIGGER_VARIANTS,
  NO_BORDER_RADIUS_TABS_TRIGGER_CLASSNAME,
}
