import { $ } from "..";

export default class $img extends $ {
  constructor(src: string, alt: string, attributes: object = {}) {
    super("img", attributes);
    this.setAttributes({ src: src, alt: alt });
  }
}
