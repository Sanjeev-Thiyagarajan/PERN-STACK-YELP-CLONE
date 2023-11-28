import React from "react";
import UMHeader from "../components/UM/UMHeader";
import AddUserMaster from "../components/UM/AddUserMaster";
import UserMasterList from "../components/UM/UserMasterList";
import BgImage from '../y4j bg.png';
import '../css/Home.css'
import { useParams, useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  function handleUMRoute() {
    history.push("/userMasters");
  }
  function handleCustRoute() {
    history.push("/customers");
  }
  return (
    <>
    
    <UMHeader />  
    <div className="container1">
      <img src={BgImage}  class="d-inline-block align-top" alt="Y4jBgImage"/>
      <button className="btn1" onClick={handleUMRoute}>Users </button>
      <button className="btn2" onClick={handleCustRoute}>Candidate</button>
    </div>
    </>
  );
};

export default Home;
