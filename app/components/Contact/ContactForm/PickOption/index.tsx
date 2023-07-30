import { products } from "@/app/static/pricing";
import SomaCard from "components/SomaCard";
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
        padding="pb-6 pt-4"
        size="text-2xl"
        align="text-left"
        txtColor="text-orange"
      >
        I am interested in...
      </SomaCard.Head>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
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
        {/* <OptionCard
          className="py-2 col-span-2 md:col-span-4"
            title="Chat"
            displayText="Just to chat"
            option={option}
            setOption={setOption} 
          /> */}
      </div>
    </div>
  </>);
}

export default PickOption;