const MobileMenu: React.FC<{
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({
  setBurgerOpen,
}) => {
  return(<>
    <div className="flex sm:hidden flex-col items-left space-y-6">
      <a onClick={() => (setBurgerOpen(false))} className="hover:text-orange" href="#about">About</a>
      <a onClick={() => (setBurgerOpen(false))} className="hover:text-orange" href="#amenities">Amenities</a>
      <a onClick={() => (setBurgerOpen(false))} className="hover:text-orange" href="#pricing">Pricing</a>
      <a onClick={() => (setBurgerOpen(false))} className="hover:text-orange" href="#contact">Contact</a>
      </div>
  </>);
}

export default MobileMenu;