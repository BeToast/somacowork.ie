'use client'

import { logo } from "static/svg";
import Burger from "./Burger";
import { SetStateAction, useState } from "react";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {

  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  return (
    <nav
      className={(burgerOpen ? "soma-header-expand" : "sm:soma-header-retract")+" soma-header-y soma-header-padding overflow-y-hidden sticky top-0 flex w-full bg-white items-start sm:items-center justify-between px-8 font-light text-lg text-neutral-800 shadow-lg z-20 flex-row-reverse sm:flex-row"}
    >
      
      {/* LEFT */}
      <div className="flex flex-col items-center pr-2 space-y-6 sm:space-y-0">
        <a className="" href="#">
          <div className="soma-header-height">
            {logo.textlogo}
          </div>
        </a>
        <div className="w-full" dir="rtl">
          {/* {(burgerOpen ? <MobileMenu/> : <></>)} */}
          <MobileMenu setBurgerOpen={setBurgerOpen}/>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden sm:flex space-x-8 px-3">
        {/* <a className="hover:text-orange" href="#">Top</a> */}
        <a className="hover:text-orange" href="#about">About</a>
        <a className="hover:text-orange" href="#amenities">Amenities</a>
        <a className="hover:text-orange" href="#pricing">Pricing</a>
        <a className="hover:text-orange" href="#contact">Contact</a>
      </div>
      <div className="flex sm:hidden ">
        <Burger 
          burgerOpen={burgerOpen} 
          setBurgerOpen={setBurgerOpen}
        />
      </div>
    </nav>
  );
};

export default Header;
