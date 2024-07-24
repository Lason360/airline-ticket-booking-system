import React from 'react';
import '../styles/profile.css'; 

function ProfileCard({ name, role, image }) {
  return (
    <div className="profileCard">
      <img className="profileImage" src={image} alt={`${name} Profile`} />
      <h2 className="profileName">{name}</h2>
      <p className="profileRole">{role}</p>
    </div>
  );
}

export default ProfileCard;
