import React, { useState } from 'react';
import axios from 'axios';


export default function Trending() {
    const [text, setText] = useState('');
    const [data, setData] = useState("");
    const [load, setLoad] = useState(false);

    const key =  process.env.REACT_APP_GIPHY_KEY;

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleClick = async () => {
        setLoad(true);
        try {
            const response = await axios.get(
                `https://api.giphy.com/v1/gifs/trending`
            );
            console.log(response);
            const mapData = response.data.data;
            setData(
                mapData.map((gif, index) => {
                    return (
                        <img key={index} src={gif.images.preview_gif.url} />
                    )
                })
            ) 
            setLoad(false);
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <div className="result">
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleClick}>cari</button>
            <div className="data">
                <img src={load} alt="" />
                {data}
            </div>
            
        </div> 
    )
}