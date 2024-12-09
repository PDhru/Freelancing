import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import Toastify for notifications
import API from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const { data } = await API.post('/auth/login', formData); // Call API for login
            localStorage.setItem('token', data.token); // Save token in localStorage
            toast.success('Login successful!');
            navigate('/'); // Redirect to the dashboard or homepage
        } catch (err) {
            toast.error('Invalid credentials!');
        }
    };

    return (
        <div className="auth-main v1">
            <div className="auth-wrapper">
                <div className="auth-form">
                    <div className="card my-5">
                        <div className="card-body">
                            <div className="text-center">
                                <img
                                    src="images/authentication/img-auth-login.png"
                                    alt="images"
                                    className="img-fluid mb-3"
                                />
                                <h4 className="f-w-500 mb-1">Login with your email</h4>
                                <p className="mb-3">
                                    Don't have an Account?{' '}
                                    <Link to="/register" className="link-primary ms-1">
                                        Create Account
                                    </Link>
                                </p>
                            </div>
                            {/* Form submission */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="form-control"
                                        id="floatingInput1"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="d-flex mt-1 justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input input-primary"
                                            type="checkbox"
                                            id="customCheckc1"
                                            defaultChecked
                                        />
                                        <label className="form-check-label text-muted" htmlFor="customCheckc1">
                                            Remember me?
                                        </label>
                                    </div>
                                    <a href="#">
                                        <h6 className="f-w-400 mb-0">Forgot Password?</h6>
                                    </a>
                                </div>
                                {/* Button inside form */}
                                <div className="d-grid mt-4">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
