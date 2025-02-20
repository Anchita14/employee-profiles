import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import profilePic from "../assets/profile-pic.jpeg";

const ProfileContainer = () => {
  const employees = [
    {
      id: 1,
      name: "Anchita Shukla",
      title: "Software Engineer",
      department: "Technology",
      email: "anchita14@gmail.com",
      image: profilePic
    },
    {
      id: 2,
      name: "Anchita Shukla",
      title: "Data Scientist",
      department: "Technology",
      email: "anchita14@gmail.com",
      image: profilePic
    },
    {
      id: 3,
      name: "Anchita Shukla",
      title: "Product Manager",
      department: "Technology",
      email: "anchita14@gmail.com",
      image: profilePic
    }
  ];


  const[currIndex, setCurrIndex] = useState(0);
  const nextEmployee = () => {
    setCurrIndex((currIndex + 1) % employees.length);
  };


  return (
      <div>
        <h2>Employee Profiles</h2>
        <ProfileCard
            name={employees[currIndex].name}
            title={employees[currIndex].title}
            department={employees[currIndex].department}
            email={employees[currIndex].email}
            image={employees[currIndex].image}
        />
        <button onClick={nextEmployee}>Next Employee</button>
      </div>
  );

};

export default ProfileContainer;