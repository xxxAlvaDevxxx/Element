class $ {
  component: HTMLElement|null;
  children: $[] = [];
  create(tag:keyof HTMLElementTagNameMap) {
    this.component = document.createElement(tag);
    return this;
  }
  father(father: $) {
    father.addChildren(this);
    return this;
  }
  fatherElement(father: HTMLElement) {
    if (!this.component) throw Error("component is null")
    father.appendChild(this.component);
    return this;
  }
  addChildren(...children: $[]) {
    children.forEach((child) => {
      if (!this.component) throw Error("component is null")
      if (!child.component) throw Error("child is null")
      this.component.appendChild(child.component);
      this.children.push(child);
    });
    return this;
  }
  addChild(child:$){
    if (!this.component) throw Error("component is null") 
    if (!child.component) throw Error("child is null")
    this.component.appendChild(child.component)
    this.children.push(child)
    return this
  }
  removeChildren(...children: $[]){
    children.forEach((child)=>{
      if (!this.component) throw Error("component is null")
      if (!child.component) throw Error("child is null")
      this.component.removeChild(child.component)
    })
  }
  createAndAppendFather(tag: keyof HTMLElementTagNameMap, father: $) {
    this.create(tag);
    this.father(father);
    return this;
  }
  setAttribute(name: string, value: string) {
    if (!this.component) throw Error("component is null")
    this.component.setAttribute(name, value);
    return this;
  }
  setAttributes(attributes:object) {
    if (typeof attributes != "object") throw Error("objects only");
    let arr = Object.entries(attributes);
    arr.forEach((arg) => {
      if (!this.component) throw Error("component is null")

      this.component.setAttribute(arg[0], arg[1]);
    });
    return this;
  }
  setClassNames(...classNames: string[]) {
    if (!this.component) throw Error("component is null")
    this.component.classList.add(...classNames);
    return this;
  }
  find(selector:keyof HTMLElementTagNameMap) {
    this.component = document.querySelector(selector)
    return this
  }
  findChildren(selector:string) {
    if (!this.component) throw Error("component is null")
    return this.component.querySelector(selector);
  }
  text(text: string) {
    if (!this.component) throw Error("component is null")
    this.component.appendChild(document.createTextNode(text));
    return this;
  }
  event(callback: (component: HTMLElement) => {}):$ {
    if (!this.component) throw Error("component is null")
    callback(this.component);
    return this;
  }
}

export class $2 extends ${
  constructor(create:keyof HTMLElementTagNameMap,attributes:object){
    super()
    this.create(create)
    this.setAttributes(attributes)
  }
}

export default $;