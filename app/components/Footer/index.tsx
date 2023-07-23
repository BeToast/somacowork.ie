const footerRows:{key:number, cont:React.ReactNode}[] = [
  {
    key: 1,
    cont: <p className=''>somacowork@gmail.com</p>,
  },
  {
    key: 2,
    cont: <a href="tel:+353-86-737-1443">086-737-1443</a>,
  },
  {
    key: 3,
    cont: <p className=''>Unit 8, Gáirdín Mhaíre, Moycullen, Galway</p>,
  },
  {
    key: 4,
    cont: <p className=''>Facebook</p>,
  }
];

const footerRowsJsx: React.ReactNode[] = footerRows.map(row => (
  <div key={row.key} className='flex w-full pl-3 pb-1'>
    <div className='sm:w-2/5'></div>
    <div className='min-w-min'>
      {row.cont}
    </div>
  </div>
));

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full items-center bg-orange dark:orange text-white pt-1 pb-1">
      <div className=''>
      <>SOMA LOGO HERE</>
      </div>
      {footerRowsJsx}
    </footer>
  );
};

export default Footer;
