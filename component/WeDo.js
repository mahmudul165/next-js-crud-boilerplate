import React from "react";
import { motion } from "framer-motion";
import { Fade, Rotate } from "react-reveal";
function WeDo() {
  return (
    <section className="bg-custom-color we-do-section">
      <div className="container p-5">
        <div className="row row-cols-2 align-items-center we-do-top-container bg-dark   text-whte z-index-1">
          <motion.div
            animate={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 5 }}
            className="img-do-section p-3 z-index-0 "
          >
            <img src="/images/Background_Complete.png" alt="" />
          </motion.div>
          <div className="do-section-element text-white my-2 py-1">
            <h5 className=" my-3 fw-2 fw-bold  global-text">
              <span className="fs-2 fw mt-2  ">-</span>
              What We Do
            </h5>

            <h1 className="fs-1 fw-bolder my-2 p-3">
              Why Choose Our Business Agency
            </h1>
            <p className="my-3">
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>

            <button className="btn btn-lg button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
              <div className=" inner-button bg-dark fw-bold"></div>
              Consulting Now
            </button>
          </div>
        </div>
      </div>
      {/* <!-- 4 card for we do section start --> */}
      <div className="container  my-3 py-3">
        <div className="d-flex align-items-center  rounded-3 m-0 justify-content-around bg-custom-color">
          {/* <!-- card 1 start  --> */}
          <div
            className="card text-dark border-0 p-5 bg-custom-color align-items-center"
            style={{ width: "18rem" }}
          >
            <Fade top className="p-5">
              <img
                src="icons/group1.png"
                className="card-img h-50 w-50"
                alt="..."
              />
            </Fade>
            <div className="card-img-overlay"></div>
            <div className="card-footer border-0 shadow-none  text-center bg-custom-color">
              <h2 className="fs-1 fw-bolder my-2">3456</h2>
              <p>Last updated 3 mins ago</p>
            </div>
          </div>
          {/* <!-- card 1 end -->
      <!-- card 2 start  --> */}
          <div
            className="card text-dark border-0 p-5 bg-custom-color align-items-center"
            style={{ width: "18rem" }}
          >
            <Fade top className="p-5">
              <img
                src="icons/group2.png"
                className="card-img w-50 h-50"
                alt="..."
              />
            </Fade>
            <div className="card-img-overlay"></div>
            <div className="card-footer border-0 shadow-none  text-center bg-custom-color align-items-center">
              <h2 className="   fs-1 fw-bolder my-2  ">3456</h2>
              <p>Last updated 3 mins ago</p>
            </div>
          </div>
          <div
            className="card text-dark border-0 p-2 bg-custom-color align-items-center"
            style={{ width: "18rem" }}
          >
            <Fade top className="p-5">
              <img src="icons/group3.png" className="w-50 h-50  " alt="..." />
            </Fade>
            <div className="card-img-overlay"></div>
            <div className="card-footer border-0 shadow-none  text-center bg-custom-color">
              <h2 className="fs-1 fw-bolder my-2">3456</h2>
              <p>Last updated 3 mins ago</p>
            </div>
          </div>
          <div
            className="card text-dark border-0 p-5 bg-custom-color align-items-center"
            style={{ width: "18rem" }}
          >
            <Fade top className="p-5">
              <img
                src="icons/group4.png"
                className="card-img w-50 h-50"
                alt="..."
              />
            </Fade>
            <div className="card-img-overlay"></div>
            <div className="card-footer border-0 shadow-none  text-center bg-custom-color align-items-center">
              <h2 className="fs-1 fw-bolder my-2">3456</h2>
              <p>Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeDo;
