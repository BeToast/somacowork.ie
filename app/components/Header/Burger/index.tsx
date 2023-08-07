'use client'

import { Squash as Hamburger } from 'hamburger-react'

const Burger: React.FC<{
  burgerOpen: boolean,
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
  burgerOpen,
  setBurgerOpen, 
}) => {

  // document.getElementById("nav")?.classList.add("soma-header-retract");
  return(<>
    <Hamburger 
      color="#343a40"
      toggled={burgerOpen} 
      toggle={setBurgerOpen}
    />
  </>);
}

export default Burger;