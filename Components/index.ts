import { $, $2 } from "..";
import { nonBackfn, HTMLInputTypeAttribute, CallBack } from "../Types";

// #region $button
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

// #region $input
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

//#region $textarea
export class $textarea extends $ {
  name: string;
  value: any;
  placeholder: string | undefined;
  element: any;
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

// #region $select
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

// #region $labelAndInput
export class $labelAndInput extends $ {
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
  //valueToInput(value: any) {}
}

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
  //valueToSelect(value: any) {}
}

export function $Divider() {
  return new $("span", { class: "divider" });
}

export class $article extends $ {
  constructor(attributes: object = {}) {
    super("article", attributes);
  }
}
