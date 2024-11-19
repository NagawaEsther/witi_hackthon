
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../getall.css'

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = sessionStorage.getItem('token');

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/v1/user/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data.users);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error.response ? error.response.data : error.message);
      setError('Error fetching users. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, [token]);

  return (
    <div className="users-container">
      <section id="user-list">
        <h2>Registered Users</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {!loading && !error && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Contact Number</th>
                <th>Sports</th>
                <th>Role</th>
                <th>Address</th>
                <th>Created At</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.date_of_birth}</td>
                  <td>{user.contact_number}</td>
                  <td>{user.sports}</td>
                  <td>{user.role}</td>
                  <td>{user.address}</td>
                  <td>{new Date(user.created_at).toLocaleString()}</td>
                  <td>{user.updated_at ? new Date(user.updated_at).toLocaleString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default GetAllUsers;
