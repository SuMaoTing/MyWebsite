import React from 'react';
import './index.css';
import BookMark from '../../molecules/BookMark/index.js';
import Me from '../../molecules/Me/index.js';

const Sidebar = () =>(
    <div className="Sidebar">
        <Me />
        <BookMark />
        <p>Copyright © 2022 SuMaoTing</p>
    </div>
)

export default Sidebar;