import React, { useEffect } from "react";

const Contact: React.FC<{
  children: React.ReactNode,
  className?: string,
}> = ({
  children,
  className = "",
}) => {
  return(<>
    <a href="#contact">
      <div className={className+" w-28 text-center shadow-xl border-2 border-white bg-transparent hover:bg-orange-dark"}>
        <button className="px-2 py-1">
          <span className="text-white text-xl font-normal">
            {children}
          </span>
        </button>
      </div>
    </a>
  </>);
}

const SubmitForm: React.FC<{
  children: React.ReactNode,
  onClick: Function,
  className?: string,
}> = ({
  children,
  onClick,
  className = "",
}) => {
  const name = 5;

  const onKeyDownHandler: any = (e: any) => {
    if(e.key === "Enter"){
      console.log("form submitted");
    } 
    else if (e.key === "Backspace"){
      document.getElementById("contactFormInput")?.querySelector<HTMLInputElement>("[name='"+(name-1)+"']")?.focus();
    }
  }

  return(<>
    <div 
      className={className+"  w-28  text-center shadow-xl border-2 border-black bg-transparent hover:bg-orange focus:bg-grey-200"}
      onClick={() => onClick()}  
    >
      <button 
        className="w-full py-2 "
        name={name.toString()}
        onKeyDown={onKeyDownHandler}
      >
        <span className="text-black text-xl font-normal px-2">
          {children}
        </span>
      </button>
    </div>
  </>);
}

const SomaButton = { Contact, SubmitForm }
export default SomaButton;