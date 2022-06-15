import {React, useState} from 'react';
import './index.css';

const data = [
    {
        key: 1,
        src: "https://imgur.com/gYyKg3j.jpg",
        discription: "101和紅綠燈[Ilford_HP5]"
    },
    {
        key: 2,
        src: "https://imgur.com/JCdqQ2A.jpg",
        discription: "板橋車站前的天空[Ilford_HP5]"
    },
    {
        key: 3,
        src: "https://imgur.com/n6IWCYm.jpg",
        discription: "咦！車還沒來嗎[kodak_gold_200]"
    },
    {
        key: 4,
        src: "https://imgur.com/lpz2zkk.jpg",
        discription: "印象中是台中千越大樓[kodak_gold_200]"
    },
    {
        key: 5,
        src: "https://imgur.com/ba3UwNi.jpg",
        discription: "臺中車站到了！[kodak_gold_200]"
    },
    {
        key: 6,
        src: "https://imgur.com/6jpxkmc.jpg",
        discription: "綠川橋上的沈思者[kodak_gold_200]"
    },
    {
        key: 7,
        src: "https://imgur.com/ivulFVy.jpg",
        discription: "彩虹[kodak_500T]"
    },
    {
        key: 8,
        src: "https://imgur.com/23iOnTS.jpg",
        discription: "塩田千春展@北美館[kodak_500T]"
    }
]

const Slider = () => {
    const [Id, setId] = useState(0);

    const prev = () =>{
        setId((Id) => (Id > 0 ? Id - 1 : data.length-1));
    }
    const next = () =>{
        setId( (Id) => (Id + 1 < data.length ? Id + 1 : 0));
    }
    const jump = (value) =>{
        setId(value);
    }
    return (
        <div className="Slider">
            <div className="prevContainer" onClick={prev}><div className="prev" ></div></div>
                {data.map((el, id) => (
                    <div   key={el.key}>
                        <div className={`discription ${Id === id ? "discription-active" : ""}`}>
                            <p>{el.discription}</p>
                        </div>
                        <div className={`imgContainer ${Id === id ? "imgContainer-active" : "" }`}>
                            <img src={el.src}/>
                        </div>
                    </div>
                ))}
                <div className="dot">
                    {data.map((el, id) => (
                        <div onClick={()=>(jump(id))} className={`dotContainer ${Id === id ? "dotContainer-active" : ""}`} key={el.key}></div>
                    ))}
                </div>    
            <div className="nextContainer" onClick={next}><div className="next"></div></div>
        </div>
    )
}

export default Slider;