import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MyNavbar.css";

function MyNavbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`navbar-custom ${scrolled ? 'scrolled' : ''}`} fixed="top">
      <Container fluid>
        <div className="logo" onClick={() => navigate("/")}>
          <img
            src="/sfit-logo.png"
            alt="IETE Club Logo"
            className="logo-img"
          />
          <span className="logo-span">IETE SFIT</span>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "260px" }}
            navbarScroll
          >
            <Nav.Link href="/#about-us-container">About Us</Nav.Link>
            <Nav.Link href="/gallery#event-gallery">Events</Nav.Link>
            <Nav.Link
              href="https://www.sfit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              SFIT
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/drive/folders/1ojwY1EK1pGlCHbOoiaMI_u0czV58InUg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reports
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/drive/folders/18e-vmhSyp6MWnVtSb_HHEsKup_q0BYsb?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magazine
            </Nav.Link>
          </Nav>

          {/* Social Media Icons */}
          <Nav.Link
            href="#"
            onClick={() => window.open("https://www.instagram.com/iete_sfit?igsh=dTR3cW1hMG9ubDgz", "_blank")}
          >
            <img src="/instagram.png" alt="Instagram" className="social-media-link" />
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
          >
            <img src="/linkedin.png" alt="LinkedIn" className="social-media-link" />
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() => window.open("https://www.twitter.com", "_blank")}
          >
            <img src="/twitter.png" alt="Twitter" className="social-media-link" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;