import SomaCard from "components/SomaCard";
import ContactForm from "./ContactForm";

const Contact: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div 
      id="contact"
      className="flex justify-center px-2 py-6 sm:p-6 bg-white"
    >
      <div className="w-[1000px]">
        <SomaCard.Head
          padding=""
          className="py-6"
          size= "text-5xl"
          align= "text-center"
          txtColor= "text-orange"
        >
          Let&apos;s get in touch! 
        </SomaCard.Head>
        <ContactForm />
      </div>
    </div>
  </>);
}

export default Contact;