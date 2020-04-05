import React, { Component } from 'react';
import Course from './Course';

const api = 'https://api.hiskio.com/v1/courses?profession_id=1';

class Courses extends Component {
    state = {
        courses: [],
        nextUrl: null,
        loading: true
    }

    componentDidMount(){
        this.fetchData(api);
        window.addEventListener('scroll', this.onScroll);
    }

    fetchData = (api) => {
        this.setState({
            loading: true
        });

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data=>{
            this.setState({
                // courses: this.state.courses.concat(data.data), // 原本的陣列內容加上新的陣列元素
                courses: [...this.state.courses, ...data.data], // 原本的陣列內容加上新的陣列元素
                nextUrl: data.links.next,
                loading: false
            })
        })
    }

    onScroll = () => {
        const { nextUrl, loading } = this.state;
        console.log(this.state);
        
        // 沒有下一頁或 loading  狀態不判斷捲動狀態
        if((!nextUrl) || loading) {
            return;
        }

        if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 1000) {
            // load next page
            this.fetchData(nextUrl);
        }
    }
    
    render() {
        const { courses } = this.state;
        return (
            <div>
                {
                    courses.map((course, index) => {
                        return( 
                            <p key={course.id}>{course.title}</p>,
                            <Course key={course.id} {...course} />
                        )
                    })
                }
            </div>
        );
    }
}

export default Courses;