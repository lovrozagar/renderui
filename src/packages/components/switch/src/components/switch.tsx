"use client"

import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { Button } from "@renderui/button"
import { chain, cn, cx, optional } from "@renderui/utils"
import type React from "react"
import {
  DEFAULT_HIDDEN_SWITCH_INPUT_CLASSNAME,
  DEFAULT_SWITCH_CLASSNAME,
} from "../constants/constants"
import type { SwitchProps } from "../types/switch"
import { SwitchThumb } from "./switch-thumb"

const Switch = (props: SwitchProps) => {
  const {
    inputProps,
    name,
    className,
    defaultChecked,
    isChecked: checkedProp,
    isDisabled,
    isReadOnly,
    isInvalid,
    isRequired,
    startContent,
    endContent,
    children,
    thumbProps,
    onPress,
    onCheckedChange,
    role = "switch",
    variant = "plain",
    hasRipple = false,
    hasDefaultPressedStyles = false,
    ...restProps
  } = props

  const [checked = false, setChecked] = useControllableState<boolean>({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  })

  const {
    name: inputName,
    value: inputValue,
    className: inputClassName,
    checked: inputChecked,
    onChange,
    ...restInputProps
  } = optional(inputProps)

  const internalContent = (
    <>
      <SwitchThumb
        {...(typeof thumbProps === "function" ? thumbProps({ isChecked: checked }) : thumbProps)}
      />
      <span className="sr-only">
        <input
          data-slot="switch-input"
          tabIndex={-1}
          name={name ?? inputName}
          className={cn(DEFAULT_HIDDEN_SWITCH_INPUT_CLASSNAME, inputClassName)}
          value={(inputValue ?? checked) ? "true" : "false"}
          checked={inputChecked ?? checked}
          onChange={chain(
            (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked),
            onChange,
          )}
          {...restInputProps}
        />
      </span>
    </>
  )

  return (
    <Button
      role={role}
      variant={variant}
      value={checked ? "on" : "off"}
      aria-checked={checked}
      aria-disabled={isDisabled}
      aria-readonly={isReadOnly}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      data-slot="switch"
      data-state={checked ? "checked" : "unchecked"}
      data-disabled={isDisabled}
      data-readonly={isReadOnly}
      data-invalid={isInvalid}
      data-required={isRequired}
      hasRipple={hasRipple}
      hasDefaultPressedStyles={hasDefaultPressedStyles}
      className={cx(DEFAULT_SWITCH_CLASSNAME, className)}
      startContent={
        typeof startContent === "function"
          ? ({ isPressed }) => startContent({ isPressed, isChecked: checked })
          : startContent
      }
      endContent={
        typeof endContent === "function"
          ? ({ isPressed }) => endContent({ isPressed, isChecked: checked })
          : endContent
      }
      onPress={chain(() => setChecked((previousChecked) => !previousChecked), onPress)}
      {...restProps}
    >
      {typeof children === "function" ? (
        ({ ...restProps }) => (
          <>
            {children({ ...restProps, isChecked: checked })}
            {internalContent}
          </>
        )
      ) : (
        <>
          {children}
          {internalContent}
        </>
      )}
    </Button>
  )
}

export { Switch }
