import React, {Component} from 'react';
import Header from './HeaderContext';
import ProductList from './ProductListContext';
import OrderContext from './context/OrderContext';

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
        const contextValue = {
            orders,
            addOrder: this.addOrder
        };

        return (
            <div>
                <OrderContext.Provider value={contextValue}>
                    <Header />
                    <ProductList />
                </OrderContext.Provider>
            </div>
        );
    }
    
}

export default Shop;