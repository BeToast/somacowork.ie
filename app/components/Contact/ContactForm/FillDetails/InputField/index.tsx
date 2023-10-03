'use client'

import React, { useState } from "react"

const InputField: React.FC<{
  className?: string,
  name: number,
  id: string,
  label: string,
  placeholder?: string,
  hook: any,
  setHook: React.Dispatch<React.SetStateAction<string | null>>,
  regex?: string,
  invalidRegexMsg?: string,
  type?: "input" | "textarea",
  valid?: boolean,
  setValid?: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({
  className,
  id,
  name,
  label,
  placeholder = label,
  hook,
  setHook,
  regex = undefined,
  invalidRegexMsg = undefined,
  type,
  valid = undefined,
  setValid = undefined,
}) => {
  const [validRegex, setValidRegex] = useState<boolean>(true);

  const regexExp = (regex ? new RegExp(regex) : undefined);

  const onBlurHandler = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHook(e.currentTarget.value);
    if(regexExp){
      let isValid = regexExp.test(e.currentTarget.value);
      setValidRegex(isValid);
      (setValid ? setValid(isValid) : null);
    }
  }

  const onKeyDownHandler: any = (e: any) => {
    const focusName: number | undefined = 
      (e.key === "Enter" ? name+1
      : 
      (e.key === "Backspace" && e.currentTarget.value === "") ? name-1 
      : 
        undefined
      );
    
    if (focusName !== undefined){
      e.preventDefault();
      document.getElementById("contactFormInput")?.querySelector<HTMLInputElement>("[name='"+focusName+"']")?.focus();
    }
  }

  // if(id == "phone"){
  //   return(<>
  //     <InputPhone
  //       name={name}
  //       id={id}
  //       label={label}
  //       hook={hook}
  //       setHook={setHook}
  //       type={type}
  //       regex={regex}
  //       invalidRegexMsg={invalidRegexMsg}
  //     />
  //   </>);
  // }
  return(<>
    <label
      htmlFor={id}
      className={(type == "input" ? "" : "md:col-span-2 ")+(validRegex ? " text-grey " : "border-orange ") + (hook ? "border-grey-300 " : "border-grey ") + " relative block border shadow-sm focus-within:border-orange focus-within:border-1 focus-within:ring-orange"}
    >
      {(type == "input" ?
        (<>
          <input
            type="text"
            name={name.toString()}
            id={id}
            className="w-full p-2 pl-[11.5px] peer border-none text-black font-light bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder={placeholder}
            onBlur={onBlurHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span
            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs peer-placeholder-shown:text-grey-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-grey-500 "
          >
            {( validRegex ? label : <span className='text-orange font-medium'>{invalidRegexMsg}</span>)}
          </span>
        </>) : (<>
          <textarea
            name={name.toString()}
            id={id}
            className="w-full p-2 peer border-none text-black font-light bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            rows={4}
            placeholder={label}
            onBlur={onBlurHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span
            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs peer-placeholder-shown:text-grey-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-grey-500 "
          >
            {label}
          </span>
        </>)
      )}
    </label>
  </>);
}

export default InputField;