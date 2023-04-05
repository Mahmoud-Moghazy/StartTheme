import React, { Component } from 'react';
import myImage from './img/avataaars.svg';
import './landing.css';

class Landing extends Component {
    render() {
        return <>
  {/* ======================================================= */}
  {/* start landing */}
  <section id="landing" className="bgcolor">
    <div className="container py-5">
      <div className="bg">
        <img className="w-100" src={myImage} alt="avatar-image" />
        <div className="bg-content my-3">
          <h1 className="text-uppercase text-white fw-bolder">start react</h1>
        </div>
        <div className="white-global-line my-3">
          <div className="inner-line" />
          <div>
            <i className="fas fa-star fa-2x mx-3" />
          </div>
          <div className="inner-line" />
        </div>
        <h4 className="text-white mt-3">
          Graphic Artist - Web Designer - Illustrator
        </h4>
      </div>
    </div>
  </section>
  {/* end landing */}
  {/* ======================================================= */}
</>

    }
}

export default Landing;