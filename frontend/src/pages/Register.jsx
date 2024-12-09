// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// // import API from '../utils/api';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent the default form submission behavior
//         try {
//           const res = await axios.post('http://localhost:5000/api/auth/register', formData);
//             toast.success('Registration successful! Please log in.', {
//                 position: toast.POSITION.TOP_RIGHT,
//             });
//             localStorage.setItem('token', res.data.token);
//             navigate("/login"); // Redirect to login page
//         } catch (err) {
//             toast.error('Email is already registered!', {
//                 position: toast.POSITION.TOP_RIGHT,
//             });
//         }
//     };
//   return (
//     <div className="auth-main v1">
//     <div className="auth-wrapper">
//       <div className="auth-form">
//         <div className="card my-5">
//           <div className="card-body">
//             <div className="text-center">
//               <img src="images/authentication/img-auth-login.png" alt="images" className="img-fluid mb-3" />
//               <h4 className="f-w-500 mb-1">Register with your email</h4>
//               <p className="mb-3">Already have an Account? <Link to={"/login"} className="link-primary ms-1">Log In</Link></p>
//             </div>
//             <form  onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input type="text" name='name'  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
//               className="form-control"  placeholder="Name" />
//             </div>
//             <div className="mb-3">
//               <input type="email" name='email'  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
//               className="form-control"  placeholder="Email Address" />
//             </div>
//             <div className="mb-3">
//               <input type="password" name='password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 className="form-control"  placeholder="Password" />
//             </div>

//             </form>
//             <div className="d-grid mt-4">
//               <button type="button" className="btn btn-primary">Register</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Register
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            await API.post('/auth/register', formData); // Make API call to register the user
            toast.success('Registration successful! Please log in.');
            navigate("/login"); 
        } catch (err) {
            toast.error('Email is already registered!');
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
                                <h4 className="f-w-500 mb-1">Register with your email</h4>
                                <p className="mb-3">
                                    Already have an Account?{' '}
                                    <a href="../pages/login" className="link-primary ms-1">
                                        Log In
                                    </a>
                                </p>
                            </div>
                            {/* Form submission */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Name"
                                    />
                                </div>
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
                                        Register
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

export default Register;
