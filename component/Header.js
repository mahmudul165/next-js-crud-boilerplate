import React from "react";
function Header() {
  return (
    <header className="    ">
      {/* <!-- navbar --> */}
      <section className="navbar-custom">
        <nav className="container navbar navbar-expand-lg">
          <div className="d-flex align-items-end">
            <div className="col-lg-2">
              <h3 className="fs-5 fw-bolder global-text mx-1">COMPANY</h3>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse col-lg-10 mt-3 w-100"
              id="navbarNav"
            >
              <ul className="navbar-nav d-flex align-items-center">
                <li className="nav-item">
                  <a className="btn" href="">
                    Home
                  </a>
                </li>
                {/* <!-- pages --> */}
                <li className="nav-item dropdown">
                  <a
                    className="btn dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul
                    className="dropdown-menu mt-3"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <!-- services -->
                  <!-- pages --> */}
                <li className="nav-item dropdown">
                  <a
                    className="btn dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu mt-3"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="btn" href="">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn" href="">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn" href="">
                    Contacts
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-md btn-dark text-white button-custom rounded-pill">
                    <div className="button-custom-in"></div>
                    Consulting Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* <!-- header content part --> */}
      {/* <!-- carousel start--> */}
    </header>
  );
}

export default Header;
