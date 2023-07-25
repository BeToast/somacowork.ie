import SomaCard from "@/app/components/SomaCard";
import { contactFormFields } from "@/app/static/contactForm";
import InputField from "./InputField";

const FillDetails: React.FC<{
  className?: string,
  setFirstname: React.Dispatch<React.SetStateAction<string | null>>,
  setSurname: React.Dispatch<React.SetStateAction<string | null>>,
  setEmail: React.Dispatch<React.SetStateAction<string | null>>,
  setPhone: React.Dispatch<React.SetStateAction<string | null>>,
}> = ({
  className,
  setFirstname,
  setSurname,
  setEmail,
  setPhone,
}) => {

  return(<>
    <div className={className+" "}>
      <SomaCard.Head
        size="text-2xl"
        align="text-left"
        txtColor="text-orange"
      >
        Fill in your details.
      </SomaCard.Head>
      <div className="grid gap-6 md:grid-cols-2">
        {contactFormFields.map((field) => (
          <div key={field.key} className="">
            <InputField
              className=""
              id={field.id}
              placeholder={field.placeholder}            
            />
          </div>
        ))}
      </div>
    </div>
  </>);
}

export default FillDetails;