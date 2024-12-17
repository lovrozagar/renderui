const SCROLL_AREA_ORIENTATIONS = ["horizontal", "vertical"] as const

const SCROLL_SHADOW_OVERFLOW_DIRECTIONS = [
  "top",
  "bottom",
  "topBottom",
  "left",
  "right",
  "leftRight",
] as const

const SCROLL_SHADOW_VISIBLITY_DIRECTIONS = ["top", "bottom", "left", "right"] as const

const DEFAULT_SCROLL_AREA_CLASSNAME = "_scroll-area relative"

const DEFAULT_SCROLL_AREA_VIEWPORT_CLASSNAME =
  '_scroll-area-viewport h-full max-h-[inherit] w-full max-w-[inherit] rounded-[inherit] outline-none before:content-[""] before:pointer-events-none before:bg-transparent before:absolute before:z-[1] before:inset-0 before:w-full before:h-full focus-visible:before:ring before:transition-all before:ring-ring-color motion-reduce:before:transition-none overscroll-contain data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]'

const DEFAULT_SCROLL_AREA_THUMB_CLASSNAME =
  "_scroll-area-thumb relative flex-1 rounded-full bg-mode-accent"

const DEFAULT_SCROLL_AREA_SCROLLBAR_BASE_CLASSNAME =
  "_scroll-area-scrollbar relative z-[2] flex touch-none select-none transition-colors motion-reduce:transition-none"

const DEFAULT_SCROLL_AREA_SCROLLBAR_HORIZONTAL_CLASSNAME =
  "h-2.5 flex-col border-t border-t-transparent p-[1px]"

const DEFAULT_SCROLL_AREA_SCROLLBAR_VERTICAL_CLASSNAME =
  "h-full w-2.5 border-l border-l-transparent p-[1px]"

export {
  DEFAULT_SCROLL_AREA_CLASSNAME,
  DEFAULT_SCROLL_AREA_SCROLLBAR_BASE_CLASSNAME,
  DEFAULT_SCROLL_AREA_SCROLLBAR_HORIZONTAL_CLASSNAME,
  DEFAULT_SCROLL_AREA_SCROLLBAR_VERTICAL_CLASSNAME,
  DEFAULT_SCROLL_AREA_THUMB_CLASSNAME,
  DEFAULT_SCROLL_AREA_VIEWPORT_CLASSNAME,
  SCROLL_AREA_ORIENTATIONS,
  SCROLL_SHADOW_OVERFLOW_DIRECTIONS,
  SCROLL_SHADOW_VISIBLITY_DIRECTIONS,
}
