import React from "react";

function Team() {
  return (
    <>
      <section className="team">
        <div className="row row-cols-2 align-items-center text-whte  ">
          <div className="img-do-section   ">
            <img className=" " src="/images/team-image.png" alt="" />
          </div>
          <div className=" ">
            <h5 className=" my-3 fw-2 fw-bold  global-text">
              <span className="fs-2 fw mt-2  ">-</span>
              What We Do <span className="fs-2 fw mt-2  ">-</span>
            </h5>

            <h1 className="fs-1 fw-bolder my-1 p-2">
              We Have an Experience Team Member
            </h1>
            <p className="py-2 mb-1">
              <span className="fs-2 fw  global-text ">"</span>{" "}
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since
              </p>
              <p>
                Unknown printer took a galley of type and scrambled it to make a
                type specimen book there are many
              </p>
              <span className="fs-2 fw  global-text ">"</span>
            </p>
            <div className="d-flex ">
              <div>
                <img
                  className="p-2"
                  width="100px"
                  height="100px"
                  src="/images/Ellipse 20.png"
                  alt=""
                />
              </div>
              <div className="ms-3">
                <h6>Richard E. Harrisona</h6>
                <small>CEO & Founder</small>
              </div>
            </div>

            <button className="btn btn-md btn-dark text-white button-custom rounded-pill my-2 py-1">
              <div className="button-custom-in"></div>
              Consulting Now
            </button>
            <div>
              <img
                className="ms-2 fs-1 fw-bolder"
                src="/images/arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!--multii button  section - */}
      <section className=" container my-5">
        <div className=" d-flex  p-4 justify-content-center">
          <button className="btn btn-light">Logo</button>
          <button className="btn btn-light mx-4">Logo</button>
          <button className="btn btn-light ">Logo</button>
          <button className="btn btn-light mx-4">Logo</button>
          <button className="btn btn-light">Logo</button>
        </div>
        <div className="fs-1 fw-bolder bg-light my-5">
          <hr />
        </div>
        <div className="d-flex align-items-center justify-content-around my-5">
          <div>
            <h5 className=" my-3 fw-2 fw-bold  global-text">
              <span className="fs-2 fw mt-2  ">-</span>
              Important Articles
            </h5>
            <h1 className="fs-1 fw-bolder my-2 p-3">
              Something Know Our Latest News & Blog
            </h1>
          </div>
          <div>
            <button className="btn btn-lg button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
              <div className=" inner-button bg-dark fw-bold"></div>
              View All News
            </button>
          </div>
        </div>
        {/* <!-- last 3 card - */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col p-1 ">
            <div className="card h-100 bg-light p-2">
              <img src="/images/b-1.png" className="card-img-top" alt="..." />
              <div className="card-body ">
                <h6>
                  <i
                    className="fa fa-calendar global-text"
                    aria-hidden="true"
                  ></i>{" "}
                  <span className="ms-3  global-text">29 Mar 2022</span>
                </h6>
                <h5 className="card-title">
                  How Performance Visiblety with GitLab CI and Hood
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Ipsum has been
                </p>
              </div>
              <div className="card-footer  bg-light border-0">
                <h6 className="text-muted">
                  Learn More
                  <span className="ms-2">
                    <img src="/images/arrow.png" alt="" />
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col p-1">
            <div className="card h-100 bg-light p-2">
              <img src="/images/b-2.png" className="card-img-top" alt="..." />
              <div className="card-body ">
                <h6>
                  <i
                    className="fa fa-calendar global-text"
                    aria-hidden="true"
                  ></i>{" "}
                  <span className="ms-3  global-text">29 Mar 2022</span>
                </h6>
                <h5 className="card-title">
                  How Performance Visiblety with GitLab CI and Hood
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Ipsum has been
                </p>
              </div>
              <div className="card-footer  bg-light border-0">
                <h6 className="  global-text">
                  Learn More{" "}
                  <span className="ms-2">
                    <img src="/images/arrow.png" alt="" />
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col p-1">
            <div className="card h-100 bg-light p-2">
              <img src="/images/b-3.png" className="card-img-top" alt="..." />
              <div className="card-body ">
                <h6>
                  <i
                    className="fa fa-calendar global-text"
                    aria-hidden="true"
                  ></i>{" "}
                  <span className="ms-3  global-text">29 Mar 2022</span>
                </h6>
                <h5 className="card-title">
                  How Performance Visiblety with GitLab CI and Hood
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Ipsum has been
                </p>
              </div>
              <div className="card-footer  bg-light border-0">
                <h6 className="text-muted">
                  Learn More{" "}
                  <span className="ms-2">
                    <img src="/images/arrow.png" alt="" />
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
