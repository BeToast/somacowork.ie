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
          />
        ))}
        <SomaButton.SubmitForm
          className="flex justify-center md:col-span-2"
        >
          <p className="text-center text-md">Submit Form</p>
        </SomaButton.SubmitForm>
      </div>
    </div>
  </>);
}

export default FillDetails;