import React, { Component, createRef } from 'react';
import propTypes from 'prop-types'; 
import Child from './Child';

// 父層組件要 +1，使用父層自己的方法
// 父層組件內，要將子組件 +1，需找到子組件後，使用子組件內的方法去 +1

class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.initCount
        }
    }

    // 綁定子組件
    childRef = createRef();

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    addCountChild = () => {
        // 找到子組件後，使用子組件內的方法
        this.childRef.current.addCount();
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.addCount}>+ Parent</button>
                <button onClick={this.addCountChild}>+ Child</button>
                <Child ref={this.childRef} addCountParent={this.addCount}></Child>
            </div>
        );
    }
}

Parent.defaultProps = {
    initCount: 0
}

Parent.propTypes = {
    initCount: propTypes.number
}

export default Parent;