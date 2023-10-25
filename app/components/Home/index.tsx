import somaImage from "static/image";
import SomaCard from "../SomaCard";
import Image from "next/image";

const Home: React.FC<{
  className?: string,
}> = ({
  className = "",
}) => {
  return(<>
    {/* BIG IMAGE */}
    <div 
      id="home"
      className={className+" flex flex-col"}
    >
      <div className="grow min-h-[250px] relative flex justify-center shadow-md overflow-clip">
        <Image
          src={somaImage.cupTall}
          className="absolute h-full bottom-0 object-cover object-bottom"
          alt={""}
          priority={true}
          placeholder = 'blur'
          fill
        />
      </div>
      <div className="grow-0">
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

    </div>
  </>);
}

export default Home;