import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import navlogo from "../assests/navlogo.png"
import "./Navbar.css"


function BasicExample() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        <img className="navlogo" src={navlogo} width={50} height={45} />
        {/* <Navbar.Brand href="#home" className="navbar-brand fw-bold fs-4">SHIV-TEMPLE
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  nav-link active navbar-nav mx-auto mb-2 mb-lg-0" >
            <Nav.Link href="#Home">HOME</Nav.Link>
            <Nav.Link href="#About">ABOUT</Nav.Link>
            <Nav.Link href="#Contact">CONTACT</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#Login"  >
              <Button className="login-Btn">
                Login
              </Button>
            </Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;






