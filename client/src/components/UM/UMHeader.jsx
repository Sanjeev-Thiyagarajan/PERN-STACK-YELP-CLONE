import React from "react";
import y4jIcon from "../../Y4jIcon.jpg"
import { useHistory } from "react-router-dom";

const UMHeader = () => {
  let history = useHistory(); 
  const handleHomeClick= () =>{
    history.push("/");
  }
  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark fixed-top">
        <img id="Y4jIcon" src={y4jIcon} width="110" height="40" className="d-inline-block align-top" alt="Y4JIcon"/>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            {/* <btn className="nav-link" onClick={handleHomeClick} >Home <span className="sr-only">(current)</span></btn> */}
            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">User </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
       <footer className="footer mt-auto py-3 bg-dark fixed-bottom" style={{
         position: "flex",
         bottom: "0",
         width: "100%",
         height: "1em", /* Set the fixed height of the footer here */
         fontSize: 11,
         lineHeight: "1"
       }}>
         <div className="container">
           <span className="text-light">&nbsp;&nbsp;Privacy Policy &nbsp; &nbsp;&nbsp;&nbsp; Cookies &nbsp; &nbsp;&nbsp;&nbsp; Terms & conditions &nbsp; &nbsp;</span>
           </div>
       </footer>
       </>
  );
};

export default UMHeader;
