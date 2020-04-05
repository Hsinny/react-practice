import React from 'react';
import Product from './Product';

const products = [
    { id: 1, name: '牛'},
    { id: 2, name: '豬'},
    { id: 3, name: '羊'},
    { id: 4, name: '雞'},
    { id: 5, name: '素'},
]

const ProductList = props => {
    const {addOrder} = props;

    return (
        <div>
            <ul>
                { 
                    products.map( item => (
                        <Product key={item.id} {...item} addOrder={addOrder}/>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default ProductList;