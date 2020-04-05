import React, {Component} from 'react';
import Header from './Header';
import ProductList from './ProductList';

// 資料傳遞與視覺組件綁定太深，程式不好維護或修改
// 跨組件溝通 context API
class Shop extends Component {
    state = {
        orders: []
    }

    addOrder = order => {
        this.setState({
            orders: [...this.state.orders, order]
        })
    }

    render() {
        const { orders } = this.state;
        console.log(orders);
        return (
            <div>
                <Header orders={orders}/>
                <ProductList addOrder={this.addOrder}/>
            </div>
        );
    }
    
}

export default Shop;