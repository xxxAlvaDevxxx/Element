import { $TagText, Target } from "../types";

export default class $a extends $TagText {
  element: HTMLAnchorElement;
  constructor(text: string, href: string = "", alt: string="", target: Target = "", attributes: object = {}) {
    super("a", attributes, text);
    if (href) this.setAttribute({name:'href', value: href})
    if (alt) this.setAttribute({name:'alt', value: alt})
    if (target) this.setAttribute({name:'target', value: target})
  }
}