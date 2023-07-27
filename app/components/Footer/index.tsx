import { icons, logo } from "@/app/static/svg";

const footerRows:{key:number, cont:React.ReactNode, svg: JSX.Element}[] = [
  {
    key: 1,
    cont: <p className=''>somacowork@gmail.com</p>,
    svg: icons.email,
  },
  {
    key: 2,
    cont: <a href="tel:+353-86-737-1443">086-737-1443</a>,
    svg: icons.phone,
  },
  {
    key: 3,
    cont: <p className=''>Unit 8, Gáirdín Mhaíre, Moycullen, Galway</p>,
    svg: icons.address,
  },
  {
    key: 4,
    cont: <p className=''>Facebook</p>,
    svg: icons.facebook,
  }
];

const footerRowsJsx: React.ReactNode[] = footerRows.map(row => (<>
  <div key={row.key} className='flex w-full pl-3 space-y-2'>
    <div className='sm:w-2/5' />
    <div className='flex min-w-min'>
      <div className="h-5 w-5 fill-white mr-2">
        {row.svg}
      </div>
      {row.cont}
    </div>
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
