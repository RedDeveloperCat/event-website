import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MyNavbar.css'

function MyNavbar() {
  return (
    <Navbar expand="lg" bg='dark' className="navbar-dark">
      <Container fluid>
        {/* <Navbar.Brand href="#">IETE Club</Navbar.Brand> */}
        <img src="/src/assets/sfit-logo.png" alt="IETE Club Logo" className="logo-img" />
        <div className="logo"><span className="logo-span">IETE Club</span></div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '160px' }}
            navbarScroll
          >
          <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          <NavDropdown title="Events" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">SFIT</Nav.Link>
            <Nav.Link href="#action2">Gallery</Nav.Link>
          </Nav>
          <Nav.Link href="#" disabled>
          <img src="/src/assets/yt.svg" alt="s-m" className="social-media-link" />
            </Nav.Link>
            <Nav.Link href="#" disabled>
            <img src="/src/assets/twitter.svg" alt="s-m" className="social-media-link" />
            </Nav.Link>
            <Nav.Link href="#" disabled>
            <img src="/src/assets/linkedin.svg" alt="s-m" className="social-media-link" />
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;