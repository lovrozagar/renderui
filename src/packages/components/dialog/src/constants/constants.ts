const DEFAULT_DIALOG_TRIGGER_CLASSNAME = "_dialog-trigger rounded"

const DFEAULT_DIALOG_CONTENT_CLASSNAME =
  "_dialog-content fixed left-[50%] top-[50%] z-50 grid w-[calc(100%_-_1rem)] sm:w-full sm:max-w-lg -translate-x-1/2 -translate-y-1/2 text-mode-contrast border border-mode-accent bg-background p-6 shadow-lg duration-medium data-[state=open]:animate-dialog-enter data-[state=closed]:animate-dialog-exit data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg outline-none ring-ring-color ring-offset-background focus-visible:ring-ring-width focus-visible:ring-offset-offset"

const DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME =
  "_dialog-close absolute z-[1] right-4 top-4 size-8 px-0 py-0"

const DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME =
  "_dialog-close-button-icon h-4 w-4 opacity-70 min-w-fit min-h-fit"

export {
  DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME,
  DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME,
  DEFAULT_DIALOG_TRIGGER_CLASSNAME,
  DFEAULT_DIALOG_CONTENT_CLASSNAME,
}
