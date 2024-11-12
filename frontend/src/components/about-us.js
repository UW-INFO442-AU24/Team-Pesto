// AboutUs.js
import React from 'react';
import './about-us.css'; // Import the CSS file for styling

const teamMembers = [
    {
        name: "Safa Jamal",
        role: "UX Designer + Front-end Developer",
        imgSrc: "team-member1.jpg",
        linkedIn: "https://www.linkedin.com/in/safa-jamal/"
    },
    {
        name: "Joey Kang",
        role: "Backend Developer",
        imgSrc: "team-member2.jpg",
        linkedIn: "https://www.linkedin.com/in/johnsmith"
    },
    {
        name: "Mynah Shetty",
        role: "UX Designer + Front-end Developer",
        imgSrc: "team-member3.jpg",
        linkedIn: "https://www.linkedin.com/in/emilyjohnson"
    },
    {
        name: "Mira Nair",
        role: "UX Designer + Front-end Developer",
        imgSrc: "team-member3.jpg",
        linkedIn: "https://www.linkedin.com/in/miranair"
    },
    {
        name: "Katie Shi",
        role: "UX Designer + Front-end Developer",
        imgSrc: "team-member5.jpg",
        linkedIn: "https://www.linkedin.com/in/"
    }
];

function AboutUs() {
    return (
        <div className="container">
            <h1>About Us</h1>
            
            {/* Mission Section */}
            <section className="mission">
                <h2>Our Mission</h2>
                <p>Postpartum depression is a serious mental health condition that affects 
                approximately 13% of mothers globally. In developing countries, 
                this number rises to almost 20%. It can have severe consequences for 
                both the mother and the child, impacting bonding, child development, and 
                overall family well-being. This application is designed to support mothers experiencing 
                postpartum depression by providing tools for mood tracking, self-assessment, community support, 
                and access to educational resources.</p>
            </section>
            
            {/* Team Section */}
            <section className="team">
                <h2>Meet the Team</h2>
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.imgSrc} alt={`Photo of ${member.name}`} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default AboutUs;
