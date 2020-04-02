import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Progress extends Component {
    state = {
         count: 0
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <ProgressBar value={this.state.count}/>
                <button onClick={this.addCount}>+</button>
            </div>
        );
    }
}

export default Progress;