import React from "react";

function Sidebar(props) {
  return (
    <>
    <div id="sidebarList2">
      <a className="href2" href="Facilities?blood=house">
        {" "}
        <li
          className={
            props.facility === "house"
              ? "sidebarListItem2 active"
              : "sidebarListItem2"
          }
        >
          헌혈의집
        </li>
      </a>
      &nbsp;
      <a className="href2" href="Facilities?blood=cafe">
        <li
          className={
            props.facility === "cafe"
              ? "sidebarListItem2 active"
              : "sidebarListItem2"
          }
        >
          헌혈카페
        </li>
      </a>
      &nbsp;
      <a className="href2" href="Facilities?blood=bank">
        <li
          className={
            props.facility === "bank"
              ? "sidebarListItem2 active"
              : "sidebarListItem2"
          }
        >
          혈액원
        </li>
      </a>
      &nbsp;
      <a className="href2" href="Facilities?blood=hospital">
        <li
          className={
            props.facility === "hospital"
              ? "sidebarListItem2 active"
              : "sidebarListItem2"
          }
        >
          지정병원
        </li>
      </a>
    </div>

    <ui className="sidebarCircle">
    <ul className="sidebarList">
      <a className="href" href="Facilities?blood=house">
        {" "}
        <li className=
        {
          props.facility === "house"
            ? "sidebarListItem active"
            : "sidebarListItem"
        }
        
       >헌혈의집</li>
      </a>
      
      &nbsp;
      
      <a className="href" href="Facilities?blood=cafe">
        {" "}
        <li className=
        {
          props.facility === "cafe"
            ? "sidebarListItem active"
            : "sidebarListItem"
        }
        
       >헌혈카페</li>
      </a>
      &nbsp;
      <a className="href" href="Facilities?blood=bank">
        {" "}
        <li className=
        {
          props.facility === "bank"
            ? "sidebarListItem active"
            : "sidebarListItem"
        }
        
       >혈액원</li>
      </a>
      &nbsp;
      <a className="href" href="Facilities?blood=hospital">
        {" "}
        <li className=
        {
          props.facility === "hospital"
            ? "sidebarListItem active"
            : "sidebarListItem"
        }
        
       >지정병원</li>
      </a>
    </ul>
  </ui>
  </>
  );
}

export default Sidebar;