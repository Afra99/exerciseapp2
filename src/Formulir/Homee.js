import React from "react";
import "./Home.css";
import image from './image.jpg';


function Homee() {

    const imgMyimageexample = require('./image.jpg');
    const divStyle = {
        width: '100%',
        height: '800px',
        backgroundImage: `url(${imgMyimageexample})`,
        backgroundSize: 'cover' 
      };
  return (
    
    <div className="page" style={divStyle}>

    </div>
  );
}

export default Homee;