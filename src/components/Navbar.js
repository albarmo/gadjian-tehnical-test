import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ background: "white" }}>
        <Navbar.Brand href="#home" style={{ padding: "10px" }}>
          <img
            src="https://rec-data.kalibrr.com/www.kalibrr.com/logos/NKBT98AA9PZXLQM85VEURQBGVE5FDFV48DGSLKDL-5fffdb12.png"
            alt="logoImage"
            width="120px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">
              Hallo, <span>Gadjian User </span>
              <Image
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                roundedCircle
                width="35px"
                style={{ marginLeft: "20px" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
