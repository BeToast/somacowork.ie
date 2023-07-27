import SomaCard from "components/SomaCard";
import ContactForm from "./ContactForm";

const Contact: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div 
      id="contact"
      className="flex flex-col px-2 py-6 sm:p-6 bg-white"
    >
      <SomaCard.Head
        className="pb-6"
        size= "text-5xl"
        align= "text-center"
        txtColor= "text-orange"
      >
        Let&apos;s get in touch! 
      </SomaCard.Head>
      <ContactForm />
    </div>
  </>);
}

export default Contact;

{/* <SomaCard.Frame>
        <SomaCard.Head
          size= "text-5xl"
          align= "text-center"
          txtColor= "text-orange"
        >
          Let&apos;s get in touch! 
        </SomaCard.Head>
        <SomaCard.Body
          align="text-center"
          txtColor="text-white"
        >
          This is where the contact form will go.
          <br />
          I think a grey background will be nice here
          <br />
          do you think we could have a different colour header than orange for the gray background?
        </SomaCard.Body>
    
        <SomaCard.Head
          size= "text-5xl"
          align= "text-center"
          txtColor="text-grey-100"
          padding=""
        >
          Let&apos;s get in touch!
        </SomaCard.Head>
        <SomaCard.Head
          size= "text-5xl"
          align= "text-center"
          txtColor="text-grey-200"
          padding=""
        >
          Let&apos;s get in touch!
        </SomaCard.Head>
        <SomaCard.Head
          size= "text-5xl"
          align= "text-center"
          txtColor= "text-white"
        >
          Let&apos;s get in touch!
        </SomaCard.Head>
        <SomaCard.Body
          align="text-center"
          txtColor="text-white"
        >
          these are all the colors in the pallet rn...
        </SomaCard.Body>
        
        </SomaCard.Frame>  */}