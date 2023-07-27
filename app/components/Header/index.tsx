import { logo } from "static/svg";

const Header: React.FC = () => {
  return (
    <nav className="soma-header-padding sticky top-0 flex w-full bg-white items-center justify-between px-8 font-light text-lg text-neutral-800 shadow-lg z-20 flex-row-reverse sm:flex-row">
      
      {/* LEFT */}
      <div className="flex items-center space-x-4">
        <a className="" href="#">
          <div className="soma-header-height">
            {logo.textlogo}
          </div>
        </a>
      </div>

      {/* RIGHT */}
      <div className="hidden sm:flex items-center space-x-8 px-3">
        {/* <a className="hover:text-orange" href="#">Top</a> */}
        <a className="hover:text-orange" href="#about">About</a>
        <a className="hover:text-orange" href="#amenities">Amenities</a>
        <a className="hover:text-orange" href="#pricing">Pricing</a>
        <a className="hover:text-orange" href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
