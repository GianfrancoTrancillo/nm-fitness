import { products } from "../data/products";




export const getProductsById = ( id = '' )=>{

    return products.find( product => product.id === id )


};