import {React, useState} from 'react';
import './index.css';

const data = [
    {
        key: 1,
        src: "https://imgur.com/gYyKg3j.jpg",
        description: ""
    },
    {
        key: 2,
        src: "https://imgur.com/JCdqQ2A.jpg",
        description: ""
    },
    {
        key: 3,
        src: "https://imgur.com/n6IWCYm.jpg",
        description: ""
    },
    {
        key: 4,
        src: "https://imgur.com/tzdKCdX.jpg",
        description: ""
    },
    {
        key: 5,
        src: "https://imgur.com/ba3UwNi.jpg",
        description: ""
    },
    {
        key: 6,
        src: "https://imgur.com/6jpxkmc.jpg",
        description: ""
    },
    {
        key: 7,
        src: "https://imgur.com/ivulFVy.jpg",
        description: ""
    },
    {
        key: 8,
        src: "https://imgur.com/incNIg4.jpg",
        description: ""
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
                    <div className={`imgContainer ${Id === id ? "imgContainer-active" : "" }`} key={el.key}>
                        <img src={el.src}/>
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