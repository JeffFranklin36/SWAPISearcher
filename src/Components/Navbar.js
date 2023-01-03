import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'

const NavBar = () => (
  <Navbar bg="dark" variant="dark" className="navbar">
   <Container>
      <Nav className="me-auto">
        <Nav.Link  href="/">Home</Nav.Link>
        <Nav.Link  href="/planets">Planets</Nav.Link>
        <Nav.Link  href="/people">People</Nav.Link>
        <Nav.Link  href="/species">Species</Nav.Link>
        <Nav.Link  href="/starships">Starships</Nav.Link>
        <Nav.Link  href="/vehicles">Vehicles</Nav.Link>
      </Nav>
      </Container>
  </Navbar>
);

export default NavBar;
