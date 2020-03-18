import React, { Component } from 'react';

class Message extends Component {
    state = {
        text: '123',
    }

    sayHi = () => {
        this.setState({
            text: 'Hi',
        })
    }

    render() {
        return (
            <div>
                {this.state.text}
                <button onClick={this.sayHi}>Say Hi</button>
            </div>
        );
    }
}

export default Message;