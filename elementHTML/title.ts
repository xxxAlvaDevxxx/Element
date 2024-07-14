import { $ } from "..";

export default class $title extends $ {
  constructor(text: string, attributes: object = {}) {
    super("title", attributes);
    this.setText(text)
  }
}
