import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="text1">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="H">C</span>
          <span>oeval</span> <span className="H">P</span>
          <span>ads</span>
        </Link>
      </div>
      <div className="deskMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="deskMenuItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskMenuItem"
        >
          About Us
        </Link>
        <Link
          activeClass="active"
          to="products"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskMenuItem"
        >
          Products
        </Link>
        <Link
          activeClass="active"
          to="blog"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskMenuItem"
        >
          Blog
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskMenuItem"
        >
          Contact Us
        </Link>
      </div>
      {/* <button
        className="deskMenuBtn"
        onClick={() => {
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth", offset: "+70" });
        }}
      >
        <img src={contactlog} alt="CONTACT" className="deskMenuImg" />
        CONTACT
      </button> */}
    </nav>
  );
};

export default Navbar;