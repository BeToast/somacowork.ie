import { products } from "@/app/static/pricing";
import SomaCard from "../../SomaCard";
import OptionCard from "./OptionCard";

const PickOption: React.FC<{
  option: string,
  setOption: React.Dispatch<React.SetStateAction<string>>,
}> = ({
  option,
  setOption,
}) => {
  return(<>
    <SomaCard.Head
      size="text-2xl"
      align="text-left"
      txtColor="text-orange"
    >
      Pick an option.
    </SomaCard.Head>
    <div className="flex-col">
      <div className="flex w-full space-x-3">
        {products.map(product => (
          <OptionCard 
            key={product.key}
            title={product.title}
            svg={product.svg}
            option={option}
            setOption={setOption} 
          />
        ))}
      </div>
      <OptionCard 
          title="Tour"
          displayText="Book a tour"
          option={option}
          setOption={setOption} 
        />
    </div>
  </>);
}

export default PickOption;