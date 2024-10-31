import { type VariantProps, cva } from "@renderui/utils"

const skeletonClasses = cva("_skeletion rounded bg-mode-accent overflow-hidden", {
  variants: {
    variant: {
      pulse: "animate-[pulse_1500ms_infinite]",
      slide:
        'relative isolate w-full before:content-[""] before:absolute before:inline-block before:inset-0 before:z-[1] before:rounded-[inherit] before:animate-slide before:bg-gradient-to-r before:from-transparent before:via-mode-750 before:to-transparent',
    },
    type: {
      static: undefined,
      layer: "absolute inset-0 size-full rounded-[inherit] overflow-hidden z-[2]",
    },
  },
})

type SkeletonClassesProps = VariantProps<typeof skeletonClasses>

export { skeletonClasses, type SkeletonClassesProps }
