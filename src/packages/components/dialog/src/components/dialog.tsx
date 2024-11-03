"use client"

import { DialogClosePrimitive } from "./dialog-close-primitive"
import { DialogContent } from "./dialog-content"
import { DialogDescription } from "./dialog-description"
import { DialogFooter } from "./dialog-footer"
import { DialogHeader } from "./dialog-header"
import { DialogRoot } from "./dialog-root"
import { DialogTitle } from "./dialog-title"
import { DialogTrigger } from "./dialog-trigger"
import { DialogTriggerPrimitive } from "./dialog-trigger-primitive"

const Dialog = () => null

Dialog.Root = DialogRoot
Dialog.Trigger = DialogTrigger
Dialog.TriggerPrimitive = DialogTriggerPrimitive
Dialog.Content = DialogContent
Dialog.ClosePrimitive = DialogClosePrimitive
Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
Dialog.Description = DialogDescription
Dialog.Footer = DialogFooter

export { Dialog }
