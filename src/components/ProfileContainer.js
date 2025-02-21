import React, {useState} from "react";
import ProfileCard from "./ProfileCard";
import profilePic from "../assets/profile-pic.jpeg";

const ProfileContainer = () => {
  const employees = [{
    name: "Anchita Shukla",
    title: "Software Engineer",
    department: "Engineering",
    email: "anchita14@gmail.com",
    image: profilePic
  }, {
    name: "Anchita Shukla",
    title: "Data Scientist",
    department: "Technology",
    email: "anchita2003@gmail.com",
    image: profilePic
  }, {
    name: "Anchita Shukla",
    title: "Product Manager",
    department: "Technology",
    email: "anchita.shukla@gmail.com",
    image: profilePic
  }, {
    name: "Anchita Shukla",
    title: "Business Analyst",
    department: "Business",
    email: "anchita@gmail.com",
    image: profilePic
  }, {
    name: "Anchita Shukla",
    title: "Data Analyst",
    department: "Technology",
    email: "anchita_s@gmail.com",
    image: profilePic
  }, {
    name: "Anchita Shukla",
    title: "Financial Analyst",
    department: "Finance",
    email: "anchita03@gmail.com",
    image: profilePic
  }];

  const [currIndex, setCurrIndex] = useState(0);

  const nextEmployee = () => {
    setCurrIndex((currIndex + 1) % employees.length);
  };

  const prevEmployee = () => {
    setCurrIndex((currIndex - 1 + employees.length) % employees.length);
  }

  return (<div className="profile-container">
    <ProfileCard
        name={employees[currIndex].name}
        title={employees[currIndex].title}
        department={employees[currIndex].department}
        email={employees[currIndex].email}
        image={employees[currIndex].image}
    />
    <div className="button-container">
      <button onClick={prevEmployee}>Previous Employee</button>
      <button onClick={nextEmployee}>Next Employee</button>
    </div>
  </div>);

};

export default ProfileContainer;