import SomaCard from "components/SomaCard";
import LogoCard from "components/LogoCard";
import somaImage from "static/image";

import Image from "next/image";

const FeaturesAmenities: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div 
      id="amenities"
      className="flex"
    >
      <div className="flex flex-col space-y-8 sm:w-3/5 pl-12 py-14"> {/* hardcoded padding!!! */}
        <div className="w-4/5">
          <SomaCard.Frame className="pt-4">
            <SomaCard.Head
              size="text-5xl"
              align="text-left"
              txtColor="text-orange"
            >
              {/* Space, Features, Amenities */}
              Space Features and Amenities Section
            </SomaCard.Head>
            <SomaCard.Body
              align="text-left"
              txtColor="text-grey"
            >
              Present a visually appealing grid or list of the main features and amenities available in your coworking space.
              <br/><br/>
              Include details about high-speed internet, comfortable workstations, meeting rooms, event spaces, printing facilities, coffee/refreshment options, etc.
            </SomaCard.Body>
          </SomaCard.Frame>
        </div>

        {/* row 1 */}
        <LogoCard 
          title="Modern Amenities for Seamless Work"
          text="We understand the importance of a conducive work environment, which is why we offer the things you need. Our space is equipped with high-speed internet, ensuring a reliable and efficient online experience. You will also have access to printing capabilities, so you can easily bring your ideas to life on paper."
        />
      </div>
      {/* image */}
      {/* <div className="hidden sm:grid w-2/5">
        <Image
          src={somaImage.handsComputer}
          className="h-full shadow-sm"
          alt={""}
        />
        </div> */}
      <div className="hidden sm:block w-2/5">
        <div className="h-full overflow-clip">
          <Image 
            src={somaImage.handsComputer}
            className="object-cover object-left h-full"
            alt={""}
          />
        </div>
      </div>
    </div>
  </>);
}

export default FeaturesAmenities;