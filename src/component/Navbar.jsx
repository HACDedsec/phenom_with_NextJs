import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "@/component/styleComponent.module.css";

const NavbarComponent = () => {
  const [context, setContext] = useState();

  //  values of dropdown Assigned in state static for resuablity
  useEffect(() => {
    setContext(
      <>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </>
    );
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg" className="row">
        <div className={`col-sm-4 col-4 ${styles.NavBarAlign}`}>
          <Navbar.Brand href="#home" className={styles.LogoAlign}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 37 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              class="Header_logo__core__AoIuo"
            >
              <path
                d="M23.236 0A13.254 13.254 0 0 0 10 13.234v20.092a2.848 2.848 0 0 0 5.494 1.109c.14-.353.207-.73.199-1.109v-9.215A13.233 13.233 0 1 0 23.236 0Zm0 20.776a7.543 7.543 0 1 1 7.542-7.542 7.55 7.55 0 0 1-7.542 7.542ZM21.369 40.068a18.784 18.784 0 0 1-17.044 0 2.945 2.945 0 0 0-4.17 3.541 2.943 2.943 0 0 0 1.508 1.71 24.663 24.663 0 0 0 22.368 0 2.944 2.944 0 1 0-2.662-5.252Z"
                fill="currentColor"
              ></path>
            </svg>
            <b>Phenom</b>
          </Navbar.Brand>
        </div>
        <div className={`col-sm-9 ms-5 ms-sm- ${styles.MenuAlign}`}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="row" id="basic-navbar-nav">
            <Nav className="me-auto ">
              <div className="col-sm-7 d-flex">
                <NavDropdown title="Platform" id="basic-nav-dropdown">
                  {context}
                </NavDropdown>
                <NavDropdown title="Solution" id="basic-nav-dropdown">
                  {context}
                </NavDropdown>
                <NavDropdown title="Company" id="basic-nav-dropdown">
                  {context}
                </NavDropdown>
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                  {context}
                </NavDropdown>
              </div>

              <div className="col-sm-3">
                <Button className={styles.ButtonDesign}>Book Demo</Button>&nbsp;
                <Button
                  className={styles.ButtonDesign}
                  variant="outline-primary"
                >
                  Login
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
