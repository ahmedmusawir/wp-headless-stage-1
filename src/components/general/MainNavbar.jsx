import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function MainNavbar(props) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React & WP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/nextprev">
              Next/Prev Pagination
            </Nav.Link>
            <Nav.Link as={Link} to="/numeric">
              Numeric Pagination
            </Nav.Link>
            <Nav.Link as={Link} to="/loadmore">
              Load More Pagination
            </Nav.Link>
            <Nav.Link as={Link} to="/card-layout">
              Card Layout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

MainNavbar.propTypes = {};

export default MainNavbar;
