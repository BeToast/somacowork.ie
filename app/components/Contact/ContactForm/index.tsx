'use client'

import FillDetails from "./FillDetails";
import PickOption from "./PickOption";
import { input } from "./type";

import { useState } from "react";


const ContactForm: React.FC<{
  
}> = ({
  
}) => {


  const [option, setOption] = useState<string>("noneSelected");

  const [firstname, setFirstname] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [message, setMessage] = useState<string>("");

  const [formSent, setFormSent] = useState<boolean>(false);

  const contactFormFields:input[] = [
    {
      key: 0,
      id: "fname",
      label: "Forename",
      state: firstname,
      setState: setFirstname,
      type: "input"
    },
    {
      key: 1,
      id: "lname",
      label: "Surname",
      state: surname,
      setState: setSurname,
      type: "input"
    },
    {
      key: 2,
      id: "email",
      label: "Email",
      state: email,
      setState: setEmail,
      type: "input",
      regex: "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])",
      invalidRegexMsg: "Please enter a valid email address."
    },
    {
      key: 3,
      id: "phone",
      label: "Phone",
      state: phone,
      setState: setPhone,
      type: "input"
      // regex: ,
      // invalidRegexMsg "please enter a valid phone number.",
    },
    {
      key: 4,
      id: "message",
      label: "Message",
      state: message,
      setState: setMessage,
      type: "textarea"
    },
  ];
  
  const formObj = {option, firstname, surname, email, phone, message};

  return(<>
    <div className="flex flex-col px-2 sm:px-6 space-y-10">
      <PickOption
        option={option}
        setOption={setOption} 
      />

      <FillDetails
        contactFormFields={contactFormFields}
        formObj={formObj}
        formSent={formSent}
        setFormSent={setFormSent}
      />
    </div>
  </>);
}

export default ContactForm;