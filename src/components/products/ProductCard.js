import React from 'react';
import $ from 'jquery';


import { nmImages } from '../../helpers/nmImages'



export const ProductCard = ({id, colors, price, description, category}) => {
  

const imgPath = nmImages( `./${ id }.png` );

const arr = [ colors ];

const descriptionVisible = $('.text').addClass('.mas__btn');


  return (

    <div className="col">
        <div class="container">
          <div class="card">
            <div class="imgBx">
              <img src={ imgPath }/>
            </div>
            <div class="contentBx">
              <h2>{ id }</h2>
              <div class="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              <div class="color">
                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
    </div>
  

    )
  }