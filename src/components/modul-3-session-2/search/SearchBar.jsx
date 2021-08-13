import React from 'react';

export default function SearchBar({data, load, text, handleChange, handleClick}) {
    console.log("succes import")
    return (
        <form>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleClick}>search</button>
            <div className="data">
                <img src={load} alt="" />
                {data}
            </div>
        </form>

    )
}