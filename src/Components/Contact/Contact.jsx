/** @format */

import React, { Component } from "react";
import './contact.css'

class Contact extends Component {
  render() {
    return<>
      {/* ======================================================= */}
      {/* start section three */}
      <section id="contact">
        <div className="container py-5">
          <div className="head text-center mb-5">
            <h2 className="text-uppercase fw-bolder">contact</h2>
            <div className="black-global-line my-3">
              <div className="inner-line" />
              <div>
                <i className="fas fa-star fa-2x mx-3" />
              </div>
              <div className="inner-line" />
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-10 col-lg-8">
              <div className="form-floating mb-3">
                <input type="text" className="form-control border-0" id="nameInput" placeholder="name@example.com" />
                <label htmlFor="nameInput" className="text-success">
                  Name
                </label>
              </div>
              <hr />
              <div className="alert alert-danger my-2 d-none" id="nameAlert">
                Invalid name
              </div>
            </div>
            <div className="col-10 col-lg-8">
              <div className="form-floating mb-3">
                <input type="email" className="form-control border-0" id="mailInput" placeholder="name@example.com" />
                <label htmlFor="mailInput" className="text-success">
                  E-Mail
                </label>
              </div>
              <hr />
              <div className="alert alert-danger my-2 d-none" id="emailAlert">
                Invalid email <span className="text-info">(example: asd@wer.com)</span>
              </div>
            </div>
            <div className="col-10 col-lg-8">
              <div className="form-floating mb-3">
                <input type="tel" className="form-control border-0" id="phoneInput" placeholder="name@example.com" />
                <label htmlFor="phoneInput" className="text-success">
                  Phone
                </label>
              </div>
              <hr />
              <div className="alert alert-danger my-2 d-none" id="phoneAlert">
                Invalid phone
              </div>
            </div>
            <div className="col-10 col-lg-8">
              <div className="form-floating">
                <textarea
                  className="form-control border-0"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 200 }}
                  defaultValue={""}
                />
                <label htmlFor="floatingTextarea2" className="text-success">
                  Message
                </label>
              </div>
              <hr />
            </div>
            <div className="col-10 col-lg-8">
              <button className="btn btn-success p-3">Send</button>
            </div>
          </div>
        </div>
      </section>
      {/* end section three */}
      {/* ======================================================= */}
    </>;
  }
}

export default Contact;
