import { products } from "../data/products";




export const getProductsByCategory = ( category )=>{

    return products.filter( product => product.category === category);

};