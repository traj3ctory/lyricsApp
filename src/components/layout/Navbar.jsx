import React, { useEffect } from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const navs = document.querySelector("#navs");
      if (
        document.documentElement.scrollTop ||
        document.body.scrollTop > window.innerHeight
      ) {
        navs.classList.add("bg-info");
        navs.classList.remove("bg-transparent");
      } else {
        navs.classList.add("bg-transparent");
        navs.classList.remove("bg-info");
      }
    });
  });
  return (
    <Navbar
      id="navs"
      collapseOnSelect
      expand="lg"
      //   bg="transparent"
      variant="dark"
      className="shadow fixed-top"
    >
      <Navbar.Brand href="#home" className="navbar-brand mb-0 h1 mx-auto font-weight-bold font-italic">
        LyricsFinder
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
