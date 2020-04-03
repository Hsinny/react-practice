import React, { Component } from 'react';

class Salary extends Component {

    state = {
        month: 0,
        startTime: Date.now(),
        currentTime: Date.now()
    };

   
    componentDidMount() {
        // 每 100 毫秒會執行一次該函式
        setInterval(() => {  
            this.setState({
                currentTime: Date.now()
            })
        }, 100)
    }

    onChange = (e) => {
        this.setState({
            month: parseInt(e.target.value, 10)
        })
    }


    render() {

        const { month, startTime, currentTime } = this.state;
        let hour = parseInt(month / 30 / 8) ;
        let minite = parseInt(hour / 60, 10); 
        let second = minite / 60;
        let spendTime = ((currentTime - startTime) / 1000).toFixed(1); // toFixed(1)顯示到小數點後一位，因單位毫秒而除以 1000 
        let pay = spendTime * second;
        
        return (
            <div>
                <label>月薪</label>
                <input type="number" value={month} onChange={this.onChange} />
                <br/>
                <label>月薪</label>
                <input type="number" value={hour}/>
                <br/>
                <label>分薪</label>
                <input type="number" value={minite}/>
                <br/>
                <label>秒薪</label>
                <input type="number" value={second}/>
                <br/>
                <label>經過時間</label>
                <input type="number" value={spendTime}/>
                <br/>
                <label>賺取薪水</label>
                <input type="number" value={pay}/>
            </div>
        );
    }
}

export default Salary;