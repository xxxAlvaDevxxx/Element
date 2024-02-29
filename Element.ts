interface Attribute {
  name: string;
  value: string;
}

export type HTMLInputTypeAttribute =
  | "number"
  | "search"
  | "button"
  | "time"
  | "image"
  | "text"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "month"
  | "password"
  | "radio"
  | "range"
  | (string & {});

export class $2 {
  father: $2;
  element: HTMLElement;
  children: Array<$2> = [];
  status = false;
  focus = false;
  setElement(element: HTMLElement) {
    this.element = element;
    return this;
  }
  create(tag: keyof HTMLElementTagNameMap) {
    this.element = document.createElement(tag);
    return this;
  }
  setFather(father: $2) {
    this.father = father;
    this.father.addChildren(this);
    return this;
  }
  /*     setFatherElement(father) {
      if (!this.element) throw Error("element is null");
      this.father = new $2().element = father;
      this.father.appendChild(this.element);
      return this;
    } */
  addChildren(...children: $2[]) {
    children.forEach((child) => {
      this.addChild(child);
    });
    return this;
  }
  addChild(child: $2) {
    if (!this.element) throw Error("element is null");
    if (!child.element) throw Error("child is null");
    child.father = this;
    this.element.appendChild(child.element);
    this.children.push(child);
    return this;
  }
  removeChildren(...children: $2[]) {
    children.forEach((child) => {
      if (!this.element) throw Error("element is null");
      if (!child.element) throw Error("child is null");
      this.element.removeChild(child.element);
    });
  }
  createAndAppendFather(tag: keyof HTMLElementTagNameMap, father: $2) {
    this.create(tag);
    this.father = father;
    return this;
  }
  setAttribute(attributes: Attribute) {
    if (!this.element) throw Error("element is null");
    this.element.setAttribute(attributes.name, attributes.value);
    return this;
  }
  setAttributes(attributes: object) {
    if (typeof attributes != "object") throw Error("objects only");
    let arr = Object.entries(attributes);
    arr.forEach((arg) => {
      if (!this.element) throw Error("element is null");

      this.setAttribute({ name: arg[0], value: arg[1] });
    });
    return this;
  }
  setClassNames(...classNames: string[]) {
    if (!this.element) throw Error("element is null");
    this.element.classList.add(...classNames);
    return this;
  }
  find(selector: any): $2 {
    this.element = document.querySelector(selector);
    if (!this.element) {
      return new $2();
    }
    return this;
  }
  findChildren(selector: any) {
    if (!this.element) throw Error("element is null");
    return this.element.querySelector(selector);
  }
  text(text: string) {
    if (!this.element) throw Error("element is null");
    this.element.appendChild(document.createTextNode(text));
    return this;
  }
  //event(event: any, callback: Function, backfn: Function) {
  event(
    {
      event,
      callback,
      backfn,
    }: { event: any; callback: Function; backfn: Function },
    back: boolean = false
  ) {
    this.element.addEventListener(event, (e) => {
      if (this.status && back) {
        this.status = false;
        return backfn();
      }
      this.status = true;
      return callback(e, this);
    });
    return this;
  }
  onClick(
    { callback, backfn }: { callback: Function; backfn: Function },
    back: boolean = false
  ) {
    return this.event({ event: "click", callback, backfn }, back);
  }
  onChange(
    { callback, backfn }: { callback: Function; backfn: Function },
    back: boolean = false
  ) {
    return this.event({ event: "change", callback, backfn }, back);
  }
  onSumit(
    { callback, backfn }: { callback: Function; backfn: Function },
    back: boolean = false
  ) {
    return this.event({ event: "submit", callback, backfn }, back);
  }
  onDblClick(
    { callback, backfn }: { callback: Function; backfn: Function },
    back: boolean = false
  ) {
    return this.event({ event: "dblclick", callback, backfn }, back);
  }
  onFocus(
    { callback, backfn }: { callback: Function; backfn: Function },
    back: boolean = false
  ) {
    return this.event({ event: "focus", callback, backfn }, back);
  }
  click() {
    this.element.click();
    return this;
  }
  /* onLoad(callback:Function){
    console.log(123);
    callback()
    return this
    //return this.event({event:'load',callback,backfn:()=>{}})
  } */
  firstChild() {
    return this.children[0];
  }
  removeAllChildren() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild); // Elimina el primer hijo del elemento padre repetidamente
    }
  }
}

export class $ extends $2 {
  constructor(tag: keyof HTMLElementTagNameMap, attributes: object) {
    super();
    this.create(tag);
    this.setAttributes(attributes);
  }
}

export class $Button extends $ {
  constructor(
    attributes: object,
    text: string,
    callback: Function,
    backfn: Function
  ) {
    super("button", attributes);
    this.text(text);
    this.onClick({ callback, backfn });
  }
}

export class $Input extends $ {
  type: any;
  name: string;
  value: any;
  constructor(
    {
      type,
      name,
      value,
    }: { type: HTMLInputTypeAttribute; name: string; value: any },
    list: string = "",
    readOnly: boolean = false
  ) {
    super("input", {
      type,
      name,
      value,
      list,
    });
    this.type = type;
    this.name = name;
    this.value = value;
    this.element as HTMLInputElement;
    if (type == "date" && value != "") this.element.valueAsDate = value;
    if (readOnly) {
      this.readOnly();
    }
  }
  readOnly() {
    this.element.readOnly = true;
    return this;
  }
}

export class $Select extends $ {
  name: string;
  value: any;
  constructor(
    {
      name,
      value,
    }: { name: string; value: any },
    readOnly: boolean = false
  ) {
    super("select", {
      name,
      value,
    });
    this.name = name;
    this.value = value;
    this.element as HTMLInputElement;
    if (readOnly) {
      this.readOnly();
    }
  }
  readOnly() {
    this.element.readOnly = true;
    return this;
  }
}

export class LabelAndInput extends $ {
  label: $2;
  input: $Input;
  constructor(
    {
      type,
      name,
      label,
      value,
    }: {
      type: HTMLInputTypeAttribute;
      name: string;
      label: string;
      value: any;
    },
    list: string = "",
    readOnly: boolean = false
  ) {
    super("div", {});

    this.label = new $("label", { for: name }).text(label);
    this.input = new $Input({ type, name, value }, list, readOnly);
    this.addChildren(this.label, this.input);
  }
  onChangeInput({
    callback,
    backfn,
  }: {
    callback: Function;
    backfn: Function;
  }) {
    this.input.onChange({ callback, backfn });
  }
  //valueToInput(value: any) {}
}

export class LabelAndSelect extends $ {
  label: $2;
  select: $Select;
  constructor(
    {
      name,
      label,
      value,
    }: {
      name: string;
      label: string;
      value: any;
    },
    readOnly: boolean = false
  ) {
    super("div", {});

    this.label = new $("label", { for: name }).text(label);
    this.select = new $Select({ name, value }, readOnly);
    this.addChildren(this.label, this.select);
  }
  onChangeSelect({
    callback,
    backfn,
  }: {
    callback: Function;
    backfn: Function;
  }) {
    this.select.onChange({ callback, backfn });
  }
  //valueToSelect(value: any) {}
}