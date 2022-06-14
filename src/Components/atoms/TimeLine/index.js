import React from 'react';
import './index.css';

const TimeLine = (props) => (
        <div className="TimeLine">
            <ul>
                {props.text}
            </ul>
        </div>
)

export default TimeLine;