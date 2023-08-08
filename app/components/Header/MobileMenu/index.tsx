import { headerLinks } from "../static";

const MobileMenu: React.FC<{
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({
  setBurgerOpen,
}) => {
  return(<>
    <div className="flex sm:hidden flex-col items-left space-y-6">
      {headerLinks.map(link => (
        <a key={link.key} onClick={() => (setBurgerOpen(false))} className="hover:text-orange" href={link.href}>{link.text}</a>
      ))}
    </div>
  </>);
}

export default MobileMenu;