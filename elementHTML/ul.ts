import { $ } from "..";
import $a from "./a";
import $li from "./li";

export default class $ul extends $ {
  constructor(attributes: object = {}) {
    super("ul", attributes);
  }
  addChilToList(text: string) {
    const child = new $li().setText(text);
    this.addChild(child);
    return this;
  } 
  addChildrenToList(...texts: string[]) {
    texts.forEach((text) => {
      this.addChilToList(text);
    });
    return this;
  }
  addLink(link: string, text: string) {
    this.addChild(new $li().addChild(new $a(text, link)));
    return this
  }
  addLinks(links: {text:string, link:string}[]) {
    links.forEach(link => {
      this.addLink(link.link,link.text)
    });
    return this
  }
}
