import React, { useMemo } from 'react';

import { getProductsByHome } from '../../selectors/getProductsByHome';
import { ProductCard } from './ProductCard';

export const ProductHome = () => {

    const products = useMemo(()=> getProductsByHome ( ), [ ]);

    // console.log(products);
    
  return (
    <div className='row'>


        
            {
                products.map(product => (
                    <ProductCard key={product.id}
                    
                    { ...product }
                    
                    />
                ))
            }
        




    </div>
  )
}
