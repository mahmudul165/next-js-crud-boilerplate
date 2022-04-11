import React from "react";
import { Fade, Rotate } from "react-reveal";

function CustomerServices() {
  return (
    <section className="service mt-5 p-3 bg-custom-color">
      <div className="container-custom container text-center  mt-5 p-3">
        <div className=" ">
          <h5 className=" my-3 fw-2 fw-bold  global-text">
            <span className="fs-2 fw mt-2  ">-</span>
            Company Services
            <span className="fs-2 fw mt-2  ">-</span>
          </h5>
          <h1 my-3 fs-1 fw-bolder m-3 py-1>
            We Provide Most Exclusive Service for Business
          </h1>
        </div>
        <div className="div-content py-4">
          <section className="p-4">
            <section className="row row-cols-4 align-items-center rounded-3 m-0 justify-content-around p-4">
              <div className="col-12 col-lg-3 bg-white rounded border-primary text-center">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <div className="p-4 ">
                    <Rotate top>
                      <img
                        src="/icons/Vector.png"
                        className="card-img-top w-50 h-50 "
                        alt="..."
                      />
                    </Rotate>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Creative Idea</h5>
                    <p className="card-text">
                      It is a long established fact that a reader will be
                      distracted
                    </p>
                    <a href="#" className="btn fw-700 fs-2"></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 bg-white rounded border-primary text-center">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <div className="p-4">
                    <Rotate>
                      <img
                        src="/icons/Vector (1).png"
                        className="card-img-top w-50 h-50  "
                        alt="..."
                      />
                    </Rotate>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Creative Idea</h5>
                    <p className="card-text">
                      It is a long established fact that a reader will be
                      distracted
                    </p>
                    <a href="#" className="btn fw-700 fs-2"></a>
                  </div>
                </div>
              </div>
              <div className="card border-0" style={{ width: "18rem" }}>
                <div className="p-4">
                  <Rotate>
                    <img
                      src="/icons/Vector (2).png"
                      className="card-img-top w-50 h-50  "
                      alt="..."
                    />
                  </Rotate>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Creative Idea</h5>
                  <p className="card-text">
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                  <a href="#" className="btn fw-700 fs-2"></a>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}

export default CustomerServices;
