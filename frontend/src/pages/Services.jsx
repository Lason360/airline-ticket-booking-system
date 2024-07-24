import React from 'react';
import '../styles/home.css'; 
import '../styles/services.css'; 

import offer1 from '../assets/images/service1.jpg';
import offer2 from '../assets/images/service2.jpg';
import offer3 from '../assets/images/service3.jpg';
import offer4 from '../assets/images/service4.jpg';
import offer5 from '../assets/images/service5.jpg';
import offer6 from '../assets/images/service6.jpg';

function Card_service({ imgSrc, title, text, buttonClass }) {
  const imgStyle = {
    width: '100%', 
    height: 'auto',
  };

  return (
    <section className={`card ${buttonClass}`}>
      <img className="img" src={imgSrc} alt={`${title} Img`} style={imgStyle} />
      <h1 className="cardTitle">{title}</h1>
      <span className="cardText">{text}</span>
    </section>
  );
}

function Services() {
  return (
    <main>
      <h1 className="head">Our Services</h1>
      <section className="gridContainer-services">
        <Card_service
          imgSrc={offer1}
          title="Dynamic Pricing and Discounts"
          text="Our system empowers airlines with real-time dynamic pricing and promotions. Special deals, limited-time offers, and tailored discounts can be set for specific routes and customer groups."
        />
        <Card_service
          imgSrc={offer2}
          title="User-Friendly Interface"
          text="Our Airline Reservation System offers an intuitive, user-friendly interface for easy flight booking. Customers can effortlessly find and book flights, thanks to its streamlined design and simple navigation."
        />
        <Card_service
          imgSrc={offer3}
          title="Robust Reservation Management"
          text="Our system has a powerful reservation management module for efficient booking, including seat management, payments, and e-ticketing."
        />
        <Card_service
          imgSrc={offer4}
          title="Convenient Mobile Booking"
          text="Our mobile app allows travelers to book flights on the go. Whether you're using a smartphone or tablet, you can access our user-friendly app to search for flights, check-in, and manage your reservations with ease."
        />
        <Card_service
          imgSrc={offer5}
          title="24/7 Customer Support"
          text="We pride ourselves on providing exceptional customer support around the clock. Our dedicated team is ready to assist you with any inquiries, booking changes, or travel assistance, ensuring a smooth and stress-free journey."
        />
        <Card_service
          imgSrc={offer6}
          title="Global Destination Network"
          text="With our extensive network of destinations, you can explore the world with ease. We offer flights to diverse locations, from bustling cities to tranquil getaways, allowing you to embark on unforgettable adventures."
        />
      </section>
    </main>
  );
}

export default Services;
