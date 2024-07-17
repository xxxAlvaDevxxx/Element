import { $, $2 } from "..";
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
}
