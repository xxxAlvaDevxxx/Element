# Element

Element is a light library that will help you develop web applications.

This library is focused on creating components. You will not have DOM rendering and you will only have a compilation of the code to pass it to javascript.

## Installation

    npm install xxx-element

## Examples

A simple example of `Element` utility would be something like this:

### Vanilla
```typescript
const HelloWorld = document.createElement('h1')

HelloWorld.id = 'helloWorld'

const text = document.createTextNode('Hello World')

HelloWorld.appendChild(text)

const App = document.createElement('article')

App.id = 'App'

App.appendChild(HelloWorld)

const root = document.getElementById("container")

root?.appendChild(App)

```

### Element
```typescript
import { $2 } from "xxx-element"
import { $article, $h1 } from "xxx-element/components"

const HelloWorld = new $h1({ id: "helloWorld" }).setText("Hello World");

const App = new $article({ id: "App" }).addChild(HelloWorld);

const root = new $2().setElement("#container");

root.addChild(App);
```

for more visit the [wiki](https://github.com/xxxAlvaDevxxx/Element/wiki)

## License

Element is open source [MIT Licensed](LICENSE.md)
