import SomaCard from "./SomaCard";

const DiverseCareers: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div className="flex justify-center py-10 bg-orange">
      <div className="flex-1">
        <SomaCard.Frame>
          <SomaCard.Head
            size="text-3xl"
            align="text-right"
            txtColor="text-white"
          >
            Diverse Careers
          </SomaCard.Head>
        </SomaCard.Frame>
      </div>
      <div className="text-white px-8">
        LOGO
      </div>
      <div className="flex-1">
        <SomaCard.Frame className="w-4/5">
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