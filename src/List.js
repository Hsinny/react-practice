import React, {Component} from 'react';
import Item from './Item'; // 匯入同目錄下的 Item.js

class List extends Component {
    render(){
        return (
            <ol>
              <Item/>
              <Item/>
              <Item/>
            </ol>
        )
    }
}

export default List;