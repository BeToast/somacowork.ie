export interface ColorInterface {
  headerColor: string;
  bodyColor: string;
}
export const SomaColors = {
  default: {
    head: "text-orange",
    body: "text-grey-text",
  },
  white: "text-white",
}

export type SomaTextColor = "text-white" | "text-orange" | "text-grey" | "text-grey-100" | "text-grey-200" | "text-grey-300";
export type SomaBgColor = "bg-white" | "bg-orange" | "bg-grey" | "bg-inherit";
export type Align = "text-left" | "text-center" | "text-right";
export type Size = "text-5xl" | "text-4xl" | "text-3xl" | "text-2xl";