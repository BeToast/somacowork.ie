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
  className?: string,
}> = ({
  children,
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
    <div className={className+"  w-28  text-center shadow-xl border-2 border-black bg-transparent hover:bg-orange focus:bg-grey-200"}>
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

// const SubmitForm: React.FC<{
//   children: React.ReactNode,
//   className?: string,
// }> = ({
//   children,
//   className = "",
// }) => {
//   return(<>
//     <div className={className+" shadow-xl border border-black bg-grey-100 hover:bg-grey-200"}>
//       <button className="w-full py-2 ">
//         <span className="text-black text-md font-normal">
//           {children}
//         </span>
//       </button>
//     </div>
//   </>);
// }

const SomaButton = { Contact, SubmitForm }
export default SomaButton;








{/* <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="dark"
      className={buttonClass+" inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"}>
      {children}
    </button> */}