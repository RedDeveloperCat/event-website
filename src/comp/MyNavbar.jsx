import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MyNavbar.css";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" bg="dark" className="navbar-dark">
      <Container fluid>
        {/* <Navbar.Brand href="#">IETE Club</Navbar.Brand> */}
        <img
          src="/sfit-logo.png"
          alt="IETE Club Logo"
          className="logo-img"
          onClick={() => navigate("/")}
        />
        <div
          className="logo"
          onClick={() => navigate("/")}
        >
          <span className="logo-span">IETE SFIT</span>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "220px" }}
            navbarScroll
          >
            {/* <NavDropdown title="About Us" id="navbarScrollingDropdown">
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
            </NavDropdown> */}
            <Nav.Link href="/#about-us-container">About Us</Nav.Link>
            <Nav.Link href="/gallery#event-gallery">Events</Nav.Link>
            <Nav.Link
              href="https://www.sfit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              SFIT
            </Nav.Link>

            <Nav.Link href="/gallery">Gallery</Nav.Link>

            <Nav.Link
              href="https://drive.google.com/drive/folders/1ojwY1EK1pGlCHbOoiaMI_u0czV58InUg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reports
            </Nav.Link>

          </Nav>
          <Nav.Link
            href="#"
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          >
            <img
              src="/instagram.png"
              alt="s-m"
              className="social-media-link"
            />
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
          >
            <img
              src="/linkedin.png"
              alt="s-m"
              className="social-media-link"
            />
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() => window.open("https://www.twitter.com", "_blank")}
          >
            <img
              src="/twitter.png"
              alt="s-m"
              className="social-media-link"
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
