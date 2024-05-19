import { $, $2 } from "..";
import { CallBack, nonBackfn } from "../types";
import $select from "./select";

// #region $LabelAnSelect
export class $labelAndSelect extends $ {
  label: $2;
  select: $select;
  constructor(
    {
      name,
      label,
      value,
    }: {
      name: string;
      label: string;
      value: any;
    },
    readOnly: boolean = false
  ) {
    super("div", {});

    this.label = new $("label", { for: name }).setText(label);
    this.select = new $select({ name, value }, readOnly);
    this.addChildren(this.label, this.select);
  }
  onChangeSelect({
    callBack,
    backfn,
  }: {
    callBack: CallBack;
    backfn: CallBack | nonBackfn;
  }) {
    this.select.onChange({ callBack, backfn });
  }
}
