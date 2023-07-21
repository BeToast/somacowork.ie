import PriceGrid from "../reusable/PriceGrid";
import SomaButton from "../reusable/SomaButton";
import SomaCard from "../reusable/SomaCard";

const Pricing: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div className="flex flex-col justify-center bg-grey py-6">
      <div className="w-full">
        <SomaCard.Head
          size="text-4xl"
          align="text-center"
          txtColor="text-orange"
          padding="pb-6"
        >
          Pricing and Membership
        </SomaCard.Head>
      </div>
      <div className="w-full px-6">
        {/* ACTUAL GRID */}
        <PriceGrid />
      </div>
      <div className="flex w-full justify-center pt-6">
        <SomaButton.Contact>
          contact
        </SomaButton.Contact>
      </div>
    </div>
  </>);
}

export default Pricing;