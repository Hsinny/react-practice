import React, { Component } from 'react';

class ItemObj extends Component {

    render() {
        return (
            <li>{this.props.children}</li>
        );
    }
}

export default ItemObj;