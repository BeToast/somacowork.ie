import { Product, products } from '@/app/static/pricing';
import React from 'react';
import SomaCard from '../SomaCard';

const PriceGrid: React.FC<{

}> = ({

}) => {
  const cards: React.ReactNode = products.map(prod => (
    <PriceCard 
      key={prod.key}
      product={prod}
    />
  ));

  return (<>
    <div className="grid gap-6 md:grid-cols-2">
      {cards}
    </div>
  </>);
}

const PriceCard: React.FC<{
  product: Product
}> = ({
  product,
}) => {
  return(<>
    <div className='flex flex-col'>
      <div className='flex flex-1 w-full justify-center bg-white'>
        <SomaCard.Frame className='' padding='px-10 pt-8 pb-8'>
          <SomaCard.Head
            size="text-2xl"
            align="text-left"
            txtColor="text-orange"
          >
            {product.title}
            <p className='text-bold text-grey text-base'>
              {product.caption}
            </p>
          </SomaCard.Head>
          <SomaCard.Body
            align="text-left"
            txtColor="text-grey"
          >
            {product.description}
          </SomaCard.Body>
        </SomaCard.Frame> 
      </div>
      <div className='bg-orange text-center w-full py-3'>
        <ul>
          {product.prices.map(cPrice => (
            <li key={cPrice.price} className='text-white text-xl pb-1 last:pb-0'>
              <span className='font-medium '>{cPrice.text ? cPrice.text + ' - ' : ''}</span>
              <span className='font-semibold '> €{cPrice.price}</span>
              <span className='font-semibold '> (ex.VAT)</span>
              <span className='font-medium text-lg'> /month</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>);
}

export default PriceGrid;


const temp: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div className="flex-1 grid">
      <small className="justify-self-end leading-8 text-base text-neutral-800 dark:text-neutral-300">
        peicw
      </small>
    </div>
    <div className="grid flex-0 first:flex-auto pr-1 pl-1">
      <div className="justify-self-end">
        <strong> epicw</strong>
      </div>
    </div>
    <div className="flex-1 even:flex-auto grid">
      <small className="justify-self-start self-end text-base text-neutral-500 dark:text-neutral-300">
        /month + VAT
      </small>
    </div>
  </>);
}

