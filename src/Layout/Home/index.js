import React from 'react';
import './index.css';
import SelfIntro from '../../Components/molecules/SelfIntro/index.js';
import Sidebar from '../../Components/organisms/Sidebar/index.js';

const Home = () => (
  <div className="Home">
    <Sidebar/>
    <SelfIntro/>
    <div id="pr" className="prodiv"
      onMouseOver={()=>{document.getElementById("pr").style.opacity = '1'}}
      onMouseOut={()=>{document.getElementById("pr").style.opacity = '0'}}
      onClick={()=>{window.open('https://sumaoting.github.io/MyWebsite/proposal/proposal.html', '_blank')}}>網站企劃書</div>
  </div>
)

export default Home;