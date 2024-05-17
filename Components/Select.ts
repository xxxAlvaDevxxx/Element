import { $ } from "..";

export class $select extends $ {
  name: string;
  value: any;
  element: HTMLInputElement;
  constructor(
    { name, value }: { name: string; value: any },
    readOnly: boolean = false
  ) {
    super("select", {
      name,
      value,
    });
    this.name = name;
    this.value = value;
    if (readOnly) {
      this.readOnly();
    }
  }
  readOnly() {
    let element = this.element as HTMLInputElement;
    element.readOnly = true;
    return this;
  }
}
