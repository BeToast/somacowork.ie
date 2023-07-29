import { icons, logo } from "@/app/static/svg";
import { footerRows } from "./static";

const footerRowsJsx: React.ReactNode[] = footerRows.map(row => (<>
  <div key={row.key} className='flex w-full pl-3 space-y-4'>
    <div className='sm:w-2/5' />
    <a className='flex min-w-min' href={row.href} target="_blank">
      <div className="h-5 w-5 fill-white mr-2">
        {row.svg}
      </div>
      {row.cont}
    </a>
  </div>
</>));

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full items-center bg-orange dark:orange text-white py-4">
      <div className='flex w-full pl-3 pb-2'>
        <div className='sm:w-2/5' />
        <div className='soma-header-height'>
          {logo.whitetextlogo}
        </div>
      </div>
      {footerRowsJsx}
    </footer>
  );
};

export default Footer;
