const OptionCard: React.FC<{
  title: string,
  svg?: string,
  displayText?: string,
  option: string,
  setOption: React.Dispatch<React.SetStateAction<string>>,
}> = ({
  title,
  svg = null,
  displayText = title,
  option,
  setOption,
}) => {
  const handleOptionClick = (optionTitle: string) => {
    setOption(optionTitle);
  };

  const className = (title === option
    ?
      'bg-orange text-white'
    :
      'bg-white hover:border-orange'
    );
  return (<>
    <div 
      className={"flex-col flex-1 justify-items-center border-grey border-2 shadow-md "+className}
      onClick={() => handleOptionClick(title)}  
    >
      {(svg ?
        <img 
          className="w-15 h-15"
          src={svg}
          alt=""
        />
        :
        <></>
      )}
      <p className="text-center">{displayText}</p>
    </div>
  </>);
}

export default OptionCard;