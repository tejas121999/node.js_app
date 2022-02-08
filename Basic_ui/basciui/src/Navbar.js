import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink avtiveClassname="menu_active" className="nav-link active" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink avtiveClassname="menu_active" className="nav-link active" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink avtiveClassname="menu_active" className="nav-link active" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink avtiveClassname="menu_active" className="nav-link active" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <NavLink className="navbar-brand" to="/">BusinessMan</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        </>
    )
}
