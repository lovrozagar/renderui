const CAROUSEL_VIEWPORT_CLASSNAME =
  "renderui-carousel-viewport relative outline-none rounded select-none transition-shadow duration-fast ring-ring-color ring-offset-background focus-visible:ring focus-visible:ring-offset-offset"

const CAROUSEL_ACCESSIBILITY_PROPS = {
  "role": "region",
  "aria-roledescription": "carousel",
} as const

const CAROUSEL_ITEM_ACCESSIBILITY_PROPS = {
  "role": "group",
  "aria-roledescription": "slide",
} as const

const DEFAULT_CAROUSEL_DURATION = 16.5
const DEFAULT_CAROUSEL_ALIGN = "start"
const DEFAULT_CAROUSEL_LOOP = true

const DEFAULT_CAROUSEL_CLASSNAME = "carousel group/carousel relative inline-block"

const DEFAULT_CAROUSEL_ITEM_CHILDREN_CONTAINER_CLASSNAME =
  "carousel-item-children-container overflow-hidden rounded"

const DEFAULT_CAROUSEL_GALLERY_CONTENT_CLASSNAME = "carousel-gallery-content mt-2"

const DEFAULT_CAROUSEL_GALLERY_ROOT_CLASSNAME = "carousel-gallery-root overflow-hidden"

const DEFAULT_CAROUSEL_GALLERY_CLASSNAME = "carousel-gallery flex py-2"

const DEFAULT_CAROUSEL_GALLERY_PREVIOUS_CLASSNAME =
  "carousel-gallery-previous absolute left-0 top-0 h-full z-[1] w-[20px] p-0 rounded-r-none bg-mode-contrast/60 ring-inset data-[focus-visible=true]:ring-offset-[0px]"

const DEFAULT_CAROUSEL_GALLERY_NEXT_CLASSNAME =
  "carousel-gallery-next absolute right-0 top-0 h-full z-[1] w-[20px] p-0 rounded-l-none bg-mode-contrast/60 ring-inset  data-[focus-visible=true]:ring-offset-[0px]"

export {
  CAROUSEL_ACCESSIBILITY_PROPS,
  CAROUSEL_ITEM_ACCESSIBILITY_PROPS,
  DEFAULT_CAROUSEL_ALIGN,
  DEFAULT_CAROUSEL_CLASSNAME,
  DEFAULT_CAROUSEL_DURATION,
  DEFAULT_CAROUSEL_GALLERY_CLASSNAME,
  DEFAULT_CAROUSEL_GALLERY_CONTENT_CLASSNAME,
  DEFAULT_CAROUSEL_GALLERY_NEXT_CLASSNAME,
  DEFAULT_CAROUSEL_GALLERY_PREVIOUS_CLASSNAME,
  DEFAULT_CAROUSEL_GALLERY_ROOT_CLASSNAME,
  DEFAULT_CAROUSEL_ITEM_CHILDREN_CONTAINER_CLASSNAME,
  DEFAULT_CAROUSEL_LOOP,
  CAROUSEL_VIEWPORT_CLASSNAME,
}
