import React from 'react';
import './index.css';
import BackButton from '../../atoms/BackButton/index.js';

const Website = () => (
    <div className="Website">
        <BackButton/>
        <h1>社團招生單頁式網站</h1>
        <iframe src="https://ntuchorus.netlify.app" ></iframe>
    </div>
    
)

export default Website;