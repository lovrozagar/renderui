import type React from "react"

import type { PrimitiveProps } from "../types/primitive"
import { Primitive } from "./primitive"

const createRenderComponent = <T extends keyof React.JSX.IntrinsicElements>(tag: T) => {
  return (props: PrimitiveProps<T>) => <Primitive as={tag} {...props} />
}

const r = () => null

r.div = createRenderComponent("div")
r.span = createRenderComponent("span")
r.button = createRenderComponent("button")
r.ul = createRenderComponent("ul")
r.li = createRenderComponent("li")
r.p = createRenderComponent("p")
r.a = createRenderComponent("a")
r.h1 = createRenderComponent("h1")
r.h2 = createRenderComponent("h2")
r.h3 = createRenderComponent("h3")
r.h4 = createRenderComponent("h4")
r.h5 = createRenderComponent("h5")
r.h6 = createRenderComponent("h6")
r.img = createRenderComponent("img")
r.form = createRenderComponent("form")
r.input = createRenderComponent("input")
r.textarea = createRenderComponent("textarea")
r.select = createRenderComponent("select")
r.option = createRenderComponent("option")
r.label = createRenderComponent("label")
r.section = createRenderComponent("section")
r.article = createRenderComponent("article")
r.header = createRenderComponent("header")
r.main = createRenderComponent("main")
r.footer = createRenderComponent("footer")
r.nav = createRenderComponent("nav")
r.aside = createRenderComponent("aside")

export { r }
