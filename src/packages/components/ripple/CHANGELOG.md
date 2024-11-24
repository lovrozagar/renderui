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
