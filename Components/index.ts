import { $ } from "..";
import { $buffer, $windowBuffer, $windowList } from "./buffer";
import $labelAndInput from "./labelAndInput";
import $labelAndSelect from "./labelAndSelect";

export { $labelAndInput, $labelAndSelect, $windowBuffer, $windowList, $buffer };

//#region $divider
export function $divider() {
  return new $("span", { class: "divider" });
}
