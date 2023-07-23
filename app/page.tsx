//section imports
import Home from "./components/Home";
import About from "./components/About";
import DiverseCareers from "./components/DiverseCareers";
import FeaturesAmenities from "./components/FeaturesAmenities";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

//reusable imports
import SomaButton from "./components/SomaButton";
import SomaQuote from "./components/SomaQuote";
//dynamic imports
// import dynamic from "next/dynamic";
// const Soma = dynamic(() => import("./compos/Macro/SomaButton"), {ssr: false});


export default function Page() {
  return (
    <main className="flex flex-col">

      <Home />

      <div className="bg-orange">
        <SomaQuote txtColor="text-white">
          „I have never worked in a better environment.“
        </SomaQuote>
      </div>

      <About />

      <DiverseCareers />

      <FeaturesAmenities />

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
    </main>
  );
}