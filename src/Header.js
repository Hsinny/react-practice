import React from 'react';

function Header(props) {
    return (
        <div>
            購物車(<span>{props.orders.length}</span>)
        </div>
    );
}

export default Header;