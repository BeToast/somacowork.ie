import React from "react"

const InputField: React.FC<{
  className?: string,
  id: string,
  label: string,
  placeholder?: string,
  setHook: React.Dispatch<React.SetStateAction<string | null>>,
  regex?: string,
  type?: "input" | "textarea"
}> = ({
  className,
  id,
  label,
  placeholder = label,
  setHook,
  regex,
  type,
}) => {
  return(<>
    <label
      htmlFor={id}
      className={(type == "input" ? "" : "md:col-span-2") +" relative block border border-grey shadow-sm focus-within:border-orange focus-within:border-1 focus-within:ring-orange"}
    >
      {(type == "input" ?
        (<>
          <input
            type="text"
            id={id}
            className="w-full p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder={placeholder}
          />
          <span
            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs peer-placeholder-shown:text-grey-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-black "
          >
            {label}
          </span>
        </>) : (<>
          <textarea
            id={id}
            className="w-full p-2 peer border-none font-light bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder={label}
          />
          <span
            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs peer-placeholder-shown:text-grey-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-black "
          >
            {label}
          </span>
        </>)
      )}
    </label>
  </>);
}

export default InputField;