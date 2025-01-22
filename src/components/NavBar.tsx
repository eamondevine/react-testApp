import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>React Test Page</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="router-nav-links" to="/">
              Home
            </Link>
            <Link className="router-nav-links" to="/ListGroup">
              Fonts
            </Link>
            <Link className="router-nav-links" to="/BlogsPage">
              Blogs
            </Link>
            <Link className="router-nav-links" to="/CreateNewBlog">
              New Blog
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

/*             <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */
