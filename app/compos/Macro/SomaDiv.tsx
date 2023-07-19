import { SomaColor } from "@/app/static/enum";

const SomaDiv: React.FC<{
  children: React.ReactNode,
  className?: string,
  bgColor?: SomaColor,
}> = ({
  children,
  className = "",
  bgColor = SomaColor.White,
}) => {
  return(<>
  <div className={className+" w-full bg-"+bgColor}>
    {children}
  </div>
  </>);
}

export default SomaDiv;