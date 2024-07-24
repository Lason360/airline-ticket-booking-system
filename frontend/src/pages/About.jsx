import React from 'react';
import '../styles/home.css';
import '../styles/about.css'; 
import ProfileCard from '../shared/ProfileCard'; 
import '../styles/profile.css'; 
import backgroundImg from '../assets/images/back.jpg';

import profile11 from '../assets/images/profile1.jpg';
import profile2 from '../assets/images/profile2.jpg';
import profile3 from '../assets/images/profile3.jpg';
import profile4 from '../assets/images/profile4.jpg';
import profile5 from '../assets/images/profile5.jpg';

function Card_about1({ title, text, cardColor, titleFontSize }) {
  const cardStyle = {
    backgroundColor: cardColor,
  };

  const titleStyle = {
    fontSize: titleFontSize || '1.5rem', 
  };

  return (
    <section className="card" style={cardStyle}>
      <h1 className="cardTitle" style={titleStyle}>
        {title}
      </h1>
      <span className="cardText">{text}</span>
    </section>
  );
}


function About() {
  const mainStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
  };

  return (
    <main style={mainStyle}>
      <h1 className="head_about">About us</h1>
      <section className="gridContainer_about1">
        <Card_about1
          title="Vision"
          text="To be the world's preferred airline, known for our commitment to safety, exceptional service, and continuous innovation, making air travel accessible and enjoyable for people around the globe."
          
        />
        <Card_about1
          title="Mission"
          text="Our mission is to connect people, places, and cultures through safe, seamless air travel. We're dedicated to exceptional service, innovative technology, sustainability, and a diverse, passionate team."
        />
        <Card_about1
          title="Values"
          text="At our airline, we value safety, integrity, service, innovation, sustainability, diversity, and global connections. These principles guide our actions and define our commitment to delivering exceptional travel experiences."
        />
      </section>

      <h2 className="head_about">Developers</h2>
      <section className="profileContainer">
        <ProfileCard
          name="Hashini Ranaweera"
          role="Front-end Developer"
          image={profile11}
        />
        <ProfileCard
          name="Developer 2"
          role="Front-end Developer"
          image={profile2}
        />
        <ProfileCard
          name="Developer 3"
          role="Database Manager"
          image={profile3}
        />
        <ProfileCard
          name="Developer 4"
          role="Back-end Developer"
          image={profile4}
        />
        <ProfileCard
          name="Developer 5"
          role="Back-end Developer"
          image={profile5}
        />
      </section>
    </main>
  );
}

export default About;
