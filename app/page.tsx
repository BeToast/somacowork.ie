//external imports

//internal imports
import SomaButton from "./components/reusable/SomaButton";
import About from "./components/sections/About";
import FeaturesAmenities from "./components/sections/FeaturesAmenities";
import DiverseCareers from "./components/sections/DiverseCareers";
import SomaQuote from "./components/reusable/SomaQuote";
import Pricing from "./components/sections/Pricing";
import Home from "./components/sections/Home";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
//dynamic imports
// import dynamic from "next/dynamic";
// const Soma = dynamic(() => import("./compos/Macro/SomaButton"), {ssr: false});


export default function Page() {
  return (
    <main className="flex flex-col">

      {/* HOME */}
      <Home />

      {/* Big quote*/}
      <div className="bg-orange">
        <SomaQuote txtColor="text-white">
        {/* "I have never worked in a better environment." */}
          „I have never worked in a better environment.“
        </SomaQuote>
      </div>

      {/* ABOUT */}
      <About />

      {/* DIVERSE CAREERS, LIMITLESS POSSIBILITIES */}
      <DiverseCareers />

      {/* SPACE FEATURES AND AMENITIES SECTION */}
      <FeaturesAmenities />

      {/* CONTACT ACTION */}
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

      {/* PRICING AND MEMBERSHIP */}
      <Pricing />  

      {/* GALLERY */}

      <Gallery />

      {/* CONTACT FORM */}

      <Contact />
    </main>
  );
}