import { $ } from "..";

export default class $img extends $ {
  constructor(src: string, attributes: object = {}) {
    super("img", attributes);
    this.setAttribute({ name: "src", value: src });
  }
}
