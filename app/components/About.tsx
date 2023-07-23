import SomaCard from "./SomaCard";

const About: React.FC<{

}> = ({
  
}) => {
  return(<>
    <div className="flex">
      {/* image */}
      <div className="w-2/5">
        <img 
          src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
          className="w-full h-full"  
        />
      </div>


      <div className="w-3/5 pl-8 pt-10 pb-20"> {/* hardcoded padding!!! */}
        <div className="w-4/5">
          <SomaCard.Frame>
            <SomaCard.Head
              size="text-5xl"
              align="text-left"
              txtColor="text-orange"
            >
              About
            </SomaCard.Head>
            <SomaCard.Body
              align="text-left"
              txtColor="text-grey"
            >
              At Soma, we are proud to be part of the vibrant community of Moycullen, Galway. We believe that great ideas can come from anywhere, and our mission is to provide a collaborative environment that nurtures innovation and fosters connections.
            </SomaCard.Body>
          </SomaCard.Frame>
        </div>
        {/* rpw 1 */}
        <div className="flex">
          <div className="flex-1 text-orange">
            LOGO
          </div>
          <div className="w-4/5">
            <SomaCard.Frame>
              <SomaCard.Head
                size="text-2xl"
                align="text-left"
                txtColor="text-orange"
              >
                Fuel Your Creativity and Connections
              </SomaCard.Head>
              <SomaCard.Body
                align="text-left"
                txtColor="text-grey"
              >
                We know that work is not just about the physical space; it is about the connections you make and the experiences you share. That is why we provide complimentary coffee and tea to keep you fuelled throughout the day. Our kitchen area offers a welcoming space for networking, casual conversations, and shared moments of inspiration.
              </SomaCard.Body>
            </SomaCard.Frame>
          </div>
          <div className="flex-1" />
        </div>
        {/* row 2 */}
        <div className="flex">
          <div className="flex-1 text-orange">
            LOGO
          </div>
          <div className="w-4/5">
            <SomaCard.Frame>
              <SomaCard.Head
                size="text-2xl"
                align="text-left"
                txtColor="text-orange"
              >
                Flexible Workspace Options
              </SomaCard.Head>
              <SomaCard.Body
                align="text-left"
                txtColor="text-grey"
              >
                Whether you need a dedicated office space, a permanent desk, or the flexibility of a hot desk, we have the perfect solution to fit your needs. Our office spaces are designed with comfort and functionality in mind, providing you with a professional environment where you can thrive.
              </SomaCard.Body>
            </SomaCard.Frame>
          </div>
          <div className="flex-1" />
        </div>
        {/* row 3 */}
        <div className="flex">
          <div className="flex-1 text-orange">
            LOGO
          </div>
          <div className="w-4/5">
            <SomaCard.Frame>
              <SomaCard.Head
                size="text-2xl"
                align="text-left"
                txtColor="text-orange"
              >
                Join Our Community
              </SomaCard.Head>
              <SomaCard.Body
                align="text-left"
                txtColor="text-grey"
              >
                By choosing Soma, you become part of a dynamic community that values collaboration, growth, and mutual support. We believe in the power of bringing people together to inspire, learn, and achieve more.
              </SomaCard.Body>
            </SomaCard.Frame>
          </div>
          <div className="flex-1" />
        </div>
      </div>
    </div>
  </>);
}

export default About;