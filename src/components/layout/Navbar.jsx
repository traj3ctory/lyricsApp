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
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Header;
