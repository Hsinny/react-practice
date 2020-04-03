import React from 'react';
import style from './YourButton.module.css';

const YourButton = ({ children }) => {
    return (
        <div>
            <button className={style.btn}>{children}</button>
        </div>
    );
}

export default YourButton;