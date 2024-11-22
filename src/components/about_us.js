
import React from 'react';
import './about_us.css';
import aboutImage from '../about_us_2.jpg';


const AboutUs = () => {
    return (
        <>
            <header>
                <h1>About Hope Field Sports Academy</h1>
            </header>
            
            <div className="about-us-container">
                <img src={aboutImage} alt="About Us" className="about-us-image" />
                <div className="about-us-content">
                    <section className="about-section">
                    <h2>ABOUT US</h2>
                        <ul>
                             <li>Thi is our maiden journey into talent searching while promoting education .</li>
                        </ul>

                    </section>

                    <section className="values-section">
                        <h2>OUR VALUES</h2>
                        <ul>
                            <li>Excellence: We strive for excellence in everything we do, from coaching to training to competition.</li>
                            <li>Inclusion: We believe that sports should be accessible to all, regardless of age, gender, or ability.</li>
                            <li>Respect: We foster a culture of respect, where every student feels valued and supported.</li>
                            <li>Fun: We believe that sports should be enjoyable, and we strive to create a positive and uplifting environment for all our students.</li>
                        </ul>
                    </section>

                    <section className="mission-section">
                    <h2>OUR MISSION</h2>
                    <ul>
                     <li>
                            Our mission is to provide exceptional athletic training and development opportunities that empower individuals to achieve their highest potential in sports and life.
                            </li>
                        </ul>

                    </section>

                    <section className="vision-section">
                    <h2>OUR VISION</h2>
                   <ul>
                        <li>
                           Our vision is to identify and nurture the untapped talent in order to make it known to the world.
                            </li>
                         </ul>

                    </section>

                    <section className="team-section">
                    <h2>OUR TEAM</h2>

                <ul>
                    <li>We have experienced and dedicated coaches, trainers, and staff who are committed to helping you succeed.</li>    
                </ul>
                    </section>

                    
                </div>
            </div>

        </>
    );
};

export default AboutUs;
