
import Pricing from "./compos/Macro/Pricing";

import dynamic from "next/dynamic";
const ButtonDy = dynamic(() => import("./compos/Micro/Button"), {ssr: false});

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="">
      <h1>im home honey!</h1>
      <ButtonDy>Epic Soma Button</ButtonDy>
      <Pricing title={"Pricing"}/>
    </main>
  )
}