export type Attribute = {
  name: string;
  value: string;
};

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

export type styleDeclaration = Partial<CSSStyleDeclaration> & {
  [propName: string]: string;
};

export type CallBack = (ctx: $2, e: any) => void;
export type nonBackfn = () => void;

export class $2 {
  id: string;
  father: $2;
  tag: keyof HTMLElementTagNameMap;
  element: HTMLElement;
  children: Array<$2> = [];
  status = false;
  focus = false;
  style: styleDeclaration;
  text: string;
  setElement(element: HTMLElement) {
    this.element = element;
    return this;
  }
  create(tag: keyof HTMLElementTagNameMap) {
    this.tag = tag;
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
      const indiceAEliminar = this.children.findIndex(
        (_child) => _child == child
      );
      if (indiceAEliminar !== -1) {
        // Eliminar el número del array
        this.children.splice(indiceAEliminar, 1);
      } else {
        throw Error("El hijo no está en el array.");
      }
    });
    return this;
  }
  removeLastChildren() {
    this.removeChildren(this.children[this.children.length - 1]);
    return this;
  }
  createAndAppendFather(tag: keyof HTMLElementTagNameMap, father: $2) {
    this.create(tag);
    this.father = father;
    return this;
  }
  setAttribute(attributes: Attribute) {
    if (!this.element) throw Error("element is null");
    if (attributes.name == "id") this.id = attributes.value;
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
  setStyle(styleObj: styleDeclaration) {
    this.style = styleObj;
    // Asigna las propiedades al elemento DOM
    Object.keys(styleObj).forEach((styleKey: string) => {
      (this.element.style as styleDeclaration)[styleKey] = styleObj[styleKey];
    });
    return this;
  }
  setClassNames(...classNames: string[]) {
    if (!this.element) throw Error("element is null");
    this.element.classList.add(...classNames);
    return this;
  }
  include($2: $2) {
    let index = this.children.findIndex((_child) => _child == $2);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  }
  findAndSetElement(selector: any): $2 {
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
  setText(text: string) {
    if (!this.element) throw Error("element is null");
    this.text = text;
    this.element.appendChild(document.createTextNode(text));
    return this;
  }
  //event(event: any, callBack: CallBack, backfn: CallBack | nonBackfn) {
  event(
    {
      event,
      callBack,
      backfn,
    }: {
      event: keyof HTMLElementEventMap;
      callBack: CallBack;
      backfn: CallBack | nonBackfn;
    },
    back: boolean = false
  ) {
    this.element.addEventListener(event, (e) => {
      if (!e) return;
      if (this.status && back) {
        this.status = false;
        return backfn(this, e);
      }
      this.status = true;
      return callBack(this, e);
    });
    return this;
  }
  onClick(
    { callBack, backfn }: { callBack: CallBack; backfn: CallBack | nonBackfn },
    back: boolean = false
  ) {
    return this.event({ event: "click", callBack, backfn }, back);
  }
  onChange(
    { callBack, backfn }: { callBack: CallBack; backfn: CallBack | nonBackfn },
    back: boolean = false
  ) {
    return this.event({ event: "change", callBack, backfn }, back);
  }
  onSumit(
    { callBack, backfn }: { callBack: CallBack; backfn: CallBack | nonBackfn },
    back: boolean = false
  ) {
    return this.event({ event: "submit", callBack, backfn }, back);
  }
  onDblClick(
    { callBack, backfn }: { callBack: CallBack; backfn: CallBack | nonBackfn },
    back: boolean = false
  ) {
    return this.event({ event: "dblclick", callBack, backfn }, back);
  }
  onFocus(
    { callBack, backfn }: { callBack: CallBack; backfn: CallBack | nonBackfn },
    back: boolean = false
  ) {
    return this.event({ event: "focus", callBack, backfn }, back);
  }
  click() {
    this.element.click();
    return this;
  }
  /* onLoad(callBack:CallBack){
    console.log(123);
    return this
    //return this.event({event:'load',CallBack,backfn:()=>{}})
  } */
  firstChild() {
    return this.children[0];
  }
  removeAllChildren() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild); // Elimina el primer hijo del elemento padre repetidamente
    }
  }
  removeAttr(attribute: string) {
    this.element.removeAttribute(attribute);
    return this;
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
    callBack: CallBack,
    backfn: CallBack | nonBackfn,
    back: boolean = false
  ) {
    super("button", attributes);
    this.setText(text);
    this.onClick({ callBack, backfn }, back);
  }
}

export class $Input extends $ {
  type: HTMLInputTypeAttribute;
  name: string;
  value: any;
  placeholder: string | undefined;
  constructor(
    {
      type,
      name,
      value,
      placeholder,
      readonly,
    }: {
      type: HTMLInputTypeAttribute;
      name: string;
      value?: any;
      placeholder?: string;
      readonly?: boolean;
    },
    list: string = ""
  ) {
    super("input", {
      type,
      name,
      list,
    });
    this.type = type;
    this.name = name;
    this.value = value;
    this.placeholder = placeholder;
    if (typeof placeholder == "string")
      this.element.setAttribute("placeholder", placeholder);
    if (typeof value == "string") this.setValue(value);
    if (type == "date" && value != "") {
      let element = this.element as HTMLInputElement;
      element.valueAsDate = value;
    }
    if (typeof readonly == "boolean") {
      this.readOnly();
    }
    this.onChange({
      callBack(ctx, e) {
        let _ctx = ctx as $Input;
        const { value } = e.target as HTMLInputElement;
        _ctx.value = value;
      },
      backfn() {},
    });
  }
  setValue(value: string) {
    this.value = value;
    this.element.setAttribute("value", value);
    return this;
  }
  readOnly() {
    let element = this.element as HTMLInputElement;
    element.readOnly = true;
    return this;
  }
}

export class $Select extends $ {
  name: string;
  value: any;
  constructor(
    { name, value }: { name: string; value: any },
    readOnly: boolean = false
  ) {
    super("select", {
      name,
      value,
    });
    this.name = name;
    this.value = value;
    if (readOnly) {
      this.readOnly();
    }
  }
  readOnly() {
    let element = this.element as HTMLInputElement;
    element.readOnly = true;
    return this;
  }
}

export class $LabelAndInput extends $ {
  label: $2;
  input: $Input;
  constructor(
    {
      type,
      name,
      label,
      value,
      readonly,
    }: {
      type: HTMLInputTypeAttribute;
      name: string;
      label: string;
      value?: any;
      readonly?: boolean;
    },
    list: string = ""
  ) {
    super("div", { id: `container${name}` });
    if (value == undefined) value = "";

    this.label = new $("label", { for: name }).setText(label);
    this.input = new $Input(
      { type, name, value, placeholder: "", readonly },
      list
    );
    this.addChildren(this.label, this.input);
  }
  onChangeInput({
    callBack,
    backfn,
  }: {
    callBack: CallBack;
    backfn: CallBack | nonBackfn;
  },back?:boolean) {
    this.input.onChange({ callBack, backfn },back);
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

    this.label = new $("label", { for: name }).setText(label);
    this.select = new $Select({ name, value }, readOnly);
    this.addChildren(this.label, this.select);
  }
  onChangeSelect({
    callBack,
    backfn,
  }: {
    callBack: CallBack;
    backfn: CallBack | nonBackfn;
  }) {
    this.select.onChange({ callBack, backfn });
  }
  //valueToSelect(value: any) {}
}
