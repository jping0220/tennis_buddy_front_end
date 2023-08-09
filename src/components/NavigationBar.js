import '../App.css';
import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import { RouterNavLink } from "./RouterNavLink";



export const NavigationBar = () => {
      const { isAuthenticated } = useAuth0();

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Toggle ria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Item>
              <RouterNavLink to="/">Home</RouterNavLink>
            </Nav.Item>
            <Nav.Item>
              <RouterNavLink to="/about_us">About Us</RouterNavLink>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            {isAuthenticated ? (
              <>
                <Nav.Item>
                  <RouterNavLink to="/log_out">Log Out</RouterNavLink>
                </Nav.Item>
                <Nav.Item>
                  <RouterNavLink to="/profile">Player Profile</RouterNavLink>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <RouterNavLink to="/log_in">Log In</RouterNavLink>
                </Nav.Item>
                <Nav.Item>
                  <RouterNavLink to="/sign_up">
                    Player Registration
                  </RouterNavLink>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  
    );
};