import { useState } from "react";
import ListGroup from "./ListGroup";
import BlogsPage from "./BlogsPage";
import Home from "./Home";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "list-group":
        return <ListGroup />;
      case "blogs-page":
        return <BlogsPage />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button
              onClick={() => setCurrentPage("home")}
              className="nav-item nav-link"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("list-group")}
              className="nav-item nav-link"
            >
              List Group
            </button>
            <button
              onClick={() => setCurrentPage("blogs-page")}
              className="nav-item nav-link"
            >
              Blog Page
            </button>
          </div>
        </div>
      </nav>
      <main>{renderPage()}</main>
    </>
  );
};

export default NavBar;
