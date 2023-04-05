/** @format */

import React, { Component } from "react";

class About extends Component {
  render() {
    return<>
      {/* ======================================================= */}
      {/* start section tow */}
      <section id="about" className="bgcolor">
        <div className="container py-5">
          <div className="head text-center mb-5">
            <h2 className="text-uppercase text-light fw-bolder">about</h2>
            <div className="white-global-line my-3">
              <div className="inner-line" />
              <div>
                <i className="fas fa-star fa-2x mx-3" />
              </div>
              <div className="inner-line" />
            </div>
          </div>
          <div className="row g-4 justify-content-center text-light fs-5">
            <div className="col-12 col-lg-4">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and
                JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <p>
                You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact
                form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end section tow */}
      {/* ======================================================= */}
    </>;
  }
}

export default About;
