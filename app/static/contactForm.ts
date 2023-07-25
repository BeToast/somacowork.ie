type input = {
  key: number,
  id: string,
  placeholder: string,
  regex?: string,
}

export const contactFormFields:input[] = [
  {
    key: 0,
    id: "fname",
    placeholder: "Forename",
  },
  {
    key: 1,
    id: "lname",
    placeholder: "Surname",
  },
  {
    key: 2,
    id: "email",
    placeholder: "Email",
  },
  {
    key: 3,
    id: "phone",
    placeholder: "Phone",
  },
];

