import React from 'react';
import OrderContext from './context/OrderContext';

function Header() {
    return (
        <div> 
            <OrderContext.Consumer>
                { value => `購物車(${value.orders.length})`}
            </OrderContext.Consumer>
        </div>
    );
}

export default Header;