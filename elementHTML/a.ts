import { $TagText } from "../types";

export default class $a extends $TagText {
  constructor(text: string, attributes: object = {}) {
    super("a", attributes, text);
  }
}
