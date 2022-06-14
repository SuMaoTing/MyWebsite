import React from 'react';
import './index.css';
import BackButton from '../../atoms/BackButton/index.js';
import DailyBox from '../../atoms/DailyBox/index.js';

const Daily = () =>(
    <div className="Daily">
        <BackButton/>
        <DailyBox img="" text="test"/>
    </div>
)

export default Daily;