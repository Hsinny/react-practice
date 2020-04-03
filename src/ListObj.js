import React, { Component } from 'react';
import ItemObj from './ItemObj';

const info = {
    store: 'Heycafe', 
    drink: 'latte',
    number: 1,
    price: 90 
}

class ListObj extends Component {
    render() {
        return (
            <div>
                {Object.keys(info).map(key => {
                    const value = info[key];
                    return <ItemObj>{key} : {value}</ItemObj>
                })}
            </div>
        );
    }
}

export default ListObj;