import { $ } from "..";
import { $button } from "./button";
import { $h1, $h2, $h3, $h4, $h5, $h6 } from "./h";
import $input from "./input";
import $labelAndInput from "./labelAndInput";
import { $labelAndSelect } from "./labelAndSelect";
import $select from "./select";
import $option from "./option";
import $textarea from "./textarea";
import { $TagText } from "../types";

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

export class $p extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("p", attributes, text);
  }
}

export class $a extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("a", attributes, text);
  }
}

export class $datalist extends $ {
  constructor(attributes: object = {}) {
    super("datalist", attributes);
  }
  addOption(value: string) {
    this.addChild(new $option(value, { value: value }));
    return this
  }
  setOptions(...values: Array<string>) {
    values.forEach((value) => {
      this.addOption(value);
    });
    return this
  }
}

export class $nav extends $ {
  constructor(attributes: object = {}){
    super('nav', attributes);
  }
}

export class $ul extends $ {
  constructor(attributes: object = {}){
    super('ul', attributes);
  }
}

export class $li extends $ {
  constructor(attributes: object = {}){
    super('li', attributes);
  }
}

export class $ol extends $ {
  constructor(attributes: object = {}){
    super('ol', attributes);
  }
}

export class $img extends $ {
  constructor(src: string, attributes: object = {}) {
    super("img", attributes);
    this.setAttribute({ name: "src", value: src });
  }
}

export class $header extends $ {
  constructor(attributes: object = {}) {
    super("header", attributes);
  }
}

export class $footer extends $ {
  constructor(attributes: object = {}) {
    super("footer", attributes);
  }
}

export class $main extends $ {
  constructor(attributes: object = {}) {
    super("main", attributes);
  }
}
