// 核心 package
import React from 'react'; 

// ReactDOM 是把 React 掛載到 DOM 上的 package
import ReactDOM from 'react-dom'; 

// 匯入組件，組件型別為 class
// import List from './List';  
// import Message from './Message';

// ReactDOM.render()
// 把 <List/> 元素放進 id='root' 的 DOM 內
// 第一個參數為 React element => <List/> 為元素，型別為物件，利用組件，建立很多元素
// 第二個參數為 DOM container
// ReactDOM.render(<Message/>, document.getElementById('root')); 
// ReactDOM.render(<List/>, document.getElementById('root')); 

// import Parent from './Parent';  
// ReactDOM.render(<Parent initCount={10}/>, document.getElementById('root')); 

import ParentCommunication from './ParentCommunication';  
ReactDOM.render(<ParentCommunication/>, document.getElementById('root')); 
