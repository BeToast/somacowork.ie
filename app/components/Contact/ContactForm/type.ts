type input = {
  key: number,
  id: string,
  label: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>,
  type: "input" | "textarea",
  regex?: string,
  invalidRegexMsg?: string,
  valid?: boolean,
  setValid?: React.Dispatch<React.SetStateAction<boolean>>,
}

export type { input }