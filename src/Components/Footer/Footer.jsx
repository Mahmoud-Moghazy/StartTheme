import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return <>
        {/* ======================================================= */}
        {/* start footer */}
        <footer className="bg-dark">
          <div className="container py-5">
            <div className="row row-cols-1 row-cols-lg-3">
              <div className="col">
                <div className="footer-item text-center text-light py-3">
                  <h4 className="text-uppercase">location</h4>
                  <p>
                    2215 John Daniel Drive
                    <br />
                    Clark, MO 65243
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="footer-item text-center py-3">
                  <h4 className="text-uppercase text-light">around the web</h4>
                  <div className="icons d-flex align-items-center justify-content-center me-3">
                    <div className="footer-icon d-flex align-items-center justify-content-center m-3">
                      <i className="fa-brands fa-facebook-f" />
                    </div>
                    <div className="footer-icon d-flex align-items-center justify-content-center m-3">
                      <i className="fa-brands fa-twitter" />
                    </div>
                    <div className="footer-icon d-flex align-items-center justify-content-center m-3">
                      <i className="fa-brands fa-linkedin-in" />
                    </div>
                    <div className="footer-icon d-flex align-items-center justify-content-center m-3">
                      <i className="fa-solid fa-basketball" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item text-center text-light py-3">
                  <h4 className="text-uppercase">about freelancer</h4>
                  <p>
                    Freelance is a free to use, MIT
                    <br />
                    licensed Bootstrap theme created by
                    <br />
                    Moustafa Mouhamed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black text-white text-center py-4">
            <p className="fs-6  mb-0">
              Copyright © Developed &amp; Created by{" "}
              <span className="text-info">Mahmoud Moghazy</span> 2023
            </p>
          </div>
        </footer>
        {/* end footer */}
        {/* ======================================================= */}
      </>
      
    }
}

export default Footer;