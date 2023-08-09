'use client'

import FillDetails from "./FillDetails";
import FormSubmittedModal from "./FormSubmittedModal";
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
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");

  const [message, setMessage] = useState<string>("");

  const [formSent, setFormSent] = useState<boolean>(false);

  const [formSubmittedModalOpen, setFormSubmittedModalOpen] = useState(false);

  const [submitAgain, setSubmitAgain] = useState(false);

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
      invalidRegexMsg: "Please enter a valid email address.",
      valid: validEmail,
      setValid: setValidEmail,
    },
    {
      key: 3,
      id: "phone",
      label: "Phone",
      state: phone,
      setState: setPhone,
      type: "input",
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

  //if the form is sent, the modal is closed, and submitAgain is false.
  //submitAgain is used for changing the text of the submit button
  if(formSent && !formSubmittedModalOpen && !submitAgain) setSubmitAgain(true);

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
        setFormSubmittedModalOpen={setFormSubmittedModalOpen}
        submitAgain={submitAgain}
      />
    </div>
    <FormSubmittedModal
      modalOpen={formSubmittedModalOpen}
      setModalOpen={setFormSubmittedModalOpen}
    />
  </>);
}

export default ContactForm;