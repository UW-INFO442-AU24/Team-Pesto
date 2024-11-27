// Importing the images
import safaImage from '../images.team/safa_picture.jpeg';
import joeyImage from '../images.team/joey_picture.jpeg';
import mynhaImage from '../images.team/mynah_picture.jpeg';
import miraImage from '../images.team/mira_picture.jpeg';
import katieImage from '../images.team/katie_picture.jpeg';

function createAboutUsPage() {
    // Create container for the entire page
    const container = document.createElement('div');
    container.classList.add('container-about-us');

    // Title
    const title = document.createElement('h1');
    title.classList.add('about-us-h1');
    title.textContent = 'About Us';
    container.appendChild(title);

    // Mission Section
    const missionSection = document.createElement('section');
    missionSection.classList.add('mission');

    const missionTitle = document.createElement('h2');
    missionTitle.classList.add('about-us-h2');
    missionTitle.textContent = 'Our Mission';
    missionSection.appendChild(missionTitle);

    const missionParagraph = document.createElement('p');
    missionParagraph.textContent =
        'Postpartum depression is a serious mental health condition that affects approximately 13% of mothers globally. In developing countries, this number rises to almost 20%. It can have severe consequences for both the mother and the child, impacting bonding, child development, and overall family well-being. This application is designed to support mothers experiencing postpartum depression by providing tools for mood tracking, self-assessment, community support, and access to educational resources. We aim to create a compassionate space where mothers can feel supported and empowered during one of the most challenging times in their lives.';
    missionSection.appendChild(missionParagraph);
    container.appendChild(missionSection);

    // Team Section
    const teamTitle = document.createElement('h2');
    teamTitle.classList.add('about-us-h2');
    teamTitle.textContent = 'Meet the Team';
    container.appendChild(teamTitle);

    const teamSection = document.createElement('section');
    teamSection.classList.add('team');

    // Team Members Array with imported images
    const teamMembers = [
        {
            name: 'Safa Jamal',
            role: 'UX Designer + Front-end Developer',
            image: safaImage, // imported image
            linkedin: 'https://www.linkedin.com/in/safa-jamal/'
        },
        {
            name: 'Joey Kang',
            role: 'Backend Developer',
            image: joeyImage, // imported image
            linkedin: 'https://www.linkedin.com/in/joey--kang/'
        },
        {
            name: 'Mynah Shetty',
            role: 'Front-end Developer',
            image: mynhaImage, // imported image
            linkedin: 'https://www.linkedin.com/in/mynahshetty/'
        },
        {
            name: 'Mira Nair',
            role: 'Front-end Developer',
            image: miraImage, // imported image
            linkedin: 'https://www.linkedin.com/in/miranair/'
        },
        {
            name: 'Katie Shi',
            role: 'Front-end Developer',
            image: katieImage, // imported image
            linkedin: 'https://www.linkedin.com/in/katie-shi-ab4973185/'
        }
    ];

    teamMembers.forEach(member => {
        const teamMemberDiv = document.createElement('div');
        teamMemberDiv.classList.add('team-member');

        const teamMemberImage = document.createElement('img');
        teamMemberImage.src = member.image;
        teamMemberImage.alt = member.name;
        teamMemberDiv.appendChild(teamMemberImage);

        const teamMemberName = document.createElement('h3');
        teamMemberName.textContent = member.name;
        teamMemberDiv.appendChild(teamMemberName);

        const teamMemberRole = document.createElement('p');
        teamMemberRole.textContent = member.role;
        teamMemberDiv.appendChild(teamMemberRole);

        const teamMemberLink = document.createElement('a');
        teamMemberLink.href = member.linkedin;
        teamMemberLink.target = '_blank';
        teamMemberLink.textContent = 'LinkedIn';
        teamMemberDiv.appendChild(teamMemberLink);

        teamSection.appendChild(teamMemberDiv);
    });

    container.appendChild(teamSection);

    // Add the entire container to the body
    document.body.appendChild(container);
}

function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
    /* Body styling */
    .container-about-us {
        display: flex;
        font-family: Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        flex-direction: column;
        align-items: center;
        color: #333;
        background-color: #f9f9f9;
    }

    /* Title Styling */
    .about-us-h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
        color: #333;
    }

    /* Mission Section */
    .mission {
        margin: 20px 0;
        padding: 20px;
        background-color: #f4f4f4;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .about-us-h2 {
        font-size: 1.8em;
        color: #555;
    }

    .mission p {
        font-size: 1.1em;
        line-height: 1.6;
        color: #666;
    }

    /* Team Section */
    .team {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin-top: 40px;
    }

    /* Team Member Styling */
    .team-member {
        width: 180px;
        text-align: center;
        padding: 10px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .team-member:hover {
        transform: translateY(-5px);
    }

    .team-member img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #ddd;
    }

    .team-member h3 {
        font-size: 1.2em;
        margin: 10px 0 5px;
        color: #333;
    }

    .team-member p {
        font-size: 1em;
        color: #777;
        margin-bottom: 10px;
    }

    .team-member a {
        color: #0077b5;
        text-decoration: none;
        font-size: 0.9em;
    }

    .team-member a:hover {
        text-decoration: underline;
    }
    `;
    document.head.appendChild(style);
}

addStyles();
// Initialize the About Us page
createAboutUsPage();
