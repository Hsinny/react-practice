import React from 'react';
import style from './MyButton.module.css';

const MyButton = ({ children }) => {
    return (
        <div>
            <button className={style.btn}>
                <span className={style['btn-txt']}>{children}</span>
            </button>
            <div className={style.big_txt}>big_txt</div>
        </div>
    );
}

export default MyButton;