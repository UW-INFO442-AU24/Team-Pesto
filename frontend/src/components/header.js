// Create a function to generate the header
function createHeader() {
  // Create the header element
  const header = document.createElement('header');

  // Inline styles for the header
  header.style.backgroundColor = "#4c2d48";
  header.style.color = "white";
  header.style.padding = "10px 20px";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";

  // Create the logo container div
  const logoNavContainer = document.createElement('div');
  logoNavContainer.style.display = "flex";
  logoNavContainer.style.alignItems = "center";

  // Create and style the logo
  const logo = document.createElement('img');
  logo.src = "../../../images/hera_logo.png";
  logo.alt = "hera logo";
  logo.style.fontSize = "24px";
  logo.style.fontWeight = "bold";

  // Append the logo to the logoNavContainer
  logoNavContainer.appendChild(logo);

  // Create the nav element
  const nav = document.createElement('nav');

  // Create the list for navigation links
  const navList = document.createElement('ul');
  navList.style.listStyle = "none";
  navList.style.display = "flex";
  navList.style.gap = "20px";
  navList.style.margin = "0";
  navList.style.padding = "0";

  // Create list items and links for each navigation item
  const links = [
    { text: "Home", href: "/homepage.js" },
    { text: "About Us", href: "/about-us.html" },
    { text: "Resources", href: "./components/resources.html" }
  ];

  links.forEach(link => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = link.href;
    anchor.textContent = link.text;
    anchor.style.color = "white";
    anchor.style.textDecoration = "none";
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
  });

  // Append the navList to the nav element
  nav.appendChild(navList);

  // Create and style the profile icon container
  const profileIconContainer = document.createElement('div');
  profileIconContainer.style.width = "40px";
  profileIconContainer.style.height = "40px";
  profileIconContainer.style.borderRadius = "50%";
  profileIconContainer.style.backgroundColor = "#ffddc1";
  profileIconContainer.style.display = "flex";
  profileIconContainer.style.justifyContent = "center";
  profileIconContainer.style.alignItems = "center";
  profileIconContainer.style.fontSize = "18px";
  profileIconContainer.style.color = "#4c2d48";
  profileIconContainer.style.cursor = "pointer";

  // Create the link for the profile icon
  const profileLink = document.createElement('a');
  profileLink.href = "./profile.html";

  // Create the image for the profile icon
  const profileImage = document.createElement('img');
  profileImage.src = "../../../images/profile_icon.png";
  profileImage.alt = "Profile";
  profileImage.style.width = "100%";
  profileImage.style.height = "100%";
  profileImage.style.borderRadius = "50%";

  // Append the image to the profile link
  profileLink.appendChild(profileImage);

  // Append the profile link to the profileIconContainer
  profileIconContainer.appendChild(profileLink);

  // Append the logoNavContainer, nav, and profileIconContainer to the header
  header.appendChild(logoNavContainer);
  header.appendChild(nav);
  header.appendChild(profileIconContainer);

  // Append the header to the body
  document.body.prepend(header);
}

// Call the function to insert the header
createHeader();
