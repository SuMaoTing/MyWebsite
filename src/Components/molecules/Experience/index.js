import React from 'react';
import './index.css';
import BackButton from '../../atoms/BackButton/index.js';
import TimeLine from '../../atoms/TimeLine/index.js';

const Experience = () =>{
    const LearningExperience = [
    <li>
        <div className="TimeBox">2014-2017, JSJH</div>
    </li>,
    <li>
        <div className="TimeBox">2017-2020, TCFSH</div>
    </li>,
    <li>
        <div className="TimeBox">2020-, FJU</div>
    </li>
    ]

    const LeaderExperience = [
    <li>
        <div className="TimeBox">aaa</div>
    </li>,
    <li>
        <div className="TimeBox">aaa</div>
    </li>
    ]

    return(
        <div className="Experience">
            <BackButton/>
            <div className="UpperContainer">
                <div>
                    <h1>學歷</h1>
                    <TimeLine text={LearningExperience}/>
                </div>
                <div>
                    <h1>幹部經歷</h1>
                    <TimeLine text={LeaderExperience}/>
                </div>
            </div>
            <div className="BottonContainer">
                <h1>獲獎</h1>
            </div>
        </div>
    )
}


export default Experience;