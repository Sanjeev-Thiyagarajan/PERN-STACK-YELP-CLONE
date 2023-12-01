import React from "react";
import y4jIcon from "../../Y4jIcon.jpg";
import { useHistory, Link } from "react-router-dom";

const UMHeader = () => {
  let history = useHistory();

  const handleHomeClick = () => {
    history.push("/");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        style={{ padding: "10px" }}
      >
        <img
          id="Y4jIcon"
          src={y4jIcon}
          width="110"
          height="40"
          className="d-inline-block align-top"
          alt="Y4JIcon"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* Use Link component for internal navigation */}
              <Link
                to="/"
                className="nav-link"
                onClick={handleHomeClick}
                style={{ cursor: "pointer" }}
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                User
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <footer
        className="footer mt-auto py-3 bg-dark fixed-bottom"
        style={{
          position: "flex",
          bottom: "0",
          width: "100%",
          height: "2em",
          fontSize: "12px",
          lineHeight: "1.5",
        }}
      >
        <div className="container">
          <span className="text-light">
            &nbsp;&nbsp;Privacy Policy &nbsp; &nbsp;&nbsp;&nbsp; Cookies &nbsp;
            &nbsp;&nbsp;&nbsp; Terms & conditions &nbsp; &nbsp;
          </span>
        </div>
      </footer>
    </>
  );
};

export default UMHeader;
