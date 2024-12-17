const DEFAULT_DIALOG_TRIGGER_CLASSNAME = "_dialog-trigger rounded"

const DIALOG_OVERLAY_CLASSNAME =
  "_dialog-overlay fixed inset-0 z-50 grid place-items-center overflow-auto bg-black/70 py-4 backdrop-blur-sm data-[state=closed]:animate-overlay-fade-out data-[state=open]:animate-overlay-fade-in"

const DFEAULT_DIALOG_CONTENT_CLASSNAME =
  "_dialog-content relative z-50 grid w-[calc(100%_-_1rem)] sm:w-full sm:max-w-lg text-mode-contrast border border-mode-accent bg-background p-6 shadow-lg duration-medium data-[state=open]:animate-dialog-enter data-[state=closed]:animate-dialog-exit data-[state=closed]:fade-out-0 rounded-lg outline-none ring-ring-color ring-offset-background focus-visible:ring focus-visible:ring-offset-offset"

const DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME =
  "_dialog-close absolute z-[1] right-4 top-4 size-8 px-0 py-0"

const DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME =
  "_dialog-close-button-icon h-4 w-4 opacity-70 min-w-fit min-h-fit"

export {
  DIALOG_OVERLAY_CLASSNAME,
  DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME,
  DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME,
  DEFAULT_DIALOG_TRIGGER_CLASSNAME,
  DFEAULT_DIALOG_CONTENT_CLASSNAME,
}
