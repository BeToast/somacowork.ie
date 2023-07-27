import SomaCard from "components/SomaCard";
import SomaButton from "components/SomaButton";
import InputField from "./InputField";
import { input } from "../type";

const FillDetails: React.FC<{
  className?: string,
  contactFormFields: input[],
}> = ({
  className,
  contactFormFields,
}) => {

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
      <div className="grid gap-6 md:grid-cols-2">
        {contactFormFields.map((field) => (
          <InputField
            key={field.key}
            id={field.id}
            label={field.label}
            setHook={field.setState}
            type={field.type}        
          />
        ))}
      </div>
    </div>
    <SomaButton.SubmitForm
      className="flex justify-center"
    >
      <p className="text-center text-md">Submit Form</p>
    </SomaButton.SubmitForm>
  </>);
}

export default FillDetails;