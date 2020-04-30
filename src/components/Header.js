import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#">Hangman</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </Navbar>
  );
}

export default Header;