import SomaCard from "components/SomaCard";
import LogoCard from "../LogoCard";
import somaImage from "static/image";

import "./helpers";

const About: React.FC<{

}> = ({

}) => {
  return(<>
    <div 
      id="about"
      className="flex"
    >
      <div className="listen-h w-2/5 hidden md:block overflow-clip">
        <img
          src="/moycullen_car.webp"
          className="object-cover object-right h-full"
          alt={""}
        />
      </div>

      <div className="md:w-3/5 ">
        <div className="declare-h flex flex-col w-full space-y-8 px-4 py-14"> {/* hardcoded padding!!! */}
          <div className="w-full xs:w-4/5">
            <SomaCard.Frame className="pt-4">
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

          {/* row 1 */}
          <LogoCard 
            title="Fuel Your Creativity and Connections"
            text="We know that work is not just about the physical space; it is about the connections you make and the experiences you share. That is why we provide complimentary coffee and tea to keep you fuelled throughout the day. Our kitchen area offers a welcoming space for networking, casual conversations, and shared moments of inspiration."
          />

          {/* row 2 */}
          <LogoCard 
            title="Flexible Workspace Options"
            text="Whether you need a dedicated office space, a permanent desk, or the flexibility of a hot desk, we have the perfect solution to fit your needs. Our office spaces are designed with comfort and functionality in mind, providing you with a professional environment where you can thrive."
          />
          
          {/* row 3 */}
          <LogoCard 
            title="Join Our Community"
            text="By choosing Soma, you become part of a dynamic community that values collaboration, growth, and mutual support. We believe in the power of bringing people together to inspire, learn, and achieve more."
          />
          
        </div>
      </div>  
    </div>
  </>);
}

export default About;