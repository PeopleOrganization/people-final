import React from "react";
import "../menu.css";
import Img from "../imgs/back2.png";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div className="centerContainer">
      <img
        src={Img}
        style={{
          width: "100vw",
          height:"100%",
          backgroundrepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundAttachment: "fixed",
          webkitUserDrag: "none",
          alignItems: "center",
          justifyContent: "center",
        }}
        alt="React"
      ></img>
      <Link to="Board">
        <button className="mainButton" type="button"></button>
      </Link>
    </div>
  );
}

export default Main;
