'use client'

import { Squash as Hamburger } from 'hamburger-react'

const Burger: React.FC<{
  burgerOpen: boolean,
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setSlideClose: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({
  burgerOpen,
  setBurgerOpen, 
  setSlideClose,
}) => {
  return(<>
    <Hamburger 
      color="#343a40"
      toggled={burgerOpen} 
      toggle={setBurgerOpen}
      onToggle={toggled => (toggled ? console.log("true") : setSlideClose(true))}
    />
  </>);
}

export default Burger;