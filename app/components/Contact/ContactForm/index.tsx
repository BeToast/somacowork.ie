'use client'

import FillDetails from "./FillDetails";
import PickOption from "./PickOption";
import { input } from "./type";

import { useState } from "react";



const ContactForm: React.FC<{
  
}> = ({
  
}) => {


  const [option, setOption] = useState<string>("noneSelected");

  const [firstname, setFirstname] = useState<string | null>(null);
  const [surname, setSurname] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  const [message, setMessage] = useState<string>("");

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
      type: "input"
    },
    {
      key: 3,
      id: "phone",
      label: "Phone",
      state: phone,
      setState: setPhone,
      type: "input"
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
  
  


  const formObj = {option, firstname, surname, email, phone};

  return(<>
    <div className="flex flex-col px-2 sm:px-6 space-y-6">
      <PickOption
        option={option}
        setOption={setOption} 
      />

      <FillDetails
        contactFormFields={contactFormFields}
      />
    </div>
  </>);
}

export default ContactForm;