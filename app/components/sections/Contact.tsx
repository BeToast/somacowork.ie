import SomaCard from "../reusable/SomaCard";

const Contact: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div className="flex flex-col p-6 bg-grey">
      <SomaCard.Frame>
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
        
        </SomaCard.Frame> 
    </div>
  </>);
}

export default Contact;