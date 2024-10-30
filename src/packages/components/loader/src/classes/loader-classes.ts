import { cva } from "class-variance-authority"

const loaderClasses = cva(["_loader box-border inline-block aspect-square"], {
  variants: {
    isPaused: {
      true: "!animate-none",
      false: undefined,
    },
    variant: {
      base: undefined,
      edge: undefined,
      ring: undefined,
      dots: "top-[1px] flex h-full items-center gap-0.5",
    },
    size: {
      small: "size-4",
      medium: "size-5",
      large: "size-6",
      auto: undefined,
    },
    position: {
      "relative": undefined,
      "absolute-center": undefined,
      "absolute-start": undefined,
      "absolute-end": undefined,
    },
  },
  compoundVariants: [
    {
      variant: ["base", "edge", "ring", "dots"],
      position: ["absolute-center", "absolute-start", "absolute-end"],
      className: "pointer-events-none absolute",
    },
    {
      position: "absolute-start",
      className: "left-3",
    },
    {
      position: "absolute-end",
      className: "right-3",
    },
    {
      variant: "dots",
      position: "relative",
      className: "relative",
    },
    {
      variant: ["base", "ring"],
      className: "border-[2px]",
    },
    {
      variant: "edge",
      className: "border-x-[2px] border-b-[2px]",
    },
    {
      variant: ["base", "edge", "ring"],
      className: "rounded-full",
    },
    {
      variant: "edge",
      className: "border-y-transparent border-l-transparent border-r-current",
    },
    {
      variant: "base",
      className: "border-b-transparent border-l-current border-r-transparent border-t-current",
    },
    {
      variant: "ring",
      className: "border-x-mode-accent border-b-mode-accent border-t-current",
    },
    {
      variant: ["base", "edge", "ring"],
      className: "animate-[spin_700ms_linear_infinite]",
    },
  ],
})

export { loaderClasses }
