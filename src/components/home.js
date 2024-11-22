import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logome from '../logo me.png';
import girlbasketball from '../sum.jpg'; 

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
                <div className="second-container">
                    <div className="my-image">
                        <img src={girlbasketball} alt="Girl playing basketball" className="home-image" />
                    </div>

                    <div className='Word'>
                        <p>Africa's Talking Women in Technology-WIT<br />
                        Unleashing Women's Power in Tech Through Africa's Talking Communications APIs
                        </p>
                    </div>
                    <div className="buttons">
                        <Link to="/signup" className="button">SIGN UP</Link>
                        <Link to="/login" className="button">LOGIN</Link>
                    </div>
                </div>
            </div>
      
            
        </>
    );
};

export default Dashboard;
