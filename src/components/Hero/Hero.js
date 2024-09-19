import React from 'react';
import './hero.css';
import padImage from './pad.png'; // Replace with the actual path to your image

const Hero = () => {
  return (
    <div className="center">
      <h1 className="intro">
        revolutionizes <br />menstrual <br />health.   <img src={padImage} alt="" class='pad-image' />
      </h1>
      
      
    </div>
  );
};

export default Hero;