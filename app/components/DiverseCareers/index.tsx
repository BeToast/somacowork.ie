import { logo } from "static/svg";
import somaImage from "static/image";
import SomaCard from "components/SomaCard";

import Image from "next/image";

const DiverseCareers: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div 
      id="diverseCareers"
      className="relative h-69"
    >
      <div className="absolute inset-0 -z-10">
        <Image 
          src={somaImage.backgroundTwoSides} 
          alt={""}   
          fill
        />
      </div>
      <div className="flex justify-center">
        <div className="flex-1">
          <SomaCard.Frame>
            <SomaCard.Head
              className="mt-2"
              padding="pt-20"
              size="text-3xl"
              align="text-right"
              txtColor="text-white"
            >
              Diverse Careers
            </SomaCard.Head>
          </SomaCard.Frame>
        </div>
        <div className="fill-white my-36 mx-8 h-10">
          {logo.hlogo}
        </div>
        <div className="flex-1">
          <SomaCard.Frame className="w-4/5">
            <SomaCard.Head
              className="mt-2"
              padding="pt-20"
              size="text-3xl"
              align="text-left"
              txtColor="text-white"
            >
              Limitless Possibilities
            </SomaCard.Head>
            <SomaCard.Body
              size="text-sm"
              align="text-left"
              txtColor="text-white"
            >
              In our coworking space, you will find a diverse community of professionals from various backgrounds and industries. Whether you are a freelancer, entrepreneur, remote worker, or small team, our space is designed to accommodate a wide range of careers and professional pursuits. We believe in the power of collaboration and the potential for cross-pollination of ideas among our members.
            </SomaCard.Body>
          </SomaCard.Frame>
        </div>
      </div>
    </div>
  </>);
}

export default DiverseCareers;