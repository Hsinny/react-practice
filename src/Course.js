import React, { Component } from 'react';
import style from './Course.module.css';

class Course extends Component {
    render() {
        const { title, headline, image, lecturers } = this.props;
        return (
            <div className={style.course}>
                <img src={image} width="300" height="164" alt="" />
                <div className={style.info}>
                    <h4 className={style.title}>{title}</h4>
                    <p>{headline}</p>
                    { lecturers.map((teacher, index) => (
                        <p key={index} className={style.teacher}>{teacher.username}</p>
                    ))}
                </div>
            </div>
        );
    }
}

export default Course;