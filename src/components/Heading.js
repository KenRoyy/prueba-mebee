import React from 'react';

const nameApp = 'mebee';
const divStyle = {
    color: '#fff',
    backgroundColor: '#893594',
    padding: '10px 30px'
}

const Heading = () => {
  return (
    <div>
        <div className='h-screen p-5 hTitle' style={divStyle}>
            <h3>{nameApp}</h3>
        </div>
    </div>
  )
}

export default Heading;