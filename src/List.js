import React, {Component} from 'react';
import Item from './Item'; // 匯入同目錄下的 Item.js

class List extends Component {
    render(){
        return (
            <ol>
              <Item text="1" price={100}/>
              <Item text="2" price="100"/>
              <Item text="3"/>
            </ol>
        )
    }
}

export default List;