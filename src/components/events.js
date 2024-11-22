import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './events.css';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    // Fetch events from the Flask backend
    fetch('http://127.0.0.1:5000//api/v1/event/events')
      .then((response) => response.json())
      .then((data) => setEvents(data.events))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <section id="events" className="events">
      <div className="event-form">
        <div className="event-tabs">
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
        </div>

        <div className="event-details">
          {activeTab === 'upcoming' && (
            <div className="event-list upcoming-events">
              <h3>Upcoming Events</h3>
              {events.map((event) => (
                <div className="event-card" key={event.id}>
                  <img
                    src={event.image_url || 'default-banner.jpg'} // Fallback to a default image
                    alt={event.name}
                    className="event-banner"
                  />
                  <h4>{event.name}</h4>
                  <p>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p>
                    <strong>Description:</strong> {event.description}
                  </p>
                  {event.rsvp_link && (
                    <Link to={event.rsvp_link} className="rsvp-btn">
                      RSVP
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
