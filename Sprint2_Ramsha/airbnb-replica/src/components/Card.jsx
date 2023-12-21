import React from 'react'
import { cardsData } from './mockAPI'

const Card = () => {
    function SingleCard({ src, title, description, price }) {
      return (
        <div className='card'>
          <img src={src} alt="" />
          <div className="card_info">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
          </div>
        </div>
      );
    }
  
    return (
      <div className="card_container">
        {cardsData.map((item) => (
          <SingleCard
            key={item.id}
            src={item.src}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    );
  };
  
  export default Card;