import { product, products } from '@/app/static/pricing';
import React from 'react';
import PricingCard from '../Medium/PricingCard';

const Pricing: React.FC<{
  title: string
}> = ({
  title,
}) => {
  const productJSX: React.ReactNode = products.map(prod => (
    <PricingCard 
      title={prod.title}
      prices={prod.prices}
      caption={prod.caption}
      description= {prod.description}
    />
  ));

  return (<>
    <section className="mb-32">
      <h2 className="mb-4 text-center text-3xl font-bold">{title}</h2>
      {/* Pills content */}
      <div className="mb-6">
        <div className="grid gap-6 md:grid-cols-2">
          {productJSX}
        </div>
      </div>
    </section>
  </>);
}

export default Pricing;
