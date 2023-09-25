'use client'

import { analytics } from "@/app/firebase";
import { logEvent } from "firebase/analytics";

import { useEffect } from "react";

const Analytics: React.FC<{
  
}> = ({
  
}) => {
  useEffect(() => {
    console.log("Analytics useEffect called");
    logEvent(analytics!, 'earn_virtual_currency');
  });

  return(<>
    
  </>);
}

export default Analytics;


// 'use client'

// import Script from "next/script"
// import { measurementId } from "../firebase"

// const GoogleAnalytics = () => {
//   return (
//     <>
//       <Script
//           strategy="afterInteractive"
//           src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
//       />
//       <Script
//         id="gtag-init"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${measurementId}', {
//             page_path: window.location.pathname,
//             });
//           `,
//         }}
//       />
//     </>
//   )
// }

// export default GoogleAnalytics