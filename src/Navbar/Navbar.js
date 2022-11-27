import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import navlogo from "../assests/navlogo.png"
import "./Navbar.css"
import { useNavigate } from "react-router-dom";


function BasicExample() {
  // const navigate = useNavigate();
  // const goToContact = () => {
  //   navigate("/Contact")
  // };
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        <img className="navlogo" src={navlogo} width={50} height={45} />
        {/* <Navbar.Brand href="#home" className="navbar-brand fw-bold fs-4">SHIV-TEMPLE
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav-link  navbar-nav mb-2 mb-lg-0"style={{marginLeft:"auto"}} >
            <Nav.Link href="#Home">HOME</Nav.Link>
            <Nav.Link href="#About">ABOUT</Nav.Link>
            <Nav.Link href="#Contact">CONTACT</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Contact"  >
              <Button className="login-Btn" onClick={""}>
                Request Demo
              </Button>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;






