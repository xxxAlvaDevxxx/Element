import { $, $2 } from "..";
import { HTMLInputTypeAttribute, CallBack, nonBackfn } from "../types";
import { $input } from "./elementHTML";

// #region $labelAndInput
export default class $labelAndInput extends $ {
  label: $2;
  input: $input;
  constructor(
    {
      type,
      name,
      label,
      value,
      readonly,
    }: {
      type: HTMLInputTypeAttribute;
      name: string;
      label: string;
      value?: any;
      readonly?: boolean;
    },
    list: string = ""
  ) {
    super("div", { id: `container${name}` });
    if (value == undefined) value = "";

    this.label = new $("label", { for: name }).setText(label);
    this.input = new $input(
      { type, name, value, placeholder: "", readonly },
      list
    );
    this.addChildren(this.label, this.input);
  }
  onChangeInput(
    {
      callBack,
      backfn,
    }: {
      callBack: CallBack;
      backfn: CallBack | nonBackfn;
    },
    back?: boolean
  ) {
    this.input.onChange({ callBack, backfn }, back);
  }
}
