class $ {
  component: HTMLElement;
  childrenArr: $[];
  constructor(tag:keyof HTMLElementTagNameMap, attributes:object) {
    this.create(tag);
    this.setAttributes(attributes);
  }
  create(tag:keyof HTMLElementTagNameMap) {
    this.component = document.createElement(tag);
    return this;
  }
  father(father: $) {
    father.children(this);
    return this;
  }
  fatherElement(father: HTMLElement) {
    father.appendChild(this.component);
    return this;
  }
  children(...children: $[]) {
    children.forEach((child) => {
      this.component.appendChild(child.getComponent());
      this.childrenArr.push(child);
    });
    return this;
  }
  removeChildren(...children: $[]){
    children.forEach((child)=>{
      this.component.removeChild(child.getComponent())
    })
  }
  createAndAppendFather(tag: keyof HTMLElementTagNameMap, father: $) {
    this.create(tag);
    this.father(father);
    return this;
  }
  setAttribute(name: string, value: string) {
    this.component.setAttribute(name, value);
    return this;
  }
  setAttributes(attributes:object) {
    if (typeof attributes != "object") return Error("objects only");
    let arr = Object.entries(attributes);
    arr.forEach((arg) => {
      this.component.setAttribute(arg[0], arg[1]);
    });
    return this;
  }
  setClassNames(...classNames: string[]) {
    this.component.classList.add(...classNames);
    return this;
  }
  find(selector) {
    this.component = document.querySelector(selector)
    return this
  }
  findChildren(selector) {
    return this.component.querySelector(selector);
  }
  getComponent() {
    return this.component;
  }
  text(text: string) {
    this.component.appendChild(document.createTextNode(text));
    return this;
  }
  event(callback: (component: HTMLElement) => {}):$ {
    callback(this.component);
    return this;
  }
}