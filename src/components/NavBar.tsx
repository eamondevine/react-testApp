import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/ListGroup" className="nav-item nav-link">
            Fonts
          </Link>
          <Link to="/BlogsPage" className="nav-item nav-link">
            Blogs
          </Link>
          <Link to="/CreateNewBlog" className="nav-item nav-link">
            New Blog
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
