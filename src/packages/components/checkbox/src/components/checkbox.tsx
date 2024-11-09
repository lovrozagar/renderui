"use client"

import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { Button } from "@renderui/button"
import { chain, cn, cx, getOptionalObject } from "@renderui/utils"
import type React from "react"
import {
  DEFAULT_CHECKBOX_CLASSNAME,
  DEFAULT_CHECKBOX_HIDDEN_INPUT_CLASSNAME,
} from "../constants/constants"
import type { CheckboxProps } from "../types/checkbox"
import { CheckboxIndicator } from "./checkbox-indicator"

const Checkbox = (props: CheckboxProps) => {
  const {
    inputProps,
    name,
    className,
    defaultChecked,
    isChecked: checkedProp,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    startContent,
    endContent,
    children,
    animationDuration,
    indicatorProps,
    onCheckedChange,
    onPress,
    hasRipple = false,
    hasIconContentWhenUnchecked = true,
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
    tabIndex = -1,
    ...restInputProps
  } = getOptionalObject(inputProps)

  const internalContent = (
    <>
      <CheckboxIndicator
        isChecked={checked}
        animationDuration={animationDuration}
        hasIconContentWhenUnchecked={hasIconContentWhenUnchecked}
        {...(typeof indicatorProps === "function"
          ? indicatorProps({ isChecked: checked })
          : indicatorProps)}
      />
      <span className="sr-only">
        <input
          type="checkbox"
          tabIndex={tabIndex}
          name={name ?? inputName}
          className={cn(DEFAULT_CHECKBOX_HIDDEN_INPUT_CLASSNAME, inputClassName)}
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
      /* biome-ignore lint/a11y/useSemanticElements: using button as a primitive for checkbox */
      role="checkbox"
      variant="outline"
      value={checked ? "on" : "off"}
      aria-checked={checked}
      aria-disabled={isDisabled}
      aria-readonly={isReadOnly}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      data-slot="base"
      data-state={checked ? "checked" : "unchecked"}
      data-disabled={isDisabled}
      data-readonly={isReadOnly}
      data-invalid={isInvalid}
      data-required={isRequired}
      hasRipple={hasRipple}
      className={cx(DEFAULT_CHECKBOX_CLASSNAME, className)}
      startContent={
        typeof startContent === "function"
          ? ({ loaderProps: _, ...restProps }) => startContent({ ...restProps, isChecked: checked })
          : startContent
      }
      endContent={
        typeof endContent === "function"
          ? ({ loaderProps: _, ...restProps }) => endContent({ ...restProps, isChecked: checked })
          : endContent
      }
      onPress={chain(() => setChecked((previousChecked) => !previousChecked), onPress)}
      {...restProps}
    >
      {typeof children === "function" ? (
        ({ loaderProps: _, ...restProps }) => (
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

export { Checkbox }
