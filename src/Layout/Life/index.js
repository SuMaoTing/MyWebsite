import React from 'react';
import './index.css';
import Sidebar from '../../Components/organisms/Sidebar/index.js';
import Daily from '../../Components/molecules/Daily/index.js';

const Life = () => (
    <div className="Life">
        <Sidebar/>
        <Daily/>
    </div>
)

export default Life;