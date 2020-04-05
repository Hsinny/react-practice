import React from 'react';
import OrderContext from './context/OrderContext';

function Product(props) {
    const {id, name} = props;
    
    return (
        <div>
            <li key={id}>{name}
                <OrderContext.Consumer>
                    { value => 
                        <button onClick={()=>value.addOrder(name)}>+</button>
                    }
                </OrderContext.Consumer>
            </li>
        </div>
        
    );
}

export default Product;