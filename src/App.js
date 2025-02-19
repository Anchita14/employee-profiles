import React from "react";
import ProfileCard from "./components/ProfileCard";
import profilePic from "./assets/profile-pic.jpeg";

function App() {
    return (
        <div>
            <h1>Employee Profiles</h1>
            <ProfileCard
                name = "Anchita Shukla"
                title = "Software Engineer"
                department = "Technology"
                email = "anchita14@gmail.com"
                image = {profilePic}
            />
        </div>
    );
}

export default App;
