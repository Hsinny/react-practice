import {createContext} from 'react';

const context = createContext({
    orders: [],
    addOrder: () => {}
}); // {} 指定初始值

export default context;
