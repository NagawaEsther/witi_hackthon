// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './admin_dashboard.css';
// import { useAuth } from './auth_context'; 

// const AdminDashboard = () => {
//   const { user, logout, isAuthenticated } = useAuth();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       window.location.href = '/login';
//     }
//   }, [isAuthenticated]);

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div>
//       <header>
//         <h1>Welcome to the Admin Dashboard</h1>
//       </header>

//       <br />

//       <table>
//         <thead>
//           <tr>
//             <th>Contact Inquiries</th>
//             <th>Programs</th>
//             <th>Gallery Items</th>
//             <th>Events</th>
//             <th>Donations</th>
//             <th>Users</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             {user && user.is_admin && (
//               <>
//                 <td>
                  // <Link to="contact_inquiry/create">Create contact inquiry</Link><br />
                  // <Link to="contact_inquiry/all">Get all contact inquiries</Link><br />
                  // <Link to="contact_inquiry/get">Get a specific contact inquiry</Link><br />
                  // <Link to="contact_inquiry/update">Update a specific contact inquiry</Link><br />
                  // <Link to="contact_inquiry/delete">Delete contact inquiry</Link><br />
//                 </td>
//                 <td>
                  // <Link to="programs/add">Add Program</Link><br />
                  // <Link to="programs/all">Get all programs</Link><br />
                  // <Link to="program/id">Get a specific program</Link><br />
                  // <Link to="program/update">Update a program</Link><br />
                  // <Link to="program/delete">Delete a program</Link><br />
//                 </td>
//                 <td>
                  // <Link to="upload/image">Upload image</Link><br />
                  // <Link to="getall/images">Get all images</Link><br />
                  // <Link to="getspecific/image">Get a specific image</Link><br />
                  // <Link to="update/image">Update an image</Link><br />
                  // <Link to="delete/image">Delete an image</Link><br />
//                 </td>
//                 <td>
                  // <Link to="create/event">Create an event</Link><br />
                  // <Link to="get/event">Get a specific event</Link><br />
                  // <Link to="all/events">Get all events</Link><br />
                  // <Link to="update/event">Update an event</Link><br />
                  // <Link to="delete/event">Delete an event</Link><br />
//                 </td>
//                 <td>
                  // <Link to="donation/add">Register donor</Link><br />
                  // <Link to="getall/donations">Get all donors</Link><br />
                  // <Link to="getspecific/donar">Get specific donor</Link><br />
                  // <Link to="update/donar">Update a donor</Link><br />
                  // <Link to="delete/donar">Delete a donor</Link><br />
//                 </td>
//                 <td>
                  // <Link to="user/register">Register user</Link><br />
                  // <Link to="getall/users">Get all users</Link><br />
                  // <Link to="getspecific/user">Get a specific user</Link><br />
                  // <Link to="update/user">Update a user</Link><br />
                  // <Link to="delete/user">Delete a user</Link><br />
//                 </td>
//               </>
//             )}
//           </tr>
//         </tbody>
//       </table>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './admin_dashboard.css';
import { useAuth } from './auth_context';

const AdminDashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/login';
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderLinks = (section) => {
    if (expandedSection === section) {
      switch (section) {
        case 'Contact Inquiries':
          return (
            <div className="links">
             <Link to="contact_inquiry/create">Create contact inquiry</Link><br />
                  <Link to="contact_inquiry/all">Get all contact inquiries</Link><br />
                  <Link to="contact_inquiry/get">Get a specific contact inquiry</Link><br />
                  <Link to="contact_inquiry/update">Update a specific contact inquiry</Link><br />
                  <Link to="contact_inquiry/delete">Delete contact inquiry</Link><br />
            </div>
          );
          
        case 'Programs':
          return (
            <div className="links">
               <Link to="programs/add">Add Program</Link><br />
                  <Link to="programs/all">Get all programs</Link><br />
                  <Link to="program/id">Get a specific program</Link><br />
                  <Link to="program/update">Update a program</Link><br />
                  <Link to="program/delete">Delete a program</Link><br />
            </div>
          );
        case 'Events':
          return (
            <div className="links">
              <Link to="create/event">Create an event</Link><br />
                  <Link to="get/event">Get a specific event</Link><br />
                  <Link to="all/events">Get all events</Link><br />
                  <Link to="update/event">Update an event</Link><br />
                  <Link to="delete/event">Delete an event</Link><br />
            </div>
          );
        case 'Gallery':
          return (
            <div className="links">
              <Link to="upload/image">Upload image</Link><br />
                  <Link to="getall/images">Get all images</Link><br />
                  <Link to="getspecific/image">Get a specific image</Link><br />
                  <Link to="update/image">Update an image</Link><br />
                  <Link to="delete/image">Delete an image</Link><br />
            </div>
          );
        case 'Donations':
          return (
            <div className="links">
             <Link to="donation/add">Register donor</Link><br />
                  <Link to="getall/donations">Get all donors</Link><br />
                  <Link to="getspecific/donar">Get specific donor</Link><br />
                  <Link to="update/donar">Update a donor</Link><br />
                  <Link to="delete/donar">Delete a donor</Link><br />
            </div>
          );
        case 'Users':
          return (
            <div className="links">
             <Link to="user/register">Register user</Link><br />
                  <Link to="getall/users">Get all users</Link><br />
                  <Link to="getspecific/user">Get a specific user</Link><br />
                  <Link to="update/user">Update a user</Link><br />
                  <Link to="delete/user">Delete a user</Link><br />
            </div>
          );


          case 'SendMessages':
            return (
              <div className="links">
                    <Link to="SendMessages/send-sms">Send sms and email</Link><br />
              </div>
            );
  
  
  
          
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className="dashboard-container">
    
      <div className="admin-dashboard-header">
          <h1>Welcome to Admin Dashboard</h1>
      </div>
      
      <br/>
      <div className="dashboard-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li onClick={() => toggleSection('Contact Inquiries')}>
                Contact Inquiries <span>{expandedSection === 'Contact Inquiries' ? '▼' : '▶'}</span>
              </li>
              <br/>
              <li onClick={() => toggleSection('Programs')}>
                Programs <span>{expandedSection === 'Programs' ? '▼' : '▶'}</span>
              </li>
              <br/>
              <li onClick={() => toggleSection('Events')}>
                Events <span>{expandedSection === 'Events' ? '▼' : '▶'}</span>
              </li>
              <br/>
              <li onClick={() => toggleSection('Gallery')}>
                Gallery <span>{expandedSection === 'Gallery' ? '▼' : '▶'}</span>
              </li>
              <br/>
              <li onClick={() => toggleSection('Donations')}>
                Donations <span>{expandedSection === 'Donations' ? '▼' : '▶'}</span>
              </li>
              <br/>
              <li onClick={() => toggleSection('Users')}>
                Users <span>{expandedSection === 'Users' ? '▼' : '▶'}</span>
              </li>

              <li onClick={() => toggleSection('SendMessages')}>
                Send SMS and Emails <span>{expandedSection === 'SendMessages' ? '▼' : '▶'}</span>
              </li>
            </ul>
          </nav>
          <br/>
          <button onClick={handleLogout} style={{ backgroundColor: 'orange', color: '#fff', padding: '10px', border: 'none', cursor: 'pointer' }}>Logout</button>

        </aside>
        <main className="main-content">
          {renderLinks('Contact Inquiries')}
          {renderLinks('Programs')}
          {renderLinks('Events')}
          {renderLinks('Gallery')}
          {renderLinks('Donations')}
          {renderLinks('Users')}
          {renderLinks('SendMessages')}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
