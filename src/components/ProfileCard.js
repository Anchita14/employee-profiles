import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({name, title, department, email, image}) => {
  return (<div className="profile-card">
        <img src={image} alt={name}/>
        <h2>{name}</h2>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>);
};

export default ProfileCard;
