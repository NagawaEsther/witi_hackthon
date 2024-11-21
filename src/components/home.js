import React, { useState, useEffect } from "react";
// import SimpleFooter from "./SimpleFooter";

import "./home.css";
import backgroundImage from "../assets/woman1.jpg";
import image2 from "../assets/woman11.jpg";
import image3 from "../assets/woman15.jpg";
import image4 from "../assets/woman3.jpg";
import image5 from "../assets/woman14.jpg";
import brendaImage from "../assets/brenda.jpg";
import angellahImage from "../assets/angellah.jpg"; // New image for Miss. Angellah
import womanImage from "../assets/woman16.jpg";

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image2, image3, image4, image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="homecontainer">
        {/* Background Section */}
        <div
          className="background-section"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="background-text">
            <h1>Women in Technology</h1>
            <p>
              Unleashing Women's power in Tech through Africa's Talking
              Communications APIs
            </p>
          </div>
        </div>

        {/* Heading Section */}
        <div className="heading-section">
          <h2>What is WIT all about?</h2>
          <p>
            Women in Technology is about empowering, connecting, and celebrating 
                      </p>
          <p> 
          women who are transforming industries through innovation, leadership, and technical 
            expertise.</p>
          <p>Our mission is to close the 
            gender gap in the tech world by providing a platform for 
            women to share their achievements, stories, 
            and contributions to the field.</p>
            <p></p>
            <br></br>
            <p>Through this platform, we aim to amplify voices, highlight role models,</p>
            <p>and serve as a hub for networking, learning, and collaboration. Together, </p>
            <p>we are building a supportive ecosystem where women can not only succeed but also redefine the possibilities in technology.</p>


        </div>

        {/* Image Slider */}
        <div className="slider-container">
          <div
            className="slider"
            style={{ backgroundImage: `url(${images[currentSlide]})` }}
          ></div>
        </div>

        {/* Cards Section */}
        <div className="cards-section">
          <h2>Mentorship and Training Opportunities</h2>
          <div className="cards-container">
            <div className="card">
              <h3>Hackathon & Meetups</h3>
              <p>Connect, compete, and Create through hackathons and meetups.</p><br></br>
              <p>Hackathons are more than just coding challenges—they are opportunities to push your limits, think outside the box, and showcase your skills in a competitive yet supportive environment.</p>
            </div>
            <div className="card">
              <h3>Workshops & Summits</h3>
              <p>Empowerment through workshops and events.</p><br></br>
              <p>Get ready to unlock your full potential! Our dynamic workshops and summits are the perfect </p>
              <p>opportunity for women in tech to dive deep into the latest trends, learn powerful skills, and connect with other talented developers.</p>
            </div>
            <div className="card">
              <h3>Sub-Communities</h3>
              <p>(PyLadies and Django Girls):</p>
              <br></br>
              <p>Learn, Build, and Grow with PyLadies & Django Girls.</p>
              <p>Step into a world of endless possibilities with PyLadies and Django Girls—two</p>
              <p>powerful communities dedicated to empowering women in the tech space.</p>
            </div>
          </div>

          {/* Combined Brenda & Angellah Card */}
          <div className="brenda-card">
            <div className="brenda-content">
              <img src={brendaImage} alt="Miss Brenda" className="brenda-image" />
              <div className="brenda-text">
                <h2>Miss. Brenda Aloyo</h2>
                <p>
                  Brenda is a trailblazer in tech, 
                </p>
                <p>inspiring countless women with
                  </p>
                  <p>her journey. Her expertise</p>
                  <p>lies in software engineering.
                  </p>
                  <p></p>
              </div>
            </div>

            <div className="angellah-content">
              <div className="card-text">
              <img
                src={angellahImage}
                alt="Miss Angellah"
                className="brenda-image"
              />
                <h2>Miss. Angellah</h2>
                <p>
                  Angellah is a visionary leader in 
                </p>
                <p>innovation and
                  entrepreneurship. Her dedication </p>
                  <p>to fostering inclusive
                  environments inspires future leaders.</p>
              </div>
              
            </div>

            <div className="angellah-content">
              <div className="card-text">
              <img
                src={womanImage}
                alt="Miss Angellah"
                className="brenda-image"
              />
                <h2>Miss. Apio Sarah</h2>
                <p>
                  Angellah is a visionary leader in 
                </p>
                <p>innovation and
                  entrepreneurship. Her dedication </p>
                  <p>to fostering inclusive
                  environments inspires future leaders.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Women in Technology. All rights reserved.</p>
        <p>
          Follow us:
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook"></i> Facebook
          </a>{" "}
          |{" "}
          <a href="https://x.com">
            <i className="fab fa-twitter"></i> Twitter
          </a>{" "}
          |{" "}
          <a href="https://instagram.com">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </p>
      </footer>
    </>
  );
};

export default Dashboard;

















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './home.css';

// // Image assets
// import backgroundImage from '../assets/esther.jpg';
// import image2 from '../assets/woman 8.jpg';
// import image3 from '../assets/woman2.jpg';
// import image4 from '../assets/woman3.jpg';

// const Dashboard = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = [image2, image3, image4];

//   // Automatic slider logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//     }, 3000); // Slide changes every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className="homecontainer">
//         {/* Top Background Section */}
//         <div
//           className="background-section"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         >
//           <div className="background-text">
//             <h1>Women in Tech</h1>
//             <p>Empowering with innovating tomorrow</p>
//           </div>
//         </div>

//         {/* Image Slider Section */}
//         <div className="slider-container">
//           <div
//             className="slider"
//             style={{ backgroundImage: `url(${images[currentSlide]})` }}
//           ></div>
//         </div>

//         {/* Cards Section */}
//         <div className="cards-section">
//           <h2>Mentorship and Training Opportunities</h2>
//           <div className="cards-container">
//             <div className="card">
//               <h3>Hackathon & Meetups</h3>
//               <p>Connect, compete, and Create: through hackathons and meetups.</p>
//               <p>Hackathons are more than just coding challenges—they are opportunities to push your limits, think outside the box, and showcase your skills in a competitive yet supportive environment.</p>
//             </div>
//             <div className="card">
//               <h3>Workshops & Summits</h3>
//               <p>Empowerment through workshops and events:</p>
//               <p>Get ready to unlock your full potential! Our dynamic workshops and summits are the perfect opportunity for women in tech to dive deep into the latest trends, learn powerful skills, and connect with other talented developers.</p>
//             </div>
//             <div className="card">
//               <h3>Sub-Communities: PyLadies and Django Girls.</h3>
//               <p>Learn, Build, and Grow: PyLadies & Django Girls</p>
//               <p>Learn, Build, and Grow: PyLadies & Django Girls
//               Step into a world of endless possibilities with PyLadies and Django Girls—two powerful communities dedicated to empowering women in the tech space.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer>
//         <p>&copy; 2024 Women in Technology. All rights reserved.</p>
//         <p>
//           Follow us:
//           <a href="https://www.facebook.com/share/Twq8omBJeJzZ8wQs/?mibextid=qi2Omg">
//             <i className="fab fa-facebook"></i> Facebook
//           </a> |
//           <a href="https://x.com/FieldHope63621?t=uqHTTjp-eBYYLJmP4X_k0w&s=09">
//             <i className="fab fa-twitter"></i> Twitter
//           </a> |
//           <a href="https://instagram.com">
//             <i className="fab fa-instagram"></i> Instagram
//           </a>
//         </p>
//       </footer>
//     </>
//   );
// };

// export default Dashboard;




















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './home.css';
// import logome from '../logo me.png';
// import girlbasketball from '../assets/woman 1.jpg'; 

// const Dashboard = () => {
//     const [netballOpen, setNetballOpen] = useState(false);
//     const [footballOpen, setFootballOpen] = useState(false);
//     const [volleyballOpen, setVolleyballOpen] = useState(false);

//     const toggleNetball = () => {
//         setNetballOpen(!netballOpen);
//     };

//     const toggleFootball = () => {
//         setFootballOpen(!footballOpen);
//     };

//     const toggleVolleyball = () => {
//         setVolleyballOpen(!volleyballOpen);
//     };

//     return (
//         <>
//             <div className="homecontainer">
//                 <div className="second-container">
//                     <div className="my-image">
//                         <img src={girlbasketball} alt="Girl playing basketball" className="home-image" />
//                     </div>

//                     <div className='Word'>
//                         <p>Africa's Talking Women in Technology-WIT<br />
//                         Unleashing Women's Power in Tech Through Africa's Talking Communications APIs
//                         </p>
//                     </div>
//                     <div className="buttons">
//                         <Link to="/signup" className="button">SIGN UP</Link>
//                         <Link to="/login" className="button">LOGIN</Link>
//                     </div>
//                 </div>
//             </div>
      
//             <footer>
//                 <p>&copy; 2024 Hope Field Sports Academy. All rights reserved.</p>
//                 <p>Follow us:
//                     <a href="https://www.facebook.com/share/Twq8omBJeJzZ8wQs/?mibextid=qi2Omg"><i className="fab fa-facebook"></i> Facebook</a> |
//                     <a href="https://x.com/FieldHope63621?t=uqHTTjp-eBYYLJmP4X_k0w&s=09"><i className="fab fa-twitter"></i> Twitter</a> |
//                     <a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a>
//                 </p>
//             </footer>
//         </>
//     );
// };

// export default Dashboard;
