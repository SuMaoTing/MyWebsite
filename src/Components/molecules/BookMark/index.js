import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const BookMark = () =>(
        <div className="BookMark">
            <Link to="/exp">ð å­¸ç¶æ­·</Link>
            <Link to="/life">ð§© çæ´»éè¨</Link>
            <Link to="/photography">ð¸ æå½±ä½å</Link>
            <Link to="/website_exp">ð¥ ç¶²ç«ä½å</Link>
            <a href="https://sumaoting.github.io/react-to-do-list/">ðTodo List</a>
        </div>
)

export default BookMark;