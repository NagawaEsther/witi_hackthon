import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventUpdate = () => {
  const [eventId, setEventId] = useState('');
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token] = useState(sessionStorage.getItem('token'));

  useEffect(() => {
    setFormData(null);
  }, [eventId]);

  const fetchEventById = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/v1/event/event/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching event:', error.response ? error.response.data : error.message);
      setError('Error fetching event. Please check the ID and try again.');
      setFormData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setEventId(e.target.value);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`http://127.0.0.1:5000/api/v1/event/event/${eventId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFormData(response.data);
      alert('Event updated successfully!');
    } catch (error) {
      console.error('Error updating event:', error.response ? error.response.data : error.message);
      setError('Error updating event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section id="event-details">
        <h2>Update Event by ID</h2>
        <div>
          <input
            type="text"
            placeholder="Enter Event ID"
            value={eventId}
            onChange={handleInputChange}
          />
          <button onClick={fetchEventById} disabled={loading}>
            {loading ? 'Fetching...' : 'Fetch Event'}
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {formData && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="eventName">Event Name:</label>
              <input
                type="text"
                id="eventName"
                name="name"
                value={formData.name || ''}
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="eventDescription">Event Description:</label>
              <textarea
                id="eventDescription"
                name="description"
                value={formData.description || ''}
                onChange={handleFieldChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="eventDate">Event Date:</label>
              <input
                type="date"
                id="eventDate"
                name="date"
                value={formData.date || ''}
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="eventTime">Event Time:</label>
              <input
                type="time"
                id="eventTime"
                name="time"
                value={formData.time ? formData.time.slice(0, 5) : ''}
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="eventLocation">Event Location:</label>
              <input
                type="text"
                id="eventLocation"
                name="location"
                value={formData.location || ''}
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="registration_required"
                  checked={formData.registration_required || false}
                  onChange={(e) => setFormData({ ...formData, registration_required: e.target.checked })}
                />
                Registration Required
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="maxParticipants">Max Participants:</label>
              <input
                type="number"
                id="maxParticipants"
                name="max_participants"
                value={formData.max_participants || ''}
                onChange={handleFieldChange}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update Event'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default EventUpdate;
