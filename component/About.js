import React from "react";
import { Slide } from "react-reveal";
import { motion, MotionConfig } from "framer-motion";
function About() {
  return (
    <section className="my-5 about-us-shape">
      <section className="about-us container d-flex my-5 p-3 align-items-center">
        <div>
          <Slide left>
            <MotionConfig transition={{ duration: 1 }}>
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
              >
                <img
                  width="500px"
                  height="354px"
                  className="shopping-size px-2 "
                  src="/images/object.png"
                  alt=""
                />
              </motion.div>{" "}
            </MotionConfig>
          </Slide>
        </div>
        <div className="ml-4 p-5">
          <Slide right>
            <div className="d-flex grid gap-3  ">
              <div className="bg-danger fs4 fw-bolder">
                <hr />
              </div>
            </div>
            <h5 className=" my-3 fw-2 fw-bold  global-text">
              <span className="fs-2 fw mt-2  ">-</span>
              About Us
            </h5>
            <h1 className="my-3 fs-1 fw-bolder">
              Professional Business Guidance Agency
            </h1>
            <p className="my-3 py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since Unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </p>
            <ul className="ul-li-custom ">
              <li>Business & Consulting Agency</li>
              <li>Business & Consulting Agency</li>
            </ul>
            <button className="btn btn-lg button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
              <div className=" inner-button bg-dark fw-bold"></div>
              Learn More
            </button>
          </Slide>
        </div>
      </section>
    </section>
  );
}

export default About;
