import React from "react";
import Image from "./Image";

const styleList = {
    backgroundColor: '0f0e14',
    displey: 'flex',
    flexDirection: 'row'
}

const ListSongs = () => {
    return (
        <div style={styleList}>
            <div>
                <img 
                src="https://picsum.photos/100/100"/>
                <p>title</p>
                <p>album</p>
                <p>user</p>
            </div>
            <div 
            className="list-songs align-self-right">
                <img 
                src="https://picsum.photos/100/100"/>
                <p>title</p>
                <p>album</p>
                <p>user</p>
            </div>
            <div 
            className="list-songs align-self-right">
                <img 
                src="https://picsum.photos/100/100"/>
                <p>title</p>
                <p>album</p>
                <p>user</p>
            </div>
        </div>
    )
}

export default ListSongs;