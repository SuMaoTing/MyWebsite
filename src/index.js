import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Layout/Home/index.js';
import Exp from './Layout/Exp/index.js';
import WebsiteExp from './Layout/WebsiteExp/index.js';
import Life from './Layout/Life/index.js';
import Photography from './Layout/Photography/index.js';
import Bookmark from './Components/molecules/BookMark';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename={ process.env.PUBLIC_URL }>
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="exp" element={<Exp/>} />
      <Route path="life" element={<Life/>} />
      <Route path="photography" element={<Photography/>} />
      <Route path="website_exp" element={<WebsiteExp/>} />
      <Route path="bookmark" element={<Bookmark/>} />
    </Routes>
  </BrowserRouter>
);
