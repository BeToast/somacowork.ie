import { SomaColor } from "@/app/static/enum";

const SomaQuote: React.FC<{
  children: React.ReactNode,
  txtColor: SomaColor,
}> = ({
  children,
  txtColor,
}) => {
  return(<>
    <div className="flex items-center justify-center text-center">
      <p className={"pt-14 pb-14 text-3xl font-semibold text-"+txtColor}>
        {children}
      </p>
    </div>
  </>);
}

export default SomaQuote;