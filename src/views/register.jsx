import React, { useState } from 'react';
import user from '../service/user';

const Register = () => {
    const [formData, setFormData] = useState({
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        user.addadmin(formData)
            .then((res) => {
                console.log('Registration successful:', res.data);
              
            })
            .catch((err) => {
                console.error('Registration error:', err);
                // Handle error (e.g., show error message)
            });
    };

    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <a href="" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                        <img src="../assets/images/logos/dark-logo.svg" width={180} alt="Logo" />
                                    </a>
                                    <p className="text-center">Your Social Campaigns</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName1" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="exampleInputName1"
                                                value={formData.name}
                                                onChange={handleChange}
                                                aria-describedby="nameHelp"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                value={formData.email}
                                                onChange={handleChange}
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                                            <input
                                                type="number"
                                                name="phone"
                                                className="form-control"
                                                id="exampleInputPhone1"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                aria-describedby="phoneHelp"
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign Up</button>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                                            <a className="text-primary fw-bold ms-2" href="./authentication-login.html">Sign In</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
