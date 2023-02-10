import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navig.css';

const Navig = () => {
  return (
    <Navbar className='sticky-nav' bg="light" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className='logo' href="#home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="my-2 my-lg-0 ms-auto"  style={{ maxHeight: '180px'}}
            navbarScroll>
            <Nav.Link className='nav-links' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-links' href="#history">History</Nav.Link>
            <Nav.Link className='nav-links' href="#skill">Skills</Nav.Link>
            <Nav.Link className='nav-links'href="#work">works</Nav.Link>
            <Nav.Link className='nav-links'href="#contact">contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navig