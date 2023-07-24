const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 flex w-full bg-white items-center justify-between py-2 text-xl text-neutral-800 lg:py-4">
      
      {/* LEFT */}
      <div className="flexitems-center space-x-4 px-3">
        <div className="ml-2">
          <a className="" href="#">soma logo here</a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden sm:flex items-center space-x-4 mr-2 px-3">
        <a className="hover:text-orange" href="#">Top</a>
        <a className="hover:text-orange" href="#about">About</a>
        <a className="hover:text-orange" href="#amenities">Amenities</a>
        <a className="hover:text-orange" href="#pricing">Pricing</a>
        <a className="hover:text-orange" href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
