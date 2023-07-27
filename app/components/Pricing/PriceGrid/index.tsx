import { Product, products } from '@/app/static/pricing';
import React from 'react';
import SomaCard from '../../SomaCard';
import PriceCard from './PriceCard';

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

export default PriceGrid;