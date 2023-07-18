
import Pricing from "../achive/Pricing";

import dynamic from "next/dynamic";
const ButtonDy = dynamic(() => import("./compos/Micro/Button"), {ssr: false});

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="">
      <h1>hi</h1>
      <ButtonDy>Epic Soma Button</ButtonDy>
    </main>
  )
}