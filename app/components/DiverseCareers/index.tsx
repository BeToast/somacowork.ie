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
      className="relative min-h-[26rem]"
    >
      <div className="absolute inset-0 -z-10 overflow-clip">
        <div className="hidden md:block">
          <Image 
            src={somaImage.bgTwoSides} 
            alt={""}   
            fill
          />
        </div>
        <div className="block md:hidden">
          <Image 
            src={somaImage.bgTwoSidesMobile}
            className="min-w-[640px]"
            alt={""}   
            fill
          />
        </div>
      </div>
      <div className="hidden md:block">
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
            <SomaCard.Frame className="w-full pr-6 lg:w-4/5">
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

      {/* mobile view */}
      <div className="flex md:hidden flex-col justify-center items-center space-y-8 pt-14">
        <div className="">
          <SomaCard.Head
            padding="p-0"
            size="text-3xl"
            align="text-center"
            txtColor="text-white"
          >
            Diverse Careers
          </SomaCard.Head>
        </div>
        <div className="fill-white h-10">
          {logo.hlogo}
        </div>
        <SomaCard.Frame className="w-4/5 pt-0">
          <SomaCard.Head
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
  </>);
}

export default DiverseCareers;