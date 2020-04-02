import React, { Component } from 'react';
import ChildCommunication from './ChildCommunication';

// 子組件的 state 與方法，改放在父層組件控管，子組件只負責呈現上層傳遞的 props
class ParentCommunication extends Component {
    state= {
        parentCount: 0,
        childCount: 0
    }

    addCountParent = () => {
        this.setState({
            parentCount: this.state.parentCount + 1
        })
    }

    addCountChild = () => {
        this.setState({
            childCount: this.state.childCount + 1 
        })
    }

    render() {
        
        return (
            <div>
                <h2>{this.state.parentCount}</h2>
                <button onClick={this.addCountParent}>+ Parent</button>
                <button onClick={this.addCountChild}>+ Child</button>
                <ChildCommunication countChild={this.state.childCount} addCountParent={this.addCountParent} addCountChild={this.addCountChild}></ChildCommunication>
            </div>
        );
    }
}

export default ParentCommunication;