import { cva } from "@renderui/utils"

const sheetClasses = cva(
  "fixed z-50 flex flex-col gap-4 border-mode-accent bg-mode p-6 shadow-lg shadow-black/60 outline-none ring-ring-color ring-offset-background transition-[box-shadow] duration-medium focus-visible:ring-ring-width focus-visible:ring-offset-offset",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:animate-sheet-exit-to-top data-[state=open]:animate-sheet-enter-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:animate-sheet-exit-to-bottom data-[state=open]:animate-sheet-enter-from-bottom",
        left: "inset-y-0 left-0 size-full border-r data-[state=closed]:animate-sheet-exit-to-left data-[state=open]:animate-sheet-enter-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 size-full border-l data-[state=closed]:animate-sheet-exit-to-right data-[state=open]:animate-sheet-enter-from-right sm:max-w-sm",
      },
    },
  },
)

export { sheetClasses }
