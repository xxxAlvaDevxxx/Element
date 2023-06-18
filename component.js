class $ {
  component;
  childrenArr = [];
  constructor(tag, attributes) {
    this.create(tag);
    this.setAttributes(attributes);
  }
  create(tag) {
    this.component = document.createElement(tag);
    return this;
  }
  father(father) {
    father.children(this);
    return this;
  }
  fatherElement(father) {
    father.appendChild(this.component);
    return this;
  }
  children(...children) {
    children.forEach((child) => {
      this.component.appendChild(child.getComponent());
      this.childrenArr.push(child);
    });
    return this;
  }
  removeChildren(...children){
    children.forEach((child)=>{
      this.component.removeChild(child.getComponent())
    })
  }
  createAndAppendFather(tag, father) {
    this.create(tag);
    this.appendFather(father);
    return this;
  }
  setAttribute(name, value) {
    this.component.setAttribute(name, value);
    return this;
  }
  setAttributes(attributes) {
    if (typeof attributes != "object") return Error("objects only");
    let arr = Object.entries(attributes);
    arr.forEach((arg) => {
      this.component.setAttribute(arg[0], arg[1]);
    });
    return this;
  }
  setClassNames(...classNames) {
    this.component.classList.add(...classNames);
    return this;
  }
  find(selector) {
    return this.component.querySelector(selector);
  }
  getComponent() {
    return this.component;
  }
  text(text) {
    this.component.appendChild(document.createTextNode(text));
    return this;
  }
  event(callback) {
    callback(this.component);
    return this;
  }
}
