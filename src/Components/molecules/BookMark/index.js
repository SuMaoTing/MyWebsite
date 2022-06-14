import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const BookMark = () =>(
        <div className="BookMark">
            <Link to="/exp">🏅 學經歷</Link>
            <Link to="/life">🧩 生活雜記</Link>
            <Link to="/photography">📸 攝影作品</Link>
            <Link to="/website_exp">🖥 網站作品</Link>
        </div>
)

export default BookMark;