import React, {Component} from 'react';  // import React package

class Item extends Component {           // 宣告一個 component
	render(){
		return (
			<li>{this.props.text}({this.props.price+1})</li>
		)
	}
}

export default Item;