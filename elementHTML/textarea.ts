import { $input } from ".";
import { $ } from "..";

//#region $textarea
export default class $textarea extends $ {
    name: string;
    value: any;
    placeholder: string | undefined;
    constructor(
      {
        name,
        text,
        placeholder,
        readonly,
      }: {
        name: string;
        text?: any;
        placeholder?: string;
        readonly?: boolean;
      },
      list: string = ""
    ) {
      super("textarea", {
        name,
        list,
      });
      this.name = name;
      this.placeholder = placeholder;
      if (typeof placeholder == "string")
        this.element.setAttribute("placeholder", placeholder);
      if (typeof text == "string") this.setText(text);
      if (typeof readonly == "boolean" && readonly == true) {
        this.readOnly();
      }
      this.onChange({
        callBack(ctx, e) {
          let _ctx = ctx as $input;
          const { value } = e.target as HTMLInputElement;
          _ctx.text = value;
        },
        backfn() {},
      });
    }
    readOnly() {
      let element = this.element as HTMLInputElement;
      element.readOnly = true;
      return this;
    }
  }