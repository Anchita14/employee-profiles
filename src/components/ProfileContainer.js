import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import profilePic from "../assets/profile-pic.jpeg";
import "./ProfileContainer.css";


const ProfileContainer = () => {
  const employees = [
    {
      name: "Anchita Shukla",
      title: "Software Engineer",
      department: "Engineering",
      email: "anchita14@gmail.com",
      image: profilePic
    },
    {
      name: "Anchita Shukla",
      title: "Data Scientist",
      department: "Technology",
      email: "anchita2003@gmail.com",
      image: profilePic
    },
    {
      name: "Anchita Shukla",
      title: "Product Manager",
      department: "Technology",
      email: "anchita.shukla@gmail.com",
      image: profilePic
    },
    {
      name: "Anchita Shukla",
      title: "Business Analyst",
      department: "Business",
      email: "anchita@gmail.com",
      image: profilePic
    },
    {
      name: "Anchita Shukla",
      title: "Data Analyst",
      department: "Technology",
      email: "anchita_s@gmail.com",
      image: profilePic
    },
    {
      name: "Anchita Shukla",
      title: "Financial Analyst",
      department: "Finance",
      email: "anchita03@gmail.com",
      image: profilePic
    }
  ];

  const [viewMode, setViewMode] = useState("scroll");
  const [currIndex, setCurrIndex] = useState(0);

  const showScrollView = () => setViewMode("scroll");
  const showListView = () => setViewMode("list");

  const nextEmployee = () => setCurrIndex((currIndex + 1) % employees.length);
  const prevEmployee = () => setCurrIndex((currIndex - 1 + employees.length) % employees.length);

  return (
      <div className="profile-container">

        <div className="view-toggle">
          <button onClick={showScrollView} className={viewMode === "scroll" ? "active" : ""}>Scroll View</button>
          <button onClick={showListView} className={viewMode === "list" ? "active" : ""}>List View</button>
        </div>

        {viewMode === "scroll" && (
            <div className="profile-wrapper">
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
            </div>
        )}

        {viewMode === "list" && (
            <div className="profile-list">
              {employees.map((employee) => (
                  <ProfileCard
                      name={employee.name}
                      title={employee.title}
                      department={employee.department}
                      email={employee.email}
                      image={employee.image}
                  />
              ))}
            </div>
        )}

      </div>
  );
};

export default ProfileContainer;
