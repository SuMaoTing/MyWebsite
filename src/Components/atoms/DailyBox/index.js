import React from 'react';
import './index.css';

const DailyBox = (props) => {
    return(
        <div className="DailyBox">
            <img src={props.img} />
            <p>{props.text}</p>
        </div>
    )
}

export default DailyBox;