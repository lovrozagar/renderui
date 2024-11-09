const DEFAULT_CHECKBOX_CLASSNAME =
	"_checkbox p-0.5 bg-transparent rounded-md min-w-0 h-fit w-fit aspect-square shrink-0 text-white data-[state=checked]:bg-primary data-[invalid=true]:data-[focus-visible=true]:ring-destructive"

const DEFAULT_CHECKBOX_INDICATOR_CLASSNAME =
	"_checkbox-indicator h-[0.85rem] w-[0.85rem] stroke-white stroke-[2.5]"

const DEFAULT_CHECKBOX_HIDDEN_INPUT_CLASSNAME = "_checkbox-hidden-input"

const DEFEAULT_MOTION_PROPS = {
	checked: {
		pathLength: 1,
		opacity: 1,
		transition: {
			duration: 0.2,
			delay: 0,
		},
	},
	unchecked: {
		pathLength: 0,
		opacity: 0,
		transition: {
			duration: 0,
			delay: 0,
		},
	},
} as const

const CHECKBOX_BUTTON_ROLE_TYPE_CONFIG = { role: "checkbox", type: "button" } as const

const CHECKBOX_INPUT_TYPE_CONFIG = { type: "checkbox" } as const

export {
	CHECKBOX_BUTTON_ROLE_TYPE_CONFIG,
	CHECKBOX_INPUT_TYPE_CONFIG,
	DEFAULT_CHECKBOX_CLASSNAME,
	DEFAULT_CHECKBOX_HIDDEN_INPUT_CLASSNAME,
	DEFAULT_CHECKBOX_INDICATOR_CLASSNAME,
	DEFEAULT_MOTION_PROPS,
}
