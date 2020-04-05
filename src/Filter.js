import React, { Component } from 'react';
import lessonsData from './data/lessons.json';

class Filter extends Component {
    state = {
        lessons: lessonsData,
        filter: ''
    }

    onChange = (e) => {
        this.setState({
            filter: e.target.value,
        })
    }

    render() {
        const {lessons, filter} = this.state;
         // 依據 key 入的文字改變 lessons // 資料與 filter 全轉成小寫
         const visibleLessons = lessons.filter( lesson => (
            lesson.title.toLowerCase().includes(filter.toLowerCase())
        ));

        return (
            <div>
                <input type="text" value={filter} onChange={this.onChange}/>
                <ol>
                    {visibleLessons.map( lesson => (
                        <li key={lesson.id}>{lesson.title}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default Filter;