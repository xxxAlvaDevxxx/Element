import { $ } from "..";
import { $button } from "./button";
import { $h1, $h2, $h3, $h4, $h5, $h6 } from "./h";
import $input from "./input";
import $labelAndInput from "./labelAndInput";
import { $labelAndSelect } from "./labelAndSelect";
import $select from "./select";
import $option from "./option";
import $textarea from "./textarea";

export {
  $button,
  $input,
  $textarea,
  $select,
  $option,
  $labelAndInput,
  $labelAndSelect,
};

//#region $divider
export function $divider() {
  return new $("span", { class: "divider" });
}

//#region $article
export class $article extends $ {
  constructor(attributes: object = {}) {
    super("article", attributes);
  }
}

//#region $section
export class $section extends $ {
  constructor(attributes: object = {}) {
    super("section", attributes);
  }
}

export { $h1, $h2, $h3, $h4, $h5, $h6 };

//#region $divs
export class $div extends $ {
  constructor(attributes: object = {}) {
    super("div", attributes);
  }
}
