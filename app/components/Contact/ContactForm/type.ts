type input = {
  key: number,
  id: string,
  label: string,
  regex?: string,
  invalidRegexMsg?: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>
  type: "input" | "textarea"
}

export type { input }