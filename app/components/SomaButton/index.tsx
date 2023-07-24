import React, { useEffect } from "react";

const Contact: React.FC<{
  children: React.ReactNode,
  className?: string,
}> = ({
  children,
  className = "",
}) => {
  return(<>
    <div className={className+" shadow-xl border-2 border-white bg-orange hover:bg-orange-dark"}>
      <button className="px-2 py-1">
        <span className="text-white text-xl font-normal">
          {children}
        </span>
      </button>
    </div>
  </>);
}

const SomaButton = { Contact,  }
export default SomaButton;








{/* <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="dark"
      className={buttonClass+" inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"}>
      {children}
    </button> */}