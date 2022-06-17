import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const BackButton = () =>
{
    return(
        <div className="BackButtonContainer">
            <Link to="/" className="BackButton"></Link>
            <Link to="/bookmark" className="ModeBars"></Link>
        </div>
        
    )
}

export default BackButton;