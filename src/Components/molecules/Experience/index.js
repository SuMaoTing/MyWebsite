import React from 'react';
import './index.css';
import BackButton from '../../atoms/BackButton/index.js';
import TimeLine from '../../atoms/TimeLine/index.js';

const Experience = () =>{
    const LearningExperience = [
    <li>
        <div className="TimeBox">2014-2017, JSJH，國中的我就是個書呆子，只求考上理想的學校</div>
    </li>,
    <li>
        <div className="TimeBox">2017-2020, TCFSH，國中的努力到了這邊有了些許回報，不過高中的我熱衷於社團，導致課業一落千丈</div>
    </li>,
    <li>
        <div className="TimeBox">2020-, FJU，而如今，我想在大學做些什麼，來填補高中的缺憾...</div>
    </li>
    ]

    const LeaderExperience = [
    <li>
        <div className="TimeBox">2021, Arduino營隊講師</div>
    </li>,
    <li>
        <div className="TimeBox">2021, 社團公關資料部長</div>
    </li>,
    <li>
        <div className="TimeBox">2022, 社團團務秘書（藝術行政）</div>
    </li>
    ]

    return(
        <div className="Experience">
            <BackButton/>
            <div className="TimelineContainer">
                <div>
                    <h1>學歷</h1>
                    <TimeLine text={LearningExperience}/>
                </div>
                <div>
                    <h1>幹部經歷</h1>
                    <TimeLine text={LeaderExperience}/>
                </div>
            </div>
        </div>
    )
}


export default Experience;