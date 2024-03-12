import React, { useState, useEffect } from "react";
function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar && window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 ${
        isSticky ? "sticky-top shadow-sm" : ""
      }`}
    >
      <a
        href="#"
        className="navbar-brand p-0 d-flex align-items-center fw-bolder"
      ></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        =
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto py-0 pe-4">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#" id="about-section" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Location
            </a>
          </li>
        </ul>
        <div className="d-flex justify-content-center">
          <a className="btn btn-danger mx-1" type="submit" href="#">
            Log-in
          </a>
          <a className="btn btn-danger mx-1" type="submit" href="#">
            Sign-up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
