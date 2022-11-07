import React from 'react'
import './sidebar.css'
export default function sidebar(){
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <a className="href" href="BloodChart"> <li className="sidebarListItem active">Menu1</li></a>
              <a className="href" href="BloodChart"><li className="sidebarListItem">Menu2</li></a>
              <a className="href" href="BloodChart"><li className="sidebarListItem">Menu3</li></a>
              <a className="href" href="BloodChart"><li className="sidebarListItem">Menu4</li></a>
              <a className="href" href="BloodChart"><li className="sidebarListItem">Menu4</li></a>
            </ul>
          </div>
        </div>
      </div>
    );
}