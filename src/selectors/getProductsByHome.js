import { products } from "../data/products";




export const getProductsByHome = ()=>{


    return products.filter( product => product.home === true);

};