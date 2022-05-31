import React from 'react';
import './index.css';
import Sidebar from '../../Components/organisms/Sidebar/index.js';
import Website from '../../Components/molecules/Website';

const WebsiteExp = () =>(
    <div className="WebsiteExp">
        <Sidebar/>
        <Website/>
    </div>
)

export default WebsiteExp;