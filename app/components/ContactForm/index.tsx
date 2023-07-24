'use client'

import FillDetails from "./FillDetails";
import PickOption from "./PickOption";

import { SetStateAction, useState } from "react";

const ContactForm: React.FC<{
  
}> = ({
  
}) => {

  const [option, setOption] = useState<string>("Tour");
  const [firstname, setFirstname] = useState<string | null>(null);
  const [surname, setSurname] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  const formObj = {option, firstname, surname, email, phone};

  return(<>
    <div className="flex flex-col bg-white">
      <PickOption
        option={option}
        setOption={setOption} 
      />

      <FillDetails 
        setFirstname={setFirstname}
        setSurname={setSurname}
        setEmail={setEmail}
        setPhone={setPhone}
      />
    </div>
  </>);
}

export default ContactForm;