/** @format */

import React, { Component } from "react";
import './portfolio.css';
import myImage1 from './img/01.png';
import myImage2 from './img/02.png';
import myImage3 from './img/03.png';
import myImage4 from './img/04.png';
import myImage5 from './img/05.png';
import myImage6 from './img/06.png';

class Portfolio extends Component {
  render() {
    return<>
      {/* ======================================================= */}
      {/* start section one  */}
      <section id="portfolio">
        <div className="container py-5">
          <div className="head text-center mb-5">
            <h2 className="text-uppercase fw-bolder">portfolio</h2>
            <div className="black-global-line my-3">
              <div className="inner-line" />
              <div>
                <i className="fas fa-star fa-2x mx-3" />
              </div>
              <div className="inner-line" />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div className="col">
              <figure className="position-relative overflow-hidden rounded-3">
                <img className="w-100" src={myImage1} alt="portfolio-image" />
                <figcaption className="position-absolute start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="fas fa-plus fa-6x text-light" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                </figcaption>
              </figure>
            </div>
            <div className="col">
              <figure className="position-relative overflow-hidden rounded-3">
                <img className="w-100" src={myImage2} alt="portfolio-image" />
                <figcaption className="position-absolute start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="fas fa-plus fa-6x text-light" data-bs-toggle="modal" data-bs-target="#exampleModal2" />
                </figcaption>
              </figure>
            </div>
            <div className="col">
              <figure className="position-relative overflow-hidden rounded-3">
                <img className="w-100" src={myImage3} alt="portfolio-image" />
                <figcaption className="position-absolute start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="fas fa-plus fa-6x text-light" data-bs-toggle="modal" data-bs-target="#exampleModal3" />
                </figcaption>
              </figure>
            </div>
            <div className="col">
              <figure className="position-relative overflow-hidden rounded-3">
                <img className="w-100" src={myImage4} alt="portfolio-image" />
                <figcaption className="position-absolute start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="fas fa-plus fa-6x text-light" data-bs-toggle="modal" data-bs-target="#exampleModal4" />
                </figcaption>
              </figure>
            </div>
            <div className="col">
              <figure className="position-relative overflow-hidden rounded-3">
                <img className="w-100" src={myImage5} alt="portfolio-image" />
                <figcaption className="position-absolute start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="fas fa-plus fa-6x text-light" data-bs-toggle="modal" data-bs-target="#exampleModal5" />
                </figcaption>
              </figure>
            </div>
            <div className="col">
              <figure className="position-relative overflow-hidden rounded-3">
                <img className="w-100" src={myImage6} alt="portfolio-image" />
                <figcaption className="position-absolute start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="fas fa-plus fa-6x text-light" data-bs-toggle="modal" data-bs-target="#exampleModal6" />
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="close text-end p-2 d-none d-lg-block">
                  <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                    <i className="BTC fa-solid fa-close fa-2x" />
                  </button>
                </div>
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="modal-body">
                      <div className="text-center">
                        <h2 className="fw-bolder py-2">LOG CABIN</h2>
                        <div className="black-global-line m-3">
                          <div className="inner-line" />
                          <div>
                            <i className="fas fa-star fa-2x mx-3" />
                          </div>
                          <div className="inner-line" />
                        </div>
                        <img className="w-100 rounded-3" src={myImage1} alt="overlay-image" />
                        <p className="p-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae
                          quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                        </p>
                        <button type="button" className="btn btn-success mb-3" data-bs-dismiss="modal">
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="close text-end p-2 d-none d-lg-block">
                  <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                    <i className="BTC fa-solid fa-close fa-2x" />
                  </button>
                </div>
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="modal-body">
                      <div className="text-center">
                        <h2 className="fw-bolder py-2">TASTY CAKE</h2>
                        <div className="black-global-line m-3">
                          <div className="inner-line" />
                          <div>
                            <i className="fas fa-star fa-2x mx-3" />
                          </div>
                          <div className="inner-line" />
                        </div>
                        <img className="w-100 rounded-3" src={myImage2} alt="overlay-image" />
                        <p className="p-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae
                          quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                        </p>
                        <button type="button" className="btn btn-success mb-3" data-bs-dismiss="modal">
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="close text-end p-2 d-none d-lg-block">
                  <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                    <i className="BTC fa-solid fa-close fa-2x" />
                  </button>
                </div>
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="modal-body">
                      <div className="text-center">
                        <h2 className="fw-bolder py-2">CIRCUS TENT</h2>
                        <div className="black-global-line m-3">
                          <div className="inner-line" />
                          <div>
                            <i className="fas fa-star fa-2x mx-3" />
                          </div>
                          <div className="inner-line" />
                        </div>
                        <img className="w-100 rounded-3" src={myImage3} alt="overlay-image" />
                        <p className="p-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae
                          quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                        </p>
                        <button type="button" className="btn btn-success mb-3" data-bs-dismiss="modal">
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="close text-end p-2 d-none d-lg-block">
                  <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                    <i className="BTC fa-solid fa-close fa-2x" />
                  </button>
                </div>
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="modal-body">
                      <div className="text-center">
                        <h2 className="fw-bolder py-2">CONTROLLER</h2>
                        <div className="black-global-line m-3">
                          <div className="inner-line" />
                          <div>
                            <i className="fas fa-star fa-2x mx-3" />
                          </div>
                          <div className="inner-line" />
                        </div>
                        <img className="w-100 rounded-3" src={myImage4} alt="overlay-image" />
                        <p className="p-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae
                          quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                        </p>
                        <button type="button" className="btn btn-success mb-3" data-bs-dismiss="modal">
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal5" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="close text-end p-2 d-none d-lg-block">
                  <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                    <i className="BTC fa-solid fa-close fa-2x" />
                  </button>
                </div>
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="modal-body">
                      <div className="text-center">
                        <h2 className="fw-bolder py-2">LOCKED SAFE</h2>
                        <div className="black-global-line m-3">
                          <div className="inner-line" />
                          <div>
                            <i className="fas fa-star fa-2x mx-3" />
                          </div>
                          <div className="inner-line" />
                        </div>
                        <img className="w-100 rounded-3" src={myImage5} alt="overlay-image" />
                        <p className="p-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae
                          quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                        </p>
                        <button type="button" className="btn btn-success mb-3" data-bs-dismiss="modal">
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal6" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="close text-end p-2 d-none d-lg-block">
                  <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                    <i className="BTC fa-solid fa-close fa-2x" />
                  </button>
                </div>
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="modal-body">
                      <div className="text-center">
                        <h2 className="fw-bolder py-2">SUBMARINE</h2>
                        <div className="black-global-line m-3">
                          <div className="inner-line" />
                          <div>
                            <i className="fas fa-star fa-2x mx-3" />
                          </div>
                          <div className="inner-line" />
                        </div>
                        <img className="w-100 rounded-3" src={myImage6} alt="overlay-image" />
                        <p className="p-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae
                          quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                        </p>
                        <button type="button" className="btn btn-success mb-3" data-bs-dismiss="modal">
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section one  */}
      {/* ======================================================= */}
    </>;
  }
}

export default Portfolio;
