import { icons, logo } from "static/svg";
import { footerRows } from "./static";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange flex justify-center">
      <div className="flex flex-col space-y-4 min-w-min text-white p-8">
        <div>
          <div className='soma-header-height float-left'>
            {logo.whitetextlogo}
          </div>
        </div>
        {footerRows.map(row => (<>
          <a className='flex min-w-min' href={row.href} target="_blank">
            <div className="h-5 w-5 fill-white mr-2">
              {row.svg}
            </div>
            {row.cont}
          </a>
        </>))}
      </div>
      
    </footer>
  );
};

export default Footer;
