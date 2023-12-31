const OptionCard: React.FC<{
  className?: string;
  title: string,
  svg?: React.ReactNode,
  displayText?: string,
  option: string,
  setOption: React.Dispatch<React.SetStateAction<string>>,
}> = ({
  className,
  title,
  svg = null,
  displayText = title,
  option,
  setOption,
}) => {
  const handleOptionClick = (optionTitle: string) => {
    setOption(optionTitle);
  };

  const selectedClass = (title === option
    ?
      'bg-orange-desaturate text-white fill-white'
    :
      'bg-white hover:border-orange hover:fill-orange'
    );

    const hoverClass = (svg ? '' : 'hover:underline decoration-orange underline-offset-2 decoration-1');
  return (<>
    <div 
      className={hoverClass+" "+className+" flex-col flex-1 justify-items-center border-grey border shadow-md "+selectedClass}
      onClick={() => handleOptionClick(title)}  
    >
      {(svg ?
        <div className="flex justify-center items-center">
          <div className="w-2/5 max-w-[100px] p-2">
            {svg}
          </div>
        </div>
        :
        <></>
      )}
      <p className="text-center text-md">{displayText}</p>
    </div>
  </>);
}

export default OptionCard;