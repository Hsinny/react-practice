import React, { Component } from 'react';

class ChildCommunication extends Component {
    render() {
        const { countChild, addCountParent, addCountChild } = this.props;
        return (
            <div>
                <h2>{countChild}</h2>
                <button onClick={addCountParent}>+ Parent</button>
                <button onClick={addCountChild}>+ Child</button>
            </div>
        );
    }
}

export default ChildCommunication;