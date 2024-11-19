
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './admin_dashboard/auth_context';
import { useNavigate } from 'react-router-dom';
import './login.css';


const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/user/login', { email, password });


            const { is_admin, user,access_token } = response.data;

            sessionStorage.setItem('token', access_token);

            login(user, is_admin);

            if (is_admin) {
                navigate('/admin');
            } else {
                navigate('/our_services');
            }
        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                if (status === 400) {
                    setError('Missing email or password.');
                } else if (status === 404) {
                    setError('User not found.');
                } else if (status === 401) {
                    setError('Invalid password.');
                } else if (status === 400 && error.response.data.error === 'Invalid email format') {
                    setError('Invalid email format.');
                } else {
                    setError('Login failed: Please check your details and try again.');
                }
            } else {
                setError('Login failed: Please check your details and try again.');
            }
        }
    };

    return (
        <div className="login-container">
            
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 style={{ color: 'blue', fontSize: '30px' }}>Login</h1>
                    
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;


