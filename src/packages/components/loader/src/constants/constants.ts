const DEFAULT_LOADER_DOT_CLASSNAME =
  "_loader-dot box-border inline-block size-1 animate-[blink_1400ms_linear_infinite] rounded-full bg-current"

const LOADER_DOT_PAUSED_CLASSNAME = "!animate-none"

const LOADER_DOTS = ["start", "middle", "end"] as const

export { DEFAULT_LOADER_DOT_CLASSNAME, LOADER_DOT_PAUSED_CLASSNAME, LOADER_DOTS }
