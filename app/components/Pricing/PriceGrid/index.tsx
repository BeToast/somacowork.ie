import { Product, products } from '@/app/static/pricing';
import React from 'react';
import SomaCard from '../../SomaCard';

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
        <SomaCard.Frame className='' padding='px-4 sm:px-10 py-8'>
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