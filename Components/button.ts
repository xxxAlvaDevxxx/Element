import { $ } from "..";
import { CallBack, nonBackfn } from "../types";

// #region $button
export class $button extends $ {
  constructor(
    text: string,
    callBack: CallBack,
    attributes: object = {},
    backfn: CallBack | nonBackfn = () => {},
    back: boolean = false
  ) {
    super("button", attributes);
    this.setText(text);
    this.onClick({ callBack, backfn }, back);
  }
}
