import { SomaTextColor } from "@/app/static/enum";

const SomaQuote: React.FC<{
  children: React.ReactNode,
  txtColor: SomaTextColor,
}> = ({
  children,
  txtColor,
}) => {
  return(<>
    <div className="flex items-center justify-center text-center">
      <p className={"pt-14 pb-14 text-3xl font-semibold "+txtColor}>
        {children}
      </p>
    </div>
  </>);
}

export default SomaQuote;