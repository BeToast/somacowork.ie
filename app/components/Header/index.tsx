'use client'

import { logo } from "static/svg";
import Burger from "./Burger";
import { SetStateAction, useState } from "react";
import MobileMenu from "./MobileMenu";
import { headerLinks } from "./static";

const Header: React.FC = () => {

  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const [slideClose, setSlideClose] = useState<boolean>(false);

  let varClassName = () => {
    if(burgerOpen){
      return "soma-header-expand";
    } else if(slideClose){
      setTimeout(() => setSlideClose(false), 300);
      return("soma-header-retract");
    }
    return null;
  };

  return (
    <nav
      id="nav"
      className={varClassName()+" soma-header-y soma-header-padding overflow-y-hidden sticky top-0 flex w-full bg-white items-start sm:items-center justify-between px-7 font-light text-lg text-neutral-800 shadow-lg z-20 flex-row-reverse sm:flex-row"}
    >
      {/* LEFT */}
      <div className="flex flex-col items-center pr-2 space-y-6 sm:space-y-0">
        <a className="" onClick={() => (setBurgerOpen(false))} href="#">
          <div className="soma-header-height">
            {logo.textlogo}
          </div>
        </a>
        <div className="w-full" dir="rtl">
          <MobileMenu setBurgerOpen={setBurgerOpen}/>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden sm:flex space-x-6 px-3">
        {headerLinks.map(link => (
          <a key={link.key} className="hover:text-orange" href={link.href}>{link.text}</a>
        ))}
      </div>
      <div className="flex sm:hidden ">
        <Burger 
          burgerOpen={burgerOpen} 
          setBurgerOpen={setBurgerOpen}
          setSlideClose={setSlideClose}
        />
      </div>
    </nav>
  );
};

export default Header;
