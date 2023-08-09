import SomaCard from "components/SomaCard";
import SomaButton from "components/SomaButton";
import InputField from "./InputField";
import { input } from "../type";
import sendBrevoEmail from "private/sendBrevoEmail";

const FillDetails: React.FC<{
  className?: string,
  contactFormFields: input[],
  formObj: {
    option: string,
    firstname: string,
    surname: string,
    email: string,
    phone: string,
    message: string,
  },
  formSent:  boolean,
  setFormSent: React.Dispatch<React.SetStateAction<boolean>>,
  setFormSubmittedModalOpen:  React.Dispatch<React.SetStateAction<boolean>>,
  submitAgain: boolean,
}> = ({
  className,
  contactFormFields,
  formObj,
  formSent,
  setFormSent,
  setFormSubmittedModalOpen,
  submitAgain,
}) => {

  const submitHandler = ()=>{
    var allInputsValid = true;
    contactFormFields.forEach(field => {
      // console.log(allInputsValid);
      console.log(field.id+" is "+field.valid);
      if(field.valid === undefined) return;
      if(field.valid === false){
        allInputsValid = false;
        //indicate field is not valid and focus it
        let label = document.getElementById("contactFormInput")?.querySelector<HTMLInputElement>("[for='"+field.id+"']");
        label?.classList.add('animate-pulse');
        setTimeout(() => (label?.classList.remove('animate-pulse')), 3800);
      }
    });
    if(allInputsValid) {
      setFormSubmittedModalOpen(true);
      setFormSent(true);
      // sendBrevoEmail(formObj);   
    }
  }

  return(<>
    <div>
      <SomaCard.Head
        padding="pb-6"
        size="text-2xl"
        align="text-left"
        txtColor="text-orange"
      >
        Fill in your details.
      </SomaCard.Head>
      <div id="contactFormInput" className="grid gap-6 md:grid-cols-2">
        {contactFormFields.map((field) => (
          <InputField
            key={field.key}
            name={field.key}
            id={field.id}
            label={field.label}
            hook={field.state}
            setHook={field.setState}
            type={field.type}
            regex={field.regex}
            invalidRegexMsg={field.invalidRegexMsg}
            valid={field.valid}
            setValid={field.setValid}
          />
        ))}
      </div>
    </div>
    <div className="flex justify-center">
      <SomaButton.SubmitForm
        className={(submitAgain ? 'w-40' : '')+" flex justify-center mb-[16px]"}
        onClick={submitHandler}
      >
        {(submitAgain ? 'submit again' : 'submit')}
      </SomaButton.SubmitForm>
    </div>
  </>);
}

export default FillDetails;