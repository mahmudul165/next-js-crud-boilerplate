import React from "react";
import Slide from "react-reveal/Slide";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide video-section"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner video-content ">
          <section className="slider  mt-0   carousel-item active   ">
            <div className="container m-5 p-3">
              <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
                <div className=" p-3 m-3">
                  <Slide top>
                    <small className="fw-bolder text-white banner-sub-title">
                      BUSINESS CONSULTING
                    </small>
                  </Slide>
                  <Slide right>
                    <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
                      Making Difference Growth Your Business With Modern Ideas
                    </h2>
                  </Slide>
                  <div className="flex">
                    <button className="btn btn-lg button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                      <div className=" inner-button bg-dark fw-bold"></div>
                      Get Started Now
                    </button>
                    <button className="btn btn-lg bg-white text-dark button-custom rounded-pill p-2 m-1">
                      <div className="inner-button btn-color-bg fw-bold"></div>
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="slider  mt-0 carousel-item">
            <div className="container m-5 p-3">
              <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
                <div className=" p-3 m-3">
                  <Slide top>
                    {" "}
                    <small className="fw-bolder text-white banner-sub-title">
                      BUSINESS CONSULTING
                    </small>{" "}
                  </Slide>
                  <Slide right>
                    <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
                      Making Difference Growth Your Business With Modern Ideas
                    </h2>
                  </Slide>
                  <div className="flex">
                    <button className="btn btn-md button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                      <div className=" inner-button bg-dark fw-bold"></div>
                      Get Started Now
                    </button>
                    <button className="btn btn-md bg-white text-dark button-custom rounded-pill p-2 m-1">
                      <div className="inner-button btn-color-bg fw-bold"></div>
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="slider  mt-0 carousel-item ">
            <div className="container m-5 p-3">
              <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
                <div className=" p-3 m-3">
                  <Slide top>
                    <small className="fw-bolder text-white banner-sub-title">
                      BUSINESS CONSULTING
                    </small>
                  </Slide>
                  <Slide right>
                    <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
                      Making Difference Growth Your Business With Modern Ideas
                    </h2>
                  </Slide>
                  <div className="flex">
                    <button className="btn btn-md button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                      <div className=" inner-button bg-dark fw-bold"></div>
                      Get Started Now
                    </button>
                    <button className="btn btn-md bg-white text-dark button-custom rounded-pill p-2 m-1">
                      <div className="inner-button btn-color-bg fw-bold"></div>
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Slider;
{
  /*  <div id="carouselExampleSlidesOnly"  className="carousel slide" data-bs-ride="carousel">
  <div  className="carousel-inner">
    <div  className="carousel-item active">
      <img src="..."  className="d-block w-100" alt="...">
    </div>
    <div  className="carousel-item">
      <img src="..."  className="d-block w-100" alt="...">
    </div>
    <div  className="carousel-item">
      <img src="..."  className="d-block w-100" alt="...">
    </div>
  </div>
</div>
  
  */
}
