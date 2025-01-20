/* import { useState } from "react"; */

const NavBar = () => {
  /* const [currentPage, setCurrentPage] = useState("home"); */

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
              /* onClick={() => setCurrentPage()} */
              className="nav-item nav-link"
            >
              TEXT
            </button>
            <button
              /* onClick={() => setCurrentPage()} */
              className="nav-item nav-link"
            >
              TEXT
            </button>
            <button
              /* onClick={() => setCurrentPage()} */
              className="nav-item nav-link"
            >
              TEXT
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
