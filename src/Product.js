import React from 'react';

function Product(props) {
    const {id, name, addOrder} = props;
    
    return (
        <div>
            <li key={id}>{name}<button onClick={()=>addOrder(name)}>+</button></li>
        </div>
        
    );
}

export default Product;