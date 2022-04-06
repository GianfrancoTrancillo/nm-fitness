import React from 'react';
// import { products } from '../../data/products';

import { nmImages } from '../../helpers/nmImages';
import { ProductHome } from '../products/ProductHome';
// import { ProductCard } from '../products/ProductCard';
import { ProductList } from '../products/ProductList';

export const HomeScreen = () => {

  



  return (
    <div id='home__container' className='d-flex justify-content-center'>
      
      <div>

        <img src={ nmImages('./main.png') } alt='vendas munecas' className='img-fluid w-100 main-img'/>
        <div className='main__caption'>
          <p>Seguridad y comfort garantizados</p>
          <button className='btn btn-outline-dark btn__home'>Ver Todo</button>
        </div>
        

      </div>


      <div className='container-fluid'>
        
        <h3 className='mt-4 mb-4'>Nuevo en Accesorios</h3>
      

        {/* <ProductList category='accesorios'/> */}

        { <ProductHome /> }
            

      </div>

   
  </div>
  )
};


