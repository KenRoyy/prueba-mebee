import React from "react";

const imgStyle = {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column'
}

const Image = () => {
    return (
        <div style={imgStyle}>
            {/* <img src="https://api.deezer.com/album/72000342/image"/> */}
            <p>User</p>
            <img src="https://picsum.photos/250/250"/>
            <h2>Title</h2>
        </div>
    );
}

export default Image;