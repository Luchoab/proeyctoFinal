import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Logo } from '../../components/Logo/Logo'

export const Sidebar = () => {
  return (
    <div>
        <Navbar expand="lg" className='navbar fixed-top'>
      <Container>
        <Navbar.Brand href="/">
          <Logo/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='links-nav'>Home</Nav.Link>
            <Nav.Link href="/registro" className='links-nav'>Registrarse</Nav.Link>
          </Nav>
          <Nav className='links-nav'>
            <Nav.Link href='/login' className='links-nav'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
