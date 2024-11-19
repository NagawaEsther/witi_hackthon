
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logome from '../logo me.png';
import girlbasketball from '../girlbasketball.jpg'; 

const Dashboard = () => {
    const [netballOpen, setNetballOpen] = useState(false);
    const [footballOpen, setFootballOpen] = useState(false);
    const [volleyballOpen, setVolleyballOpen] = useState(false);

    const toggleNetball = () => {
        setNetballOpen(!netballOpen);
    };

    const toggleFootball = () => {
        setFootballOpen(!footballOpen);
    };

    const toggleVolleyball = () => {
        setVolleyballOpen(!volleyballOpen);
    };

    return (
        <>
            <div className="homecontainer">
                <div className="first-container">
                    <div className="home-title">
                        <h6>Welcome to Hope Field Sports Academy</h6>
                    </div>
                    
                    <br/>
                    <p className="home-subtitle">Unlock Your Potential, Excel in Sports.</p>
                    <p className="home-text">
                        At Hope Field Sports Academy, we're passionate about developing young athletes into champions.
                        With our dedicated coaching staff and state-of-the-art facilities, we provide a nurturing environment
                        where athletes can thrive and excel in their chosen sport.
                    </p>
                    <div className="additional-info">
                        <h3 style={{ fontWeight: 'bold', color: '#003366',fontSize:'30px' }}>Available sports activities</h3>
                        <div className="accordion">
                            <div className={`accordion-item ${netballOpen ? 'open' : ''}`}>
                                <div className="accordion-header" onClick={toggleNetball}>
                                    <h4>Netball <span className="accordion-icon">{netballOpen ? '-' : '+'}</span></h4>
                                </div>
                                <div className="accordion-content">
                                <div className="category-list">
                                    {netballOpen && (
                                        <>
                                            <p>Children (4-12 years)</p>
                                            <p>Teenagers (13-19 years)</p>
                                            <p>Adults (20-60 years)</p>
                                        </>
                                    )}
                                </div>
                                </div>
                                <br/>
                                <br/>

                            </div>
                            <div className={`accordion-item ${footballOpen ? 'open' : ''}`}>
                                <div className="accordion-header" onClick={toggleFootball}>
                                    <h4>Football <span className="accordion-icon">{footballOpen ? '-' : '+'}</span></h4>
                                </div>
                                <div className="accordion-content">
                                <div className="category-list">
                                    {footballOpen && (
                                        <>
                                            <p>Children (4-12 years)</p>
                                            <p>Teenagers (13-19 years)</p>
                                            <p>Adults (20-60 years)</p>
                                        </>
                                    )}
                                </div>
                                </div>
                                <br/>
                                <br/>
                                
                            </div>
                            <div className={`accordion-item ${volleyballOpen ? 'open' : ''}`}>
                                <div className="accordion-header" onClick={toggleVolleyball}>
                                    <h4>Volleyball <span className="accordion-icon">{volleyballOpen ? '-' : '+'}</span></h4>
                                </div>
                                <div className="accordion-content">
                                <div className="category-list">
                                    {volleyballOpen && (
                                        <>
                                            <p>Children (4-12 years)</p>
                                            <p>Teenagers (13-19 years)</p>
                                            <p>Adults (20-60 years)</p>
                                        </>
                                    )}
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-container">
                    <div className="my-image">
                        <img src={girlbasketball} alt="Girl playing basketball" className="home-image" />
                    </div>
                    <div className="my-image">
                        <img src={logome} alt="logo me" className="logo-image" />
                    </div>
                    <div className="buttons">
                        <Link to="/signup" className="button">SIGN UP</Link>
                        <Link to="/login" className="button">LOGIN</Link>
                    </div>
                </div>
            </div>
      
            <footer>
                <p>&copy; 2024 Hope Field Sports Academy. All rights reserved.</p>
                <p>Follow us:
                    <a href="https://www.facebook.com/share/Twq8omBJeJzZ8wQs/?mibextid=qi2Omg"><i className="fab fa-facebook"></i> Facebook</a> |
                    <a href="https://x.com/FieldHope63621?t=uqHTTjp-eBYYLJmP4X_k0w&s=09"><i className="fab fa-twitter"></i> Twitter</a> |
                    <a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a>
                </p>
            </footer>
        </>
    );
};

export default Dashboard;
