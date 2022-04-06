import React, { useMemo } from 'react'
import { getProductsByCategory } from '../../selectors/getProductsByCategory'
import { ProductCard } from './ProductCard';

export const ProductList = ({ category }) => {

    const products = useMemo(()=> getProductsByCategory( category ), [ category ]);

    // const { id, colors } = products;
    // console.log(products);

    
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            
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
