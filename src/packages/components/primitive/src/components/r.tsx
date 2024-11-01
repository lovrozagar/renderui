import type React from "react"

import type { PrimitiveProps } from "../types/primitive"
import { Primitive } from "./primitive"

const createRenderComponent = <T extends keyof React.JSX.IntrinsicElements>(tag: T) => {
  return (props: PrimitiveProps<T>) => <Primitive as={tag} {...props} />
}

const R = () => null

R.div = createRenderComponent("div")
R.span = createRenderComponent("span")
R.button = createRenderComponent("button")
R.ul = createRenderComponent("ul")
R.li = createRenderComponent("li")
R.p = createRenderComponent("p")
R.a = createRenderComponent("a")
R.h1 = createRenderComponent("h1")
R.h2 = createRenderComponent("h2")
R.h3 = createRenderComponent("h3")
R.h4 = createRenderComponent("h4")
R.h5 = createRenderComponent("h5")
R.h6 = createRenderComponent("h6")
R.img = createRenderComponent("img")
R.form = createRenderComponent("form")
R.input = createRenderComponent("input")
R.textarea = createRenderComponent("textarea")
R.select = createRenderComponent("select")
R.option = createRenderComponent("option")
R.label = createRenderComponent("label")
R.section = createRenderComponent("section")
R.article = createRenderComponent("article")
R.header = createRenderComponent("header")
R.main = createRenderComponent("main")
R.footer = createRenderComponent("footer")
R.nav = createRenderComponent("nav")
R.aside = createRenderComponent("aside")

export { R }
