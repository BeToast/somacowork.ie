import SomaCard from "../../SomaCard";

const FillDetails: React.FC<{
  setFirstname: React.Dispatch<React.SetStateAction<string | null>>,
  setSurname: React.Dispatch<React.SetStateAction<string | null>>,
  setEmail: React.Dispatch<React.SetStateAction<string | null>>,
  setPhone: React.Dispatch<React.SetStateAction<string | null>>,
}> = ({
  setFirstname,
  setSurname,
  setEmail,
  setPhone,
}) => {
  
  return(<>
    <SomaCard.Head
      size="text-2xl"
      align="text-left"
      txtColor="text-orange"
    >
      Fill in your details.
    </SomaCard.Head>
  </>);
}

export default FillDetails;