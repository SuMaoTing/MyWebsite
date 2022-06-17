import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Website = () => (
    <div className="Website">
        <div className="special">
            <Link to="/" className="specialBackButton"></Link>
            <Link to="/bookmark" className="specialModeBars"></Link>
        </div>
        <h1>社團招生單頁式網站</h1>
        <div className="text">
            <p>當初因為疫情，我所參加社團的學校社團聯展改為線上辦理，因此幹部們規劃了一系列對應方案</p>
            <p>本來線上社團聯展只要求用MarkDown的語法來撰寫介紹，而這個網站會誕生的原因是因為我們在測試過程中偶然發現該平台並未關閉內嵌HTML語法</p>
            <p>於是秉著要比其他社團炫砲的想法，本網站歷時一個月誕生，由於當時我還對JS不熟，主要負責全部的HTML及CSS排版</p>
            <p>另位經驗豐富的夥伴則協助了框架、動畫效果及Slider的撰寫</p>
            <p>這次機會也是我從單純HTML接觸到框架的契機，在此之後我開始學習React框架</p>
        </div>
        <iframe src="https://ntuchorus.netlify.app" ></iframe>
    </div>
    
)

export default Website;