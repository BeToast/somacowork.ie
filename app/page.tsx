//section imports
import Home from "components/Home";
import About from "components/About";
import DiverseCareers from "components/DiverseCareers";
import Amenities from "components/Amenities";
import Pricing from "components/Pricing";
import Gallery from "components/Gallery";
import Contact from "components/Contact";

//reusable imports
import SomaButton from "components/SomaButton";
import SomaQuote from "components/SomaQuote";

// scroll  handler
import dynamic from 'next/dynamic'
const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'),{
  ssr: false,
});


export default function Page() {
  return (
    <main className="flex flex-col overflow-hidden snap-y snap-mandatory child:snap-start">

      <Home className="home-y"/>

      <div className="bg-orange">
        <SomaQuote txtColor="text-white">
          „I have never worked in a better environment.“
        </SomaQuote>
      </div>

      <About />

      <DiverseCareers />

      <Amenities />

      <div className="p-6 pb-8 flex flex-col justify-center bg-orange">
        <div className="flex flex-wrap w-full justify-center space-x-2 py-5 text-lg font-semibold text-white text-center">
          <p>Ready to take the next step?</p>
          <p>Contact us today to book a tour or inquire about our membership options.</p>
        </div>
        <div className="flex w-full justify-center">
          <SomaButton.Contact className="">
            contact
          </SomaButton.Contact>
        </div>
      </div>

      <Pricing />  

      <Gallery />

      <Contact />
      {/* <iframe src="https://connectedhubs.ie/hubs/embed/143?type=desks" title="Soma Coworking Desks" width="100%" height="800px" frameBorder="0" ></iframe> */}
      <DynamicScrollHandler/>
    </main>
  );
}