import { products } from "@/app/static/pricing";
import SomaCard from "../../SomaCard";
import OptionCard from "./OptionCard";

const PickOption: React.FC<{
  className? :string,
  option: string,
  setOption: React.Dispatch<React.SetStateAction<string>>,
}> = ({
  className,
  option,
  setOption,
}) => {
  return(<>
    <div className={""+className}>
      <SomaCard.Head
        size="text-2xl"
        align="text-left"
        txtColor="text-orange"
      >
        Pick an option.
      </SomaCard.Head>
      <div className="flex-col">
        <div className="flex w-full space-x-6 pb-6">
          {products.map(product => (
            <OptionCard
              className="pb-2"
              key={product.key}
              title={product.title}
              svg={product.svg}
              option={option}
              setOption={setOption} 
            />
          ))}
        </div>
        <OptionCard
          className="py-2"
            title="Tour"
            displayText="Book a tour"
            option={option}
            setOption={setOption} 
          />
      </div>
    </div>
  </>);
}

export default PickOption;