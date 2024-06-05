import { $, $2 } from "..";
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
    return this;
  }
  setOptions(...values: Array<string>) {
    values.forEach((value) => {
      this.addOption(value);
    });
    return this;
  }
}

export class $nav extends $ {
  constructor(attributes: object = {}) {
    super("nav", attributes);
  }
}

export class $ul extends $ {
  constructor(attributes: object = {}) {
    super("ul", attributes);
  }
}

export class $li extends $ {
  constructor(attributes: object = {}) {
    super("li", attributes);
  }
}

export class $ol extends $ {
  constructor(attributes: object = {}) {
    super("ol", attributes);
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

export class $windowBuffer extends $article {
  $btnBuffer: $button;
  constructor(nameBuffer: string, window: $2) {
    super();
    this.$btnBuffer = new $button(nameBuffer, (ctx) => {
      // rise to buffer
      let $buffer = ctx.father.father.father as $buffer;
      // take to viewer
      let $viewer = $buffer.viewer;
      // confirm if there is a displayed window
      // if so, set false status and then remove all children of the viewer
      if ($viewer.children[0]) $viewer.children[0].status = false;
      $viewer.removeAllChildren();
      // display the window that was selected
      $viewer.addChild(window);
      this.status = true;
    }).setStyle({ width: "100%" /* , padding: "0 1em"  */ });
    this.setStyle({ display: "grid" });
    this.addChild(this.$btnBuffer);
  }
}

export class $windowList extends $section {
  // button to create a new button to access the window
  constructor(...windowsBuffer: Array<$windowBuffer>) {
    super({ id: "windowListBuffer" });
    this.setStyle({
      /* backgroundColor: "#fff7", */
      display: "flex",
      position: "fixed",
      bottom: "0",
      height: "5%",
      width: "100%",
      gap: "0.15em",
    });
    windowsBuffer.forEach((_window) => this.addChild(_window));
  }
}

export class $buffer extends $article {
  $windowList: $windowList;
  /* The buffer will be composed of: 
    - container that is the buffer class itself 
    - list of windows 
    - a button to add a new window 
    - selected window display 
  */
  // this is the part that contains the window that is displayed
  viewer = new $section({ id: "viewerBuffer" }).setStyle({
    display: "flex",
    justifyContent: "center",
  });
  constructor(windowList: $windowList) {
    // create the container of the entire buffer as such
    super({ id: "buffer" });
    this.$windowList = windowList;
    this.setStyle({
      width: "100%",
      height: "100vh",
      display: "grid",
      alignContent: "center",
    });
    // this is the part that contains the window that is displayed
    this.addChildren(this.viewer, this.$windowList);
  }
}
