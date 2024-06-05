import { $TagText } from "../types";

//#region $h's
export class $h1 extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("h1", attributes, text);
  }
}

export class $h2 extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("h2", attributes, text);
  }
}

export class $h3 extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("h3", attributes, text);
  }
}

export class $h4 extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("h4", attributes, text);
  }
}

export class $h5 extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("h5", attributes, text);
  }
}

export class $h6 extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("h6", attributes, text);
  }
}
