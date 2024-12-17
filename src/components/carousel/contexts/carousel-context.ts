import type { CarouselContextProps } from "@/components/carousel/types/carousel-api"
import { initializeContext } from "@renderui/utils"

const [CarouselProvider, useCarouselContext] = initializeContext<CarouselContextProps>({
  errorMessage: "Components using context must be wrapped in a <Carousel />.",
  providerName: "CarouselProvider",
  hookName: "useCarouselContext",
  name: "CarouselContext",
})

export { CarouselProvider, useCarouselContext }
