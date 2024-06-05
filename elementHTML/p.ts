import { $TagText } from "../types";

export default class $p extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("p", attributes, text);
  }
}
