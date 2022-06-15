import React from 'react';
import './index.css';

const DailyBox = (props) => {
    return(
        <div className="DailyBox">
            <img src={props.img} />
            <div className="text-time">
                {props.text}
                <p>{props.time}</p>
            </div>           
        </div>
    )
}

export default DailyBox;