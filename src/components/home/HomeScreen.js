import React from 'react';

import { nmImages } from '../../helpers/nmImages';

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

   
  </div>
  )
};


