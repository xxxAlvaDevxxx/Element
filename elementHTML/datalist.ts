import { $ } from "..";
import $option from "./option";

export default class $datalist extends $ {
    constructor(attributes: object = {}) {
      super("datalist", attributes);
    }
    addOption(value: string) {
      this.addChild(new $option(value, { value: value }));
      return this;
    }
    setOptions(...values: Array<string>) {
      values.forEach((value) => {
        this.addOption(value);
      });
      return this;
    }
  }