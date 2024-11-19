import React, { useState } from 'react';
import axios from 'axios';
import './userForm.css';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        date_of_birth: '',
        contact_number: '',
        address: '',
        sports: ''
    });
    const [registrationStatus, setRegistrationStatus] = useState({
        message: '',
        error: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password.length < 7) {
            setRegistrationStatus({
                message: '',
                error: 'Password must be at least 7 characters long.'
            });
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/v1/user/register', formData);
            console.log('Registration successful:', response.data);
            setRegistrationStatus({
                message: 'You have  registered successfully',
                error: ''
            });
            setFormData({
                name: '',
                email: '',
                password: '',
                date_of_birth: '',
                contact_number: '',
                address: '',
                sports: ''
            });
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.error;
                console.error('Registration failed:', errorMessage);
                setRegistrationStatus({
                    message: '',
                    error: errorMessage
                });
            } else {
                console.error('Registration failed:', error.message);
                setRegistrationStatus({
                    message: '',
                    error: 'Registration failed: Please check your details and try again.'
                });
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="signup-registration-container">
            <div className="signup-image-container">
                
            </div>
            <div className="signup-form-container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h1 style={{ color: 'blue', fontSize: '30px' }}>Registration Form</h1>
                    {registrationStatus.message && <p className="signup-success-message">{registrationStatus.message}</p>}
                    {registrationStatus.error && <p className="signup-error-message">{registrationStatus.error}</p>}
                    <div>
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                            <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                        </span>
                    </div>
                    <div>
                        <label htmlFor="date_of_birth">Date of Birth:</label>
                        <input
                            type="date"
                            id="date_of_birth"
                            name="date_of_birth"
                            value={formData.date_of_birth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contact_number">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact_number"
                            name="contact_number"
                            value={formData.contact_number}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="sports">Sports:</label>
                        <select
                            id="sports"
                            name="sports"
                            value={formData.sports}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a sport</option>
                            <option value="football">Football</option>
                            <option value="netball">Netball</option>
                            <option value="basketball">Basketball</option>
                        </select>
                    </div>

                    <button type="submit" className="signup-button">Register</button>

                    <p className="signup-agreement">
                        By continuing, you agree to Hope Field Sports Academy's Terms of Use and Privacy Policy.
                    </p>
                    <p className="signup-login">
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
