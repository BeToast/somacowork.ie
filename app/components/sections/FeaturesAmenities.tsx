import SomaCard from "../reusable/SomaCard";

const FeaturesAmenities: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div className="flex">
      <div className="w-3/5 px-14 pt-10 pb-20"> {/* hardcoded padding!!! */}
        <SomaCard.Frame>
          <SomaCard.Head
            size="text-5xl"
            align="text-left"
            txtColor="text-orange"
            className="w-4/5"
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
        {/* row 1 */}
        <div className="flex">
          <div className="flex-1 text-orange">LOGO</div>
          <SomaCard.Frame>
            <SomaCard.Head
              size="text-2xl"
              align="text-left"
              txtColor="text-orange"
              className="w-4/5"
            >
              Modern Amenities for Seamless Work
            </SomaCard.Head>
            <SomaCard.Body
              align="text-left"
              txtColor="text-grey"
            >
              We understand the importance of a conducive work environment, which is why we offer the things you need. Our space is equipped with high-speed internet, ensuring a reliable and efficient online experience. You will also have access to printing capabilities, so you can easily bring your ideas to life on paper.
            </SomaCard.Body>
          </SomaCard.Frame>
          <div className="flex-1" />
        </div>
      </div>
      {/* image */}
      <div className="w-2/5">
        <img
          src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
          className="h-full w-full"
        />
        </div>
    </div>
  </>);
}

export default FeaturesAmenities;