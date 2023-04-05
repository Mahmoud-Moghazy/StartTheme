import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  state = {
    activeLink: '',
  };

  handleClick = (event) => {
    this.setState({ activeLink: event.target.getAttribute('href') });
  };

  render() {
    return (
      <>
        <nav className="navbar p-2 navbar-expand-lg bg-dark">
          <div className="container">
            <Link to="/landing" className={`navbar-brand text-light fw-bolder fs-3 ${this.state.activeLink === '/landing' ? 'activated' : ''}`} onClick={this.handleClick}>
              START REACT
            </Link>
            <button
              className="navbar-toggler fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              MENU
              <span className="fa-solid fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav text-uppercase fw-bold ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/portfolio"
                    className={`nav-link p-4 ${this.state.activeLink === '/portfolio' ? 'active' : ''}`}
                    onClick={this.handleClick}
                  >
                    portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-link p-4 ${this.state.activeLink === '/about' ? 'active' : ''}`}
                    onClick={this.handleClick}
                  >
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={`nav-link p-4 ${this.state.activeLink === '/contact' ? 'active' : ''}`}
                    onClick={this.handleClick}
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
