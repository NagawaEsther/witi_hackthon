import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactInquiryUpdate = () => {
  const [inquiryId, setInquiryId] = useState('');
  const [inquiry, setInquiry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token] = useState(sessionStorage.getItem('token'));

  useEffect(() => {
    setInquiry(null);
  }, [inquiryId]);

  const fetchInquiry = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/v1/contact-inquiry/inquiry/${inquiryId}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      setInquiry(response.data);
    } catch (error) {
      console.error('Error fetching inquiry:', error.response ? error.response.data : error.message);
      setError('Error fetching inquiry. Please check the ID and try again.');
      setInquiry(null);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setInquiryId(e.target.value);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setInquiry({ ...inquiry, [name]: value });
  };

  const handleUpdateClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`http://127.0.0.1:5000/api/v1/contact-inquiry/inquiry/${inquiryId}`, inquiry, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      setInquiry(response.data);
      alert('Contact inquiry updated successfully!');
    } catch (error) {
      console.error('Error updating inquiry:', error.response ? error.response.data : error.message);
      setError('Error updating inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section id="inquiry-details">
        <h2>Contact Inquiry Details</h2>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="inquiryId">Enter Inquiry ID:</label>
            <input
              type="text"
              id="inquiryId"
              value={inquiryId}
              onChange={handleInputChange}
              placeholder="Enter Inquiry ID"
            />
            <button onClick={fetchInquiry} disabled={loading}>
              {loading ? 'Fetching...' : 'Fetch Inquiry'}
            </button>
          </div>

          {error && <p className="error-message">{error}</p>}

          {inquiry && (
            <form onSubmit={handleUpdateClick} className="form-group">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={inquiry.name || ''}
                  onChange={handleFieldChange}
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={inquiry.email || ''}
                  onChange={handleFieldChange}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={inquiry.subject || ''}
                  onChange={handleFieldChange}
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={inquiry.message || ''}
                  onChange={handleFieldChange}
                  placeholder="Message"
                  rows={5}
                ></textarea>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Inquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactInquiryUpdate;
