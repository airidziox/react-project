import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = ({loggedIn}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav fs-3">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            {!loggedIn ?
                                <ul className="navbar-nav fs-3">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </ul>
                                :
                                <ul className="navbar-nav fs-3">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/upload">Upload</Link>
                                    </li>
                                </ul>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Toolbar;