class Component {
    component
    create(tag) {
        this.component = document.createElement(tag)
        return this
    }
    appendFather(father, isComponent = true) {
        if (isComponent) {
            father.appendChildren(this)
        } else {
            father.appendChild(this.component)
        }
        return this
    }
    appendChildren(...children) {
        children.forEach(child => {
            this.component.appendChild(child.getComponent())
        })
        return this
    }
    createAndAppendFather(tag, father, isComponent) {
        this.create(tag)
        this.appendFather(father, isComponent)
        return this
    }
    setAttribute(name, value) {
        this.component.setAttribute(name, value)
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
};