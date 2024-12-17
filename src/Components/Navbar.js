import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
      <nav className="container-fluid navbar navbar-expand-lg">
        <img src="/logo.png" className="mx-3 ms-5" alt="location" height={'60rem'} width={'60rem'} />
        <button className="navbar-toggler bg-primary me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-5">
            <li className="nav-item">
              <Link className="nav-link fs-5 custom-nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 custom-nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 custom-nav-link" to="/">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 custom-nav-link" to="/">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 custom-nav-link" to="/">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 custom-nav-link" to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;