import SomaCard from "./SomaCard";

const Home: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    {/* BIG IMAGE */}
    <div className="h-80">
      <img 
        src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
        className="w-full h-full"  
      />
    </div>
    <div className="pb-4">
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