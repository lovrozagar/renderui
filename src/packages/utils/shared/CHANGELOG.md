# @renderui/utils

## 0.2.4

### Patch changes

- Refactor and export shared utility functions

## 0.2.5

### Patch changes

- Add getOptionalObject and mergeProps utility functions

## 0.2.6

### Patch changes

- Add color & simplify types

## 0.2.7

### Patch changes

- Add render prop utility, used to return a node or call a function with it's arguments which returns a node
- Add exclusive union type

## 0.2.8

### Patch changes

- Fix package.json default export order

## 0.2.9

### Patch changes

- Remove cva as dependency
- Add clsx as dependency

## 0.3.0

### Patch changes

- Revert: remove clsx dependency, add cva dependency
- Module resolution: bunlder - allows for typings of cva to work in consumer packages

## 0.3.1

### Patch changes

- Export ClassNameProps type

## 0.3.2

### Patch changes

- Added initialize context helper

## 0.3.3

### Patch changes

- Removed initializeContext utility
- Removed composeEventHandlers
- Instead use @radix-ui/react-context & @radix-ui/react-compose-event-handlers

# 1.0.0

- Exported ClassValue type
- Renamed getOptionalObject to optional

# 1.0.1

- Removed mergeProps utility
- Refactored VariantProps type to not allow null values