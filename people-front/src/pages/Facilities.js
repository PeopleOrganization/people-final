//구글맵키 AIzaSyBIgZoVqTFMhUuZj2l0bFRkQsPoXWRVFI0
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import House_des from "./facilities_components/house_des";
import Cafe_des from "./facilities_components/Cafe_des";
import Sidebar from "./facilities_components/Sidebar";
import Googlemap from "./facilities_components/Googlemap";

const components = {
  house: <House_des />,
  cafe: <Cafe_des />,
  bank: "혈액원이란 수혈에 필요한 혈액을 채혈 ·조제 ·보존하고 공급하는기관입니다.",
  hospital: "지정병원에서도 지정헌혈을 할 수 있어요.",
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Facilities(props) {
  //console.log(new URLSearchParams(window.location.search).get("blood"));

  return (
    <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <Sidebar
            facility={new URLSearchParams(window.location.search).get("blood")}
          />
          <br></br>
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            Top
          </button>
        </ul>
      </div>

      <div className="container">
        <h1 className="sidebarTitle">찾아보아요!</h1>
        <span align="center" className="hello">
          {components[new URLSearchParams(window.location.search).get("blood")]}
        </span>
        <hr />
        <Googlemap />
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Facilities;