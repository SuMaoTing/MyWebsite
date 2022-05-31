import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const SelfIntro = () => {
    return(
        <div className="SelfIntro">
            <h1>自我介紹</h1>
            <p>嗨，我是EthanSu，輔大物理系學生一枚</p>
            <p>我的興趣廣泛，覺得有趣就學，平時喜歡慢跑、重訓，偶爾游泳</p>
            <p>也喜歡在閒來無事時鑽研電腦知識，我會C++、Python及一點點前端開發，未來希望能點滿fullStack技能樹，成為網頁開發者</p>
            <p>因為覺得音樂劇很酷，所以目前也有在學聲樂，並在合唱團唱唱歌，希望有朝一日能演出音樂劇</p>
            <p>當然，身為物理系學生，我對物理也懷抱著憧憬，雖然被當的一塌糊塗，還是期許物理能成為我的主業</p>
            <p>如果可以，我想要做有關量子計算機的研究</p>
            <br/>
            <p>想寫這個網站是受到一些國外Youtuber的影響，有感於近年來自我行銷的重要</p>
            <p>也是因為意識到社群媒體對言論自由的忽視，而想要寫一個得以發表自由言論的網站</p>
            <p>為自己的生活做些紀錄，讓值得回憶的免於消逝</p>
            <p>或許在這次作業後這個網站會持續擴充、接上後端，甚至是有個專屬域名</p>
            <p>謝謝老師提供了這麼好的動機，讓我得以把我的想法藉由這次機會實現</p>
            <p>本網站係由React.js框架寫成，專案架構參考<a href="https://http://bradfrost.com/blog/post/atomic-web-design/">Atom design</a></p>
            <p>本網站原始碼將在2022年7-8月於我的Github保持公開，專案名稱為MyWebsite</p>
            <div className="icons">
                <a href="https://www.facebook.com/ethancahgvsjb/" id="facebook"><FontAwesomeIcon icon={brands('facebook-square')} /></a>
                <a href="https://www.instagram.com/a_dehumidifier/" id="instagram"><FontAwesomeIcon icon={brands('instagram-square')} /></a>
                <a href="https://github.com/SuMaoTing" id="github"><FontAwesomeIcon icon={brands('github-square')} /></a>
            </div>
        </div>
    )
}

export default SelfIntro;