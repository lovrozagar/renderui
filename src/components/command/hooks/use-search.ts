'use client'

import { ZERO } from '@renderui/constants'
import { useMutationObserver } from '@renderui/hooks'
import React from 'react'

import {
  COMMAND_ATTRIBUTE,
  COMMAND_ITEM_CLASSNAME_SELECTOR,
  RADIX_FOCUS_GUARD_ATTRUBUTE,
  SEARCH_OBSERVER_OPTIONS,
  SEARCH_PAUSE_DURATION,
} from '@/components/command/constants/constants'
import { useCommandContext } from '@/components/command/contexts/command-context'
import { lowercaseBinarySearch } from '@/components/command/utils/lowercase-binary-search'

function useSearch(value: string, setValue: React.Dispatch<React.SetStateAction<string>>) {
  const dataValueMapRef = React.useRef<Map<string, string>>(new Map())
  const dataValueArrayRef = React.useRef<string[]>([])
  const timeoutIdRef = React.useRef<NodeJS.Timeout | null>(null)
  const previousSuccesfulSearchRef = React.useRef<string>('')
  const shouldStartClearOnNextInputRef = React.useRef<boolean>(false)

  const { type, setValue: setRootValue } = useCommandContext()

  const htmlDocument = typeof document !== 'undefined' ? document : null

  const storeCommandItems = React.useCallback(() => {
    /* check if the focus guard exists and the command root exists */
    const focusGuardExists = htmlDocument?.querySelector(RADIX_FOCUS_GUARD_ATTRUBUTE) !== null
    const cmdkRoot = htmlDocument?.querySelector(COMMAND_ATTRIBUTE)

    if (!focusGuardExists || !cmdkRoot) return

    /* find all command popover items in the DOM */
    const commandItems = cmdkRoot.querySelectorAll(COMMAND_ITEM_CLASSNAME_SELECTOR)
    const newDataValueMap = new Map<string, string>()
    const newDataValueArray: string[] = []

    commandItems.forEach((item) => {
      if (!(item instanceof HTMLElement)) return

      const dataValue = item.dataset.label || ''

      newDataValueMap.set(dataValue, dataValue)
      newDataValueArray.push(dataValue)
    })

    /* set map of found items */
    dataValueMapRef.current = newDataValueMap

    /* set sorted array of found items, will be binary searched */
    dataValueArrayRef.current = newDataValueArray.sort((a: string, b: string) =>
      a.toLowerCase().localeCompare(b.toLowerCase()),
    )
  }, [])

  useMutationObserver(
    htmlDocument?.documentElement ?? null,
    storeCommandItems,
    SEARCH_OBSERVER_OPTIONS,
  )

  React.useEffect(() => {
    setTimeout(storeCommandItems, ZERO)
  }, [storeCommandItems])

  const handleValueChangeWithSearch = (searchValue: string) => {
    /* initial check */
    if (!setValue) return

    let currentSearchValue = searchValue

    setValue(currentSearchValue)

    /* clear previous search reset timeout */
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    /* add new search reset timeout */
    timeoutIdRef.current = setTimeout(() => {
      shouldStartClearOnNextInputRef.current = true
    }, SEARCH_PAUSE_DURATION)

    /* if input was truthy but cleared, do not change root value, stay on current item */
    if (currentSearchValue?.trim() === '') return

    /* if enough time passed, shave the previous string from the current string */
    if (shouldStartClearOnNextInputRef.current && value) {
      currentSearchValue = searchValue.startsWith(value)
        ? searchValue.slice(value.length)
        : searchValue
      shouldStartClearOnNextInputRef.current = false
    }

    /* set new input value, after input manipulation */
    setValue(currentSearchValue)

    /* check for exact match first with map */
    if (dataValueMapRef.current.has(currentSearchValue)) {
      setRootValue(currentSearchValue)

      return
    }

    /* check for label that starts with input using lowercase binary search */
    const startingLabelElement = lowercaseBinarySearch(
      dataValueArrayRef.current,
      currentSearchValue,
    )

    if (startingLabelElement) {
      setRootValue(startingLabelElement)
      previousSuccesfulSearchRef.current = startingLabelElement
    }
  }

  return { type, handleValueChangeWithSearch }
}

export { useSearch }
