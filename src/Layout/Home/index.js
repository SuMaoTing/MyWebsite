import React from 'react';
import './index.css';
import SelfIntro from '../../Components/molecules/SelfIntro/index.js';
import Sidebar from '../../Components/organisms/Sidebar/index.js';

const Home = () => (
  <div className="Home">
    <Sidebar/>
    <SelfIntro/>
  </div>
)

export default Home;