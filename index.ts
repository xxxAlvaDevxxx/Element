import { StyleDeclaration, Attribute, CallBack, nonBackfn } from "./types";

// #region Element $2
export class $2 {
  id: string;
  father: $2;
  tag: keyof HTMLElementTagNameMap;
  element: HTMLElement;
  children: Array<$2> = [];
  status = false;
  focus = false;
  style: StyleDeclaration;
  text: string;
  constructor(selector?: any){
    if (selector) this.setElement(selector)
  }
  setElement(selector:any) {
    const element = document.querySelector(selector)
    if (!element) throw Error("Element no found");
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
        this.children.splice(indiceAEliminar, 1);
      } else {
        throw Error("Child no found on array");
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
  setStyle(styleObj: StyleDeclaration) {
    this.style = styleObj;
    Object.keys(styleObj).forEach((styleKey: string) => {
      (this.element.style as StyleDeclaration)[styleKey] = styleObj[styleKey];
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
    this.element.innerText = text
    return this;
  }
  addText(text: string){
    return this.setText(this.text + " " + text)
  }
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
  firstChild() {
    return this.children[0];
  }
  removeAllChildren() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }
  removeAttr(attribute: string) {
    this.element.removeAttribute(attribute);
    return this;
  }
}

// #region Element $
export class $ extends $2 {
  constructor(tag: keyof HTMLElementTagNameMap, attributes: object) {
    super();
    this.create(tag);
    this.setAttributes(attributes);
  }
}
