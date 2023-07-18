import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href="/">Tennis Buddy</Navbar.Brand>
            <Navbar.Toggle ria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Log_in">Log in</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/players">Players</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    </Styles>
)