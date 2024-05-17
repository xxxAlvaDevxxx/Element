import { $ } from "..";
import { HTMLInputTypeAttribute } from "../Types";

export class $input extends $ {
  type: HTMLInputTypeAttribute;
  name: string;
  value: any;
  placeholder: string | undefined;
  element: any;
  text: string;
  constructor(
    {
      type,
      name,
      value,
      placeholder,
      readonly,
    }: {
      type: HTMLInputTypeAttribute;
      name: string;
      value?: any;
      placeholder?: string;
      readonly?: boolean;
    },
    list: string = ""
  ) {
    super("input", {
      type,
      name,
      list,
    });
    this.type = type;
    this.name = name;
    this.value = value;
    this.placeholder = placeholder;
    if (typeof placeholder == "string")
      this.element.setAttribute("placeholder", placeholder);
    if (typeof value == "string") this.setValue(value);
    if (type == "date" && value != "") {
      let element = this.element as HTMLInputElement;
      element.valueAsDate = value;
    }
    if (typeof readonly == "boolean" && readonly == true) {
      this.readOnly();
    }
    this.onChange({
      callBack(ctx, e) {
        let _ctx = ctx as $input;
        const { value } = e.target as HTMLInputElement;
        _ctx.value = value;
      },
      backfn() {},
    });
  }
  setValue(value: string) {
    this.value = value;
    let element = this.element as HTMLInputElement;
    element.value = value;
    this.element.setAttribute("value", value);
    return this;
  }
  readOnly() {
    let element = this.element as HTMLInputElement;
    element.readOnly = true;
    return this;
  }
}
