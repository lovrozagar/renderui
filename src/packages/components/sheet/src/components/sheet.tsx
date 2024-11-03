import { SheetClosePrimitive } from "./sheet-close-primitive"
import { SheetContent } from "./sheet-content"
import { SheetDescription } from "./sheet-description"
import { SheetFooter } from "./sheet-footer"
import { SheetHeader } from "./sheet-header"
import { SheetRoot } from "./sheet-root"
import { SheetTitle } from "./sheet-title"
import { SheetTrigger } from "./sheet-trigger"
import { SheetTriggerPrimitive } from "./sheet-trigger-primitive"

const Sheet = () => null

Sheet.Root = SheetRoot
Sheet.Trigger = SheetTrigger
Sheet.TriggerPrimitive = SheetTriggerPrimitive
Sheet.Content = SheetContent
Sheet.ClosePrimitive = SheetClosePrimitive
Sheet.Header = SheetHeader
Sheet.Title = SheetTitle
Sheet.Description = SheetDescription
Sheet.Footer = SheetFooter

export { Sheet }
