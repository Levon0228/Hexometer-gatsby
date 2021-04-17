import React from "react"
import logoSrc from "../../images/hexometer-logo.svg"
import { Container, Navbar, Nav } from "react-bootstrap"
import "./header.css"

const Header = () => (
  <header>
    <Navbar bg="white" fixed="top">
      <Container className="navHeader">
        <Navbar.Brand href="#">
          <img src={logoSrc} alt="logo" />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Item className="navItem">
            <Nav.Link href="#">How does it work?</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link href="#">Solutions</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link href="#">Tools</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link href="#">Academy</Nav.Link>
          </Nav.Item>
        </Nav>
        <button className="get-stared">Get Started for Free</button>
        <Nav.Link href="#" className="loginBtn">
          Login
        </Nav.Link>
      </Container>
    </Navbar>
  </header>
)

export default Header
