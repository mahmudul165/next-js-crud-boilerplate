import React from "react";
import { Slide } from "react-reveal";

function VideoSection() {
  return (
    <section height="597px" className="video-section  w-100 ">
      <video
        controls
        playsInline="playsInline"
        autoPlay="autoPlay"
        muted="muted"
        loop="loop"
        className="vid-bg"
      >
        <source src="/images/fiver gig.mp4" type="video/mp4" />
      </video>
      <section className="row   align-items-center ml-4 p-5 video-content text-white opacity-75">
        <div className=" col-7 ml-4 p-5  ">
          <Slide right>
            <div className="d-flex grid gap-3  ">
              <div className="bg-danger fs4 fw-bolder">
                <hr />
              </div>
            </div>
            <h6>
              <span className="fs-2 fw mt-2  ">-</span> Watch Videos
            </h6>
            <h1 className="my-3 fs-1 fw-bolder">
              Exclusive Video Presentation About Recent Project
            </h1>
            <p className="my-3 py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <button className="btn btn-lg button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
              <div className=" inner-button bg-dark fw-bold"></div>
              Need Any Project
            </button>
          </Slide>
        </div>
        <div className=" col-5 fs-1 fw-bolder global-text">
          <span className="p-4 fs-1 fw-bold">
            <i className="fa-brands fa-youtube-square"></i>
          </span>
        </div>
      </section>
    </section>
  );
}

export default VideoSection;
