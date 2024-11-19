import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './events.css';

const EventList = () => {
  const [events, setEvents] = useState(null); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/event/events'); 
        setEvents(response.data.events); 
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]); 
      }
    };

    fetchEvents(); 
  }, []);

  return (
    <div>
      <header>
        <h1>Updates on upcoming events, competitions, and academy news.</h1>
      </header>

      <section id="events-news">
        
        <div className="event-list-container">
          {events === null ? (
            <p>Loading events...</p>
          ) : events.length === 0 ? (
            <p>No events available.</p>
          ) : (
            events.map((event) => (
              <div className="event-item" key={event.id}>
                <div className="event-details">
                  <h3>{event.name}</h3>
                  <p>{event.description}</p>
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p><strong>Registration Required:</strong> {event.registration_required ? 'Yes' : 'No'}</p>
                  {event.max_participants && (
                    <p><strong>Max Participants:</strong> {event.max_participants}</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <footer>
                <p>&copy; 2024 Hope Field Sports Academy. All rights reserved.</p>
                <p>Follow us: 
                    <a href="https://www.facebook.com/share/Twq8omBJeJzZ8wQs/?mibextid=qi2Omg"><i className="fab fa-facebook"></i> Facebook</a> | 
                    <a href="https://x.com/FieldHope63621?t=uqHTTjp-eBYYLJmP4X_k0w&s=09"><i className="fab fa-twitter"></i> Twitter</a> | 
                    <a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a>
                </p> 
            </footer>
    </div>
  );
};

export default EventList;
