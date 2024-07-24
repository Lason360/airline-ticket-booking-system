import React from 'react';
import '../styles/home.css';
import '../styles/offers.css';

import offer1 from '../assets/images/offer1.jpg';
import offer2 from '../assets/images/offer2.jpg';
import offer3 from '../assets/images/offer3.jpg';

function Card({ imgSrc, title, text, cardColor, titleFontSize }) {
  const cardStyle = {
    backgroundColor: cardColor,
  };
  const titleStyle = {
    fontSize: titleFontSize || '1.2rem',
  };
  const imgStyle = {
    maxWidth: '100%', 
    height: 'auto',   
  };

  return (
    <section className="card" style={cardStyle}>
      <img className="img" src={imgSrc} alt={`${title} Img`} style={imgStyle} />
      <h1 className="cardTitle" style={titleStyle}>
        {title}
      </h1>
      <span className="cardText">{text}</span>
    </section>
  );
}

function Offers() {
  const cardData = [
    {
      imgSrc: offer1,
      title: '5% Off Domestic Flights',
      text: "Book any domestic flight this week and get 20% off your fare. Don't miss this exclusive offer to explore your favorite destinations.",
      cardColor: '#fcf4dd',
    },
    {
      imgSrc: offer2,
      title: "Business Traveler's Special",
      text: 'Frequent business traveler? Join our loyalty program and enjoy exclusive perks, airport lounge access, and discounted business class upgrades.',
      cardColor: '#ddedea',
    },
    {
      imgSrc: offer3,
      title: 'Last-Minute Deals',
      text: 'Spontaneous traveler? Grab last-minute flight deals with discounts on fares departing within the next seven days.',
      cardColor: '#daeaf6',
    },
  ];

  return (
    <main className='main'>
      <h1 className="head">Weekly offers</h1>
      <section className="gridContainer">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            text={card.text}
            cardColor={card.cardColor}
          />
        ))}
      </section>
    </main>
  );
}

export default Offers;
