import { initializeContext } from '@renderui/utils'

import type { TypeWriterContext } from '@/components/type-writer/types/type-writter-context'

const [TypeWritterProvider, useTypeWritterContext] = initializeContext<TypeWriterContext>({
	errorMessage: 'Components using typeWritter context must be wrapped in a <TypeWritter />.',
	providerName: 'TypeWritterProvider',
	hookName: 'useTypeWritterContext',
	name: 'TypeWritterContext',
})

export { TypeWritterProvider, useTypeWritterContext }
