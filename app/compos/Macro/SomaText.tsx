export enum Align {
  Left = "text-left",
  Center = "text-center",
}
export enum Size {
  Primary = "text-5xl",
  Secondary = "text-2xl",
}
export enum Color {
  Default,
  White,
}
interface ColorInterface {
  headerColor: string;
  bodyColor: string;
}

const SomaText: React.FC<{
  align: Align,
  size : Size,
  color: Color,
  header: string,
  body: string,
}> = ({
  align,
  size,
  color,
  header,
  body,
}) => {
  const colorObj: ColorInterface = 
    color === Color.Default ? {
      headerColor: "text-orange",
      bodyColor: "text-grey-text",
    } : {
      headerColor: "text-white",
      bodyColor: "text-white",
    }
    const bodySize =
      align === Align.Center ? (
        "md:w-3/5 sm:w-4/5 pl-5 pr-5"
      ) : (
        ""
      )

  return(<>
    <div className="flex flex-col min-w-min pt-6 pb-6">
      <div className={align+" pb-3"}>
        <p className={size+" font-semibold "+colorObj.headerColor}>
          {header}
        </p>
      </div>
      <div className={"flex w-full "+(align === Align.Center ? "justify-around" : "")}>
        <div className={align+" "+bodySize+" "+colorObj.bodyColor}>
          <p>{body}</p>
        </div>
      </div>
    </div>
    
  </>);
}

export default SomaText;