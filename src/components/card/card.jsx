import React, { useState } from 'react';
import './card.css';
import Umair from '../../assets/umair.jpg';
import Harman from '../../assets/founder2.jpg'; // Replace with actual path

const Card = ({ founderIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const founders = [
    {
      name: 'Md Umair',
      image: Umair,
      details: 'Details about Founder 1',
    },
    {
      name: 'Harman Nanda',
      image: Harman,
      details: 'Details about Founder 2',
    },
  ];

  const founder = founders[founderIndex]; // Select founder based on passed index

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-content">
          <div className="front">
            <img className="img" src={founder.image} alt={founder.name} />
          </div>
          <div className="back">
            <h2>{founder.name}</h2>
            <p>{founder.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
