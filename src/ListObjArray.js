import React, { Component } from 'react';


const info = [
    { label: 'store',  value: 'Heycafe' }, 
    { label: 'drink',  value: 'latte' },
    { label: 'number', value: 1 },
    { label: 'price',  value: 90 } 
]

// class ListObjArray extends Component {
//     render() {
//         return (
//             <div>
//                 {info.map(item=>{
//                     return <li>{item.label} : {item.value}</li>
//                 })}
//             </div>
//         );
//     }
// }

class ListObjArray extends Component {
    render() {
        return (
            <div>
                {info.map( ({ label, value}) =>{  // item 為一個 obj 使用解構
                    return <li>{label} : {value}</li>
                })}
            </div>
        );
    }
}

// const info = [
//     { store: 'Heycafe' }, 
//     { drink: 'latte' },
//     { number: 1 },
//     { price: 90 } 
// ]

// class ListObjArray extends Component {
//     render() {
//         return (
//             <div>
//                 { info.map( (item) => {
//                     // obj { store: 'Heycafe' }
//                     return Object.keys(item).map(key => {
//                         const value = item[key];
//                         return <li>{key} : {value}</li>
//                     }) 
//                 })}
//             </div>
//         );
//     }
// }

export default ListObjArray;