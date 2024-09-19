import React from 'react';
import './about.css';
import Card from '../card/card'; // Import Card component

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="card-wrapper">
        <Card founderIndex={0} /> 
        <Card founderIndex={1} /> 
        <Card founderIndex={0} /> 
        <Card founderIndex={1} />
      </div>
    </div>
  );
};

export default About;
