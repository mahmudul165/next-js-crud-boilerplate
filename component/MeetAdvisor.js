import React from "react";

function MeetAdvisor() {
  return (
    <section className="container mt-5  ">
      <div className="text-center">
        <h5 className=" my-3 fw-2 fw-bold  global-text">
          <span className="fs-2 fw mt-2  ">-</span>
          Meet Our Advisors <span className="fs-2 fw mt-2  ">-</span>
        </h5>

        <h1 className="fs-1 fw-bolder my-2 p-3">
          We have an Exclusive Team Member
        </h1>
      </div>
      {/* <!-- team member card start  --> */}
      <div className="d-flex advisor-container p-5 ">
        {/* <!-- card 1 start  --> */}
        <div className="card bg-white text-dark border-0  team-shape p-0  m-1">
          <img src="images/a3.png" className="  " alt="..." />
          <div className="card-img-overlay"></div>
          <div className="card-footer border-0 shadow-none bg-white text-center">
            <h6>mahmudul Hasan</h6>
            <p>Business Developer</p>
          </div>
        </div>
        {/* <!-- card 1 end --> */}
        <div className="card bg-white text-dark border-0 team-shape  p-0  m-1">
          <img src="images/a4.png" className="card-img" alt="..." />
          <div className="card-img-overlay"></div>
          <div className="card-footer border-0 shadow-none bg-white text-center">
            <h6>mahmudul Hasan</h6>
            <p>Business Developer</p>
          </div>
        </div>
        <div className="card bg-white text-dark border-0 team-shape  p-0  m-1">
          <img src="images/a1.png" className="card-img" alt="..." />
          <div className="card-img-overlay"></div>
          <div className="card-footer border-0 shadow-none bg-white text-center">
            <h6>mahmudul Hasan</h6>
            <p>Business Developer</p>
          </div>
        </div>
        <div className="card bg-white text-dark border-0 team-shape  p-0  m-1">
          <img src="images/a2.png" className="card-img" alt="..." />
          <div className="card-img-overlay"></div>
          <div className="card-footer border-0 shadow-none bg-white text-center">
            <h6>mahmudul Hasan</h6>
            <p>Business Developer</p>
          </div>
        </div>
      </div>
      {/* <!-- 2nd part of advisors team --> */}
      <section className="d-flex align-items-center my-3 py-2">
        <div className="do-section-element">
          <h5 className=" my-3 fw-2 fw-bold  global-text">
            <span className="fs-2 fw mt-2  ">-</span>
            Company Skills
          </h5>

          <h1 className="fs-1 fw-bolder my-2 py-3">
            We Have Experience for Business Planning
          </h1>
          <p className="py-2 my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
          <p>
            Unknown printer took a galley of type and scrambled it to make a
            type specimen book.There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which don't look even.
          </p>

          <button className="btn btn-lg btn-dark text-white button-custom rounded-pill my-2 py-2">
            <div className="button-custom-in"></div>
            Learn More
          </button>
        </div>
        <div className="d-flex p-3">
          <div className="m-3 mb-3">
            <div className="test-shape-1  "></div>
            <div className="test-shape-2"></div>
          </div>
          <div className="m-3">
            <div className="test-shape-2 "></div>
            <div className="test-shape-1"></div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default MeetAdvisor;
