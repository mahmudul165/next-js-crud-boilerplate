import React from "react";

function Features() {
  return (
    <>
      <section className="container my-3 p-3">
        <div className="my-3 text-center">
          <h5 className=" my-3 fw-2 fw-bold  global-text my-2">
            <span className="fs-2 fw mt-2  ">-</span>
            Our Core Features
            <span className="fs-2 fw mt-2  ">-</span>
          </h5>
          <h1 className="fs-1 fw-bolder  my-2 p-2 ">
            We Provide Most Exclusive Service for Business
          </h1>
        </div>

        <div>
          <div className="row row-cols-4 align-items-center   rounded-3 m-0 justify-content-around">
            <div className="   col-12 col-lg-3 bg-white rounded border-primary text-center   my-2 p-3">
              {/* <!-- card 1 start  --> */}
              <div className="card  feature-card      bg-white text-dark border-0 shadow-sm">
                <img src="images/11.png" className="   card-img" alt="..." />
                <div className="  card-img-overlay"></div>
                <div className="z-index-custom   opacity-75  border-0 shadow-none text-white">
                  <h6>Free Consulting</h6>
                  <small>Join us for consultatoins</small>
                </div>
              </div>
              {/* <!-- card 1 end --> */}
            </div>
            {/* <!-- card 2 start  --> */}
            <div className="card  feature-card    bg-white text-dark border-0 shadow-sm">
              <img src="images/12.png" className="card-img" alt="..." />
              <div className="card-img-overlay"></div>
              <div className="z-index-custom   opacity-75  border-0 shadow-none text-white">
                <h6>Free Consulting</h6>
                <small>Join us for consultatoins</small>
              </div>
            </div>
            {/* <!-- card 2 end -->
      <!-- card 3 start  --> */}
            <div className="card  feature-card    bg-white text-dark border-0 shadow-sm">
              <img src="images/13.png" className="card-img" alt="..." />
              <div className="card-img-overlay"></div>
              <div className="z-index-custom   opacity-75  border-0 shadow-none text-white">
                <h6>Free Consulting</h6>
                <small>Join us for consultatoins</small>
              </div>
            </div>
            {/* <!-- card 3 end --> */}
          </div>
        </div>
      </section>
      <section className="container mb-lg-3">
        <div>
          <div className="row row-cols-4 align-items-center  rounded-3 m-0 justify-content-around">
            <div className="col-12 col-lg-3 bg-white rounded border-primary text-center   my-2 p-3">
              {/* <!-- card 1 start  --> */}
              <div className="card  feature-card    bg-white text-dark border-0 shadow-sm">
                <img src="images/14.png" className="card-img" alt="..." />
                <div className="card-img-overlay"></div>
                <div className="z-index-custom   opacity-75  border-0 shadow-none text-white">
                  <h6>Free Consulting</h6>
                  <small>Join us for consultatoins</small>
                </div>
              </div>
              {/* <!-- card 1 end --> */}
            </div>
            {/* <!-- card 2 start  --> */}
            <div className="card  feature-card    bg-white text-dark border-0 shadow-sm">
              <img src="images/15.png" className="card-img" alt="..." />
              <div className="card-img-overlay"></div>
              <div className="z-index-custom   opacity-75  border-0 shadow-none text-white">
                <h6>Free Consulting</h6>
                <small>Join us for consultatoins</small>
              </div>
            </div>
            {/* <!-- card 2 end -->
      <!-- card 3 start  --> */}
            <div className="card  feature-card    bg-white text-dark border-0 shadow-sm">
              <img src="images/16.png" className="card-img" alt="..." />
              <div className="card-img-overlay"></div>
              <div className="z-index-custom   opacity-75  border-0 shadow-none text-white">
                <h6>Free Consulting</h6>
                <small>Join us for consultatoins</small>
              </div>
            </div>
            {/* <!-- card 3 end --> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
