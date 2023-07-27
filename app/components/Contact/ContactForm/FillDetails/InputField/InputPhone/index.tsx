// 'use client'
// // import PhoneInput from "react-phone-input-2";
// // import "react-phone-input-2/lib/bootstrap.css";

// const InputPhone: React.FC<{
//   className?: string,
//   name: number,
//   id: string,
//   label: string,
//   placeholder?: string,
//   hook: any,
//   setHook: React.Dispatch<React.SetStateAction<string | null>>,
//   regex?: string,
//   invalidRegexMsg?: string,
//   type?: "input" | "textarea"
// }> = ({
//   className,
//   id,
//   name,
//   label,
//   placeholder = label,
//   hook,
//   setHook,
//   regex = undefined,
//   invalidRegexMsg = undefined,
//   type,
// }) => {
//   return(<>
//     <label
//         htmlFor={id}
//         className={(type == "input" ? "" : "md:col-span-2") +" relative block border border-grey shadow-sm focus-within:border-orange focus-within:border-1 focus-within:ring-orange"}
//       >
//       <PhoneInput
//         containerClass="w-full"
//         inputClass="w-full p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
//         country={"ie"}
//         enableSearch={true}
//         value={hook}
//         onChange={(phone) => setHook(phone)}
//       />
//     </label>
//   </>);


//   <>
//     <input
//       type="tel"
//       name={name.toString()}
//       id={id}
//       className=""
//       placeholder={placeholder}
//     />
//     <span
//       className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs peer-placeholder-shown:text-grey-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-black "
//     >
//       {label}
//     </span>
//   </>
// }

// export default InputPhone;


