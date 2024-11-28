import React from 'react';
import '../index.css';

// Importing images
import safaImage from '../images.team/safa_picture.jpeg';
import joeyImage from '../images.team/joey_picture.jpeg';
import mynahImage from '../images.team/mynah_picture.jpeg';
import miraImage from '../images.team/mira_picture.jpeg';
import katieImage from '../images.team/katie_picture.jpeg';

// TeamMember Component to display individual team members
const TeamMember = ({ name, role, imgSrc, linkedInUrl }) => {
  return (
    <div className="team-member">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
};

// AboutUs Component to display the entire About Us section
const AboutUs = () => {
  return (
    <div className="container-about-us">
      <h1 className="about-us-h1">About Us</h1>

      {/* Mission Section */}
      <section className="mission">
        <h2 className="about-us-h2">Our Mission</h2>
        <p>
          Postpartum depression is a serious mental health condition that affects 
          approximately 13% of mothers globally. In developing countries, 
          this number rises to almost 20%. It can have severe consequences for 
          both the mother and the child, impacting bonding, child development, and 
          overall family well-being. This application is designed to support mothers experiencing 
          postpartum depression by providing tools for mood tracking, self-assessment, community support, 
          and access to educational resources.
        </p>
      </section>

      {/* Team Section */}
      <h2>Meet the Team</h2>
      <section className="team">
        {/* Team Member 1 */}
        <TeamMember 
          name="Safa Jamal"
          role="UX Designer + Front-end Developer"
          imgSrc={safaImage}
          linkedInUrl="https://www.linkedin.com/in/safa-jamal/"
        />

        {/* Team Member 2 */}
        <TeamMember 
          name="Joey Kang"
          role="Backend Developer"
          imgSrc={joeyImage}
          linkedInUrl="https://www.linkedin.com/in/joey--kang/"
        />

        {/* Team Member 3 */}
        <TeamMember 
          name="Mynah Shetty"
          role="Front-end Developer"
          imgSrc={mynahImage}
          linkedInUrl="https://www.linkedin.com/in/mynahshetty/"
        />

        {/* Team Member 4 */}
        <TeamMember 
          name="Mira Nair"
          role="Front-end Developer"
          imgSrc={miraImage}
          linkedInUrl="https://www.linkedin.com/in/miranair/"
        />

        {/* Team Member 5 */}
        <TeamMember 
          name="Katie Shi"
          role="Front-end Developer"
          imgSrc={katieImage}
          linkedInUrl="https://www.linkedin.com/in/katie-shi-ab4973185/"
        />
      </section>
    </div>
  );
};

export default AboutUs;
