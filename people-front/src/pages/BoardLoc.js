import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function BoardLoc() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/postList").then((response) => {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);


  return (
    <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href" href="Board">
            {" "}
            <li className="sidebarListItem2 active">전체게시판</li>
          </a>
          &nbsp;
          <a className="href" href="BoardBloodType">
            <li className="sidebarListItem2">혈액형게시판</li>
          </a>
          &nbsp;
          <a className="href" href="BoardLoc">
            <li className="sidebarListItem2">지역게시판</li>
          </a>
          <br></br>
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            Top
          </button>
        </ul>
      </div>

      <div className="container">
        <h1 className="sidebarTitle">소통해요!</h1>
        <span align="center" className="hello">
           가까운 지역간의 소통을 할 수 있는 게시판입니다.
        </span>
        <hr />

        <div id="postContainer" align="center">
          <br />
          <table>
          
            <div>
              <div id="boardSize">
              <td id="boardItemSize1">{it.postkey}{"  "}</td>
              <td id="boardItemSize2">혈액형: {it.bloodType}{" "}</td>
              <td id="boardItemSize3">혈액종류: {it.bloodKind}{" "}</td>
              <td id="boardItemSize4"><a href="/MyPage">제목: {it.title}</a>{" "}</td>
              <td id="boardItemSize5">환자성명: {it.patientName}{" "}</td>
              <td id="boardItemSize6">병원: {it.hospital}{" "}</td>
              <td id="boardItemSize7">등록일: {it.postDate}{" "}</td>
              <td id="boardItemSize8">수량: {it.responseB}/{it.requestB}</td></div><br/>
          <hr/>
            </div>
          
          </table>
              <br></br>
          <Link to="/BoardView">
            <button id= "loginBtn">상세화면</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BoardLoc;
