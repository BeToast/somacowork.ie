import { office } from "static/image";
import somaImage from "static/image";
import SomaCard from "../SomaCard";
import Image from "next/image";

const Home: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    {/* BIG IMAGE */}
    <div 
      id="home"
      className="h-96 overflow-clip"
    >
      <Image 
        src={somaImage.moycullenBuildingBanner}
        className="w-full h-full shadow-md"
        alt={""}
        priority={true}
      />
      {/* <div className="-mt-[0px]">
        <Image 
          src={office.a}
          className="w-full shadow-md"
          alt={""}
          priority={true}
        />
      </div> */}
    </div>
    <div>
      <SomaCard.Frame>
        <SomaCard.Head
          size="text-5xl"
          align="text-center"
          txtColor="text-orange"
        >
          Welcome
        </SomaCard.Head>
        <SomaCard.Body
          align="text-center"
          txtColor="text-grey"
        >
          Embrace the power of collaboration at Soma Coworking, where innovation meets community in the heart of Moycullen. Step into our dynamic space, where professionals from diverse careers unite to create, connect, and thrive. Ignite your creativity and cultivate meaningful connections as you tap into collective wisdom and expand your horizons within an environment that nurtures your professional journey.
        </SomaCard.Body>
      </SomaCard.Frame> 
    </div>
  </>);
}

export default Home;