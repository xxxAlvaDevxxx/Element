import { $2 } from "..";

// #region types
export type Attribute = {
  name: string;
  value: string;
};

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
