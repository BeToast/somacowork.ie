import dynamic from "next/dynamic";
import React from "react";
const ButtonDy = dynamic(() => import("../app/compos/Micro/Button"), {ssr: false});

import { price } from "@/app/static/pricing";

const PricingCard: React.FC<{
  title: string,
  prices: price[],
  caption: string,
  description: string,
}> = ({
  title,
  prices,
  caption,
  description,
}) => {
  return(<>
    <div className="mb-6 lg:mb-0">
      <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
          <div className="mb-4">
            <p className="mb-2 text-sm uppercase underline underline-offset-8">
              <strong>{title}</strong>
            </p>
            <p className="text-sm">
              {caption}
            </p>
          </div>
          <div className="mb-4">
            {prices.map(currPrice => (
              <h3 key={currPrice.price} className="flex flex-row mb-2 text-3xl">
                {(currPrice.text ? 
                  <div className="flex-1 grid">
                    <small className="justify-self-end leading-8 text-base text-neutral-800 dark:text-neutral-300">
                      {currPrice.text}
                    </small>
                  </div>
                : <></>)}
                <div className="grid flex-0 first:flex-auto pr-1 pl-1">
                  <div className="justify-self-end">
                    <strong> €{currPrice.price}</strong>
                  </div>
                </div>
                <div className="flex-1 even:flex-auto grid">
                  <small className="justify-self-start self-end text-base text-neutral-500 dark:text-neutral-300">
                    /month + VAT
                  </small>
                </div>
              </h3>
            ))}
          </div>
          <ButtonDy
            buttonClass="w-full"
          >
            Book Space
          </ButtonDy>
        </div>
        <div className="p-6">
          <p className="mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  </>);
}

export default PricingCard;