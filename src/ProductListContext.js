import React from 'react';
import Product from './ProductContext';

const products = [
    { id: 1, name: '牛'},
    { id: 2, name: '豬'},
    { id: 3, name: '羊'},
    { id: 4, name: '雞'},
    { id: 5, name: '素'},
]

const ProductList = () => {
    
    return (
        <div>
            <ul>
                { 
                    products.map( item => (
                        <Product key={item.id} {...item} />
                    ))
                }
            </ul>
            
        </div>
    );
};

export default ProductList;