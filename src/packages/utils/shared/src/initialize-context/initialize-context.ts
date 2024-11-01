import { type Provider, createContext, useContext as useReactContext } from "react"

type InitializeContextProps<T, S extends boolean = true> = {
  name: string
  defaultValue?: T
  strict?: S
}

function getErrorMessage(name: string) {
  return `The use${name}Context hook returned \`undefined\`. Make sure your component is wrapped in a ${name}Provider.`
}

function initializeContext<T, S extends boolean = true>(props: InitializeContextProps<T, S>) {
  const { name, defaultValue, strict } = props

  const Context = createContext<T | undefined>(defaultValue)
  Context.displayName = `${name}Context`

  const useInitializedContext = () => {
    const context = useReactContext(Context)

    if (context === undefined && strict) {
      const error = new Error(getErrorMessage(name))
      error.name = "ContextError"

      if ("captureStackTrace" in Error && typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(error, useInitializedContext)
      }

      throw error
    }

    return context as S extends true ? T : T | undefined
  }

  return [
    Context.Provider as Provider<S extends true ? T : T | undefined>,
    useInitializedContext,
  ] as const
}

export { initializeContext, type InitializeContextProps }
