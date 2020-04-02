import React, { Component } from 'react';

// 子組件內，父層組件要 + 1，要使用父層傳給子組件的方法
// 子組件要 + 1，使用子組件自己的方法
class Child extends Component {

    state = {
        count: 0
    };


    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.props.addCountParent}>+ Parent</button>
                <button onClick={this.addCount}>+ Child</button>
            </div>
        );
    }
}

export default Child;