import { $, $2 } from "..";

// #region types
export type Attribute = {
  name: string;
  value: string;
};

export type Target = "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop" | "";

export type HTMLInputTypeAttribute =
  | "number"
  | "search"
  | "button"
  | "time"
  | "image"
  | "text"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "month"
  | "password"
  | "radio"
  | "range"
  | (string & {});

export type StyleDeclaration = Partial<CSSStyleDeclaration> & {
  [propName: string]: string;
};

export type CallBack = (ctx: $2, e: any) => void;
export type nonBackfn = () => void;

export class $TagText extends $ {
  constructor(
    tag: keyof HTMLElementTagNameMap,
    attributes: object,
    text: string
  ) {
    super(tag, attributes);
    this.setText(text);
  }
}
