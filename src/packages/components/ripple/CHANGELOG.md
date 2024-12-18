# @renderui/ripple

## 1.0.0

### Patch changes

- Added ripple component

## 1.0.1

### Patch changes

- Fixed package.json default export order

## 1.0.2

### Patch changes

- Fixed keyboard press not activating ripple
- Fixed ripple duration calculation on ripple created by pointer press

## 1.0.3

### Patch changes

- Change className prop type to ClassValue instead of string

## 1.0.4

### Patch changes

- Keyboard ripple update
- Refactored to use renderui deps instead of peer deps

## 1.0.5

### Patch changes

- Memoized ripple parent element used for keyboard ripple

## 1.0.6

### Patch changes

- Fixed keyboard ripple not firing on enter press

## 1.0.7

### Patch changes

- Refactored Ripple, droped framer-motion as a peer dependency, animation now css only
- Support for type wrapper & item
- Remove observers, activate only by handlers

## 1.0.8

### Patch changes

- Fixed infinite ripple creation on Enter/Spacebar hold
- Fixed issue where non matching (onKeyDown and onKeyUp) events were merged
- Added isDisabled prop
- startingOpacity prop renamed to itemOpacity

## 1.0.9

### Patch changes

- Fixed default export to be the last one

## 1.1.0

### Patch changes

- Add classNames prop

## 1.1.1

### Patch changes

- Renamed ripple slot props
- Changed utils to a peer dependency