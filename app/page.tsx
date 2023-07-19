import dynamic from "next/dynamic";
import SomaImage from "./compos/Macro/SomaImage";
import SomaText, { Align, Color, Size } from "./compos/Macro/SomaText";
import { SomaColor } from "./static/enum";
import SomaDiv from "./compos/Macro/SomaDiv";
import SomaQuote from "./compos/Macro/SomaQuote";
const ButtonDy = dynamic(() => import("./compos/Micro/Button"), {ssr: false});

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex flex-col">
      <div className="h-80">
        <SomaImage src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"/>
      </div>
      <SomaDiv className="pb-4">
        <SomaText 
          align={Align.Center}
          size={Size.Primary}
          color={Color.Default}
          header={"Welcome"}
          body={"Embrace the power of collaboration at Soma Coworking, where innovation meets community in the heart of Moycullen. Step into our dynamic space, where professionals from diverse careers unite to create, connect, and thrive. Ignite your creativity and cultivate meaningful connections as you tap into collective wisdom and expand your horizons within an environment that nurtures your professional journey."} 
        />
      </SomaDiv>
      <SomaDiv bgColor={SomaColor.Orange}>
        <SomaQuote txtColor={SomaColor.White}>
          „I have never worked in a better environment.“
        </SomaQuote>
      </SomaDiv>
      <SomaDiv className="flex">
        <div className="w-2/5">
          <SomaImage src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"/>
        </div>
        <div className="w-3/5 pl-8">
          
        <SomaText 
          align={Align.Left}
          size={Size.Primary}
          color={Color.Default}
          header={"About"}
          body={"At Soma, we are proud to be part of the vibrant community of Moycullen, Galway. We believe that great ideas can come from anywhere, and our mission is to provide a collaborative environment that nurtures innovation and fosters connections."}
        />
        </div>
      </SomaDiv>
      
    </main>
  )
}