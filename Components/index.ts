import { $ } from "..";

export function $Divider() {
  return new $("span", { class: "divider" });
}

export class $article extends $ {
  constructor(attributes: object = {}) {
    super("article", attributes);
  }
}
