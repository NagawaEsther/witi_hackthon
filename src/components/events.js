import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './events.css'
import banner from '../banner.jpg'

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <section id="events" className="events">
      <div className="event-form">
        {/* <h2>Upcoming Events</h2> */}
        {/* Tabs for Events */}
        <div className="event-tabs">
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
        </div>

        {/* Event Details */}
        <div className="event-details">
          {activeTab === 'upcoming' && (
            <div className="event-list upcoming-events">
              <h3>Upcoming Events</h3>
              <div className="event-card">
                <img
                  src={banner} // Use the imported image variable
                  alt="Tech Conference 2024"
                  className="event-banner"
                />
                <h4>Tech Conference 2024</h4>
                <p><strong>Date:</strong> January 15, 2024</p>
                <p><strong>Description:</strong> Discover innovations and network with tech leaders.</p>
                {/* RSVP Button */}
                <Link to="https://community.elarian.com/e/mvvvt5/" className="rsvp-btn">RSVP</Link>
              </div>
              <div className="event-card">
                <img
                  src={banner} // Use the imported image variable
                  alt="Coding Bootcamp"
                  className="event-banner"
                />
                <h4>Coding Bootcamp</h4>
                <p><strong>Date:</strong> February 10, 2024</p>
                <p><strong>Description:</strong> Learn coding skills with hands-on workshops.</p>
                {/* RSVP Button */}
                <Link to="https://community.elarian.com/e/mvvvt5/" className="rsvp-btn">RSVP</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
