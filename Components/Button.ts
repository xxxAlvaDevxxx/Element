import { $ } from "..";
import { CallBack, nonBackfn } from "../Types";

export class $button extends $ {
  constructor(
    attributes: object,
    text: string,
    callBack: CallBack,
    backfn: CallBack | nonBackfn,
    back: boolean = false
  ) {
    super("button", attributes);
    this.setText(text);
    this.onClick({ callBack, backfn }, back);
  }
}
