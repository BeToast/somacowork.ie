import { logo } from "@/app/static/svg";
import SomaCard from "components/SomaCard";

const LogoCard: React.FC<{
  title: string,
  text: string,
}> = ({
  title,
  text,
}) => {
  return(<>
    <div className="flex">
      <div className="flex-col justify-start fill-orange pr-3">
        <div className="h-8">
          {logo.hlogo}
        </div>
      </div>
      <div className="w-4/5">
      <SomaCard.Frame className="pt-0 ">
          <SomaCard.Head
            className=""
            size="text-2xl"
            align="text-left"
            txtColor="text-orange"
          >
            {title}
          </SomaCard.Head>
          <SomaCard.Body
            align="text-left"
            txtColor="text-grey"
          >
            {text}
          </SomaCard.Body>
        </SomaCard.Frame>
      </div>
    </div>
  </>);
}

export default LogoCard;