import { Align, Size, SomaTextColor } from "@/app/static/enum";


const Frame: React.FC<{
  children: React.ReactNode,
  className?: string,
  padding?: string,
}> = ({
  children,
  className = "",
  padding = "py-14",
}) => {
  return(<>
    <div className={className+" flex flex-col min-w-min "+padding}>
      {children}
    </div>
  </>);
}

const Head: React.FC<{
  children: React.ReactNode,
  size : Size,
  align : Align,
  txtColor : SomaTextColor,
  className?: string,
  padding?: string,
  fadeIn? : boolean,
}> = ({
  children,
  size,
  txtColor,
  align,
  className = "",
  padding = "pb-3",
  fadeIn = true,
}) => {
  return(<>
    <div className={(fadeIn ? "fade-in-hidden " : "")+align+" "+padding+" " +className+" "+size+" font-semibold "+txtColor}>
      {children}
    </div>
  </>);
}

const Body: React.FC<{
  children: React.ReactNode,
  size?: string,
  align : Align,
  txtColor : SomaTextColor,
  fadeIn? : boolean,
}> = ({
  children,
  size = "text-base",
  align,
  txtColor,
  fadeIn = true,
}) => {
  const bodySize =
    align === "text-center" ? (
      "md:w-3/5 sm:w-4/5 pl-5 pr-5"
    ) : (
      ""
    )

  return(<>
    <div className={(fadeIn ? "fade-in-hidden" : "")+" flex w-full "+(align === "text-center" ? "justify-around" : "")}>
      <div className={align+" "+bodySize+" "+txtColor}>
        <p className={size}>{children}</p>
      </div>
    </div>
  </>);
}

const SomaCard = { Frame, Head, Body};
export default SomaCard;