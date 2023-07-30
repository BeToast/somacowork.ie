import SomaCard from "components/SomaCard";
import LogoCard from "components/LogoCard";
import somaImage, { office } from "static/image";

import Image from "next/image";

const FeaturesAmenities: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div 
      id="amenities"
      className="flex"
    >
      <div className="items-center flex flex-col space-y-8 sm:w-3/5 px-4 py-14"> {/* hardcoded padding!!! */}
        <div className="w-full xs:w-4/5">
          <SomaCard.Frame className="pt-4">
            <SomaCard.Head
              size="text-5xl"
              align="text-left"
              txtColor="text-orange"
            >
              {/* Space, Features, Amenities */}
              Modern Amenities for Seamless Work
            </SomaCard.Head>
            <SomaCard.Body
              align="text-left"
              txtColor="text-grey"
            >
              We understand the importance of a conducive work environment, which is why we offer the things you need. Our space is equipped with high-speed internet, ensuring a reliable and efficient online experience. You will also have access to printing capabilities, so you can easily bring your ideas to life on paper.
            </SomaCard.Body>
          </SomaCard.Frame>
        </div>
      </div>
      {/* image */}
      <div className="hidden sm:block w-2/5">
        <div className="h-full overflow-clip">
          <Image 
            // src={somaImage.handsComputer}
            src={office.i}
            className="object-cover object-left h-full"
            alt={""}
          />
        </div>
      </div>
    </div>
  </>);
}

export default FeaturesAmenities;