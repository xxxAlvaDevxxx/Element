import { $ } from "..";

//#region $h's
class $h extends $ {
  constructor(
    h: keyof HTMLElementTagNameMap,
    attributes: object,
    text: string
  ) {
    super(h, attributes);
    this.setText(text);
  }
}
export class $h1 extends $h {
  constructor(text: string, attributes: object = {}) {
    super("h1", attributes, text);
  }
}

export class $h2 extends $h {
  constructor(text: string, attributes: object = {}) {
    super("h2", attributes, text);
  }
}

export class $h3 extends $h {
  constructor(text: string, attributes: object = {}) {
    super("h3", attributes, text);
  }
}

export class $h4 extends $h {
  constructor(text: string, attributes: object = {}) {
    super("h4", attributes, text);
  }
}

export class $h5 extends $h {
  constructor(text: string, attributes: object = {}) {
    super("h5", attributes, text);
  }
}

export class $h6 extends $h {
  constructor(text: string, attributes: object = {}) {
    super("h6", attributes, text);
  }
}
