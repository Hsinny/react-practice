import React, { Component } from 'react';

class AddTodoList extends Component {
    state = {
        text: '',
        messages: []
    };

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    submit = (e) => {
        e.preventDefault();  // 防止頁面重新載入
        const { text, messages } = this.state;
        this.setState({
            text: '',
            messages: [{id: Date.now(), text: text}, ...messages]  // 新的 text 插入到最前面， ...messages 將之前整個 array 內容放入
        })
    }

    render() {
        const {text, messages} = this.state; 

        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" value={text} onChange={this.onChange} />
                    <button type="submit">送出</button>
                </form>
                <ul>
                    {messages.map((message)=> ( <li key={message.id}>{message.text}</li>))}
                </ul>
            </div>
        );
    }
}

export default AddTodoList;