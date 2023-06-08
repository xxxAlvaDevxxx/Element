class Component {
    component
    create(tag) {
        this.component = document.createElement(tag)
        return this
    }
    appendFather(father) {
        father.appendChildren(this)
        return this
    }
    appendFatherElement(father){
        father.appendChild(this.component)
    }
    appendChildren(...children) {
        children.forEach(child => {
            this.component.appendChild(child.getComponent())
        })
        return this
    }
    createAndAppendFather(tag, father) {
        this.create(tag)
        this.appendFather(father)
        return this
    }
    setAttribute(name, value) {
        this.component.setAttribute(name, value)
        return this
    }
    setAttributes(attributes){
        if (typeof attributes != "object") return Error("objects only");
        let arr = Object.entries(attributes);
        arr.forEach(arg=>{
            this.component.setAttribute(arg[0],arg[1])
        })
        return this
    }
    setClassNames(...classNames) {
        this.component.classList.add(...classNames)
        return this
    }
    find(selector) {
        return this.component.querySelector(selector)
    }
    getComponent() {
        return this.component
    }
    addTextNode(text) {
        this.component.appendChild(document.createTextNode(text))
        return this
    }
    event(callback) {
        callback(this.component)
        return this
    }
};
