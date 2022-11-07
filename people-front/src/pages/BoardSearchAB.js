import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Board() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleOnClick = () => {
    window.localStorage.setItem("search", search);
    document.location.href = "/BoardSearch";
  };

  //엔터키 이벤트
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/searchAB", null, {
        params: {
          search: "%" + window.localStorage.getItem("search") + "%",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div id="bigContainer" style={{backgroundColor:"#F0F0F0"}}>
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href" href="Board">
            {" "}
            <li className="sidebarListItem2">전체게시판</li>
          </a>
          &nbsp;
          <li className="sidebarListItem3 active">
            혈액형게시판
            <li>
              <a id="BoardDropList" href="BoardA">
                A형
              </a>
            </li>
            <li>
              <a id="BoardDropList" href="BoardB">
                B형
              </a>
            </li>
            <li>
              <a id="BoardDropList" href="BoardAB">
                AB형
              </a>
            </li>
            <li>
              <a id="BoardDropList" href="BoardO">
                O형
              </a>
            </li>
          </li>
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
        AB 혈액형과 소통을 할 수 있는 게시판입니다.
        </span>
        <hr />
        <br></br>
        <div id="postContainer0" align="center">
          <div align="end" style={{ padding: "1%" }}>
            <TextField
              sx={{ width: "25%" }}
              name="search"
              label="검색"
              id="outlined-basic"
              variant="outlined"
              onChange={(event) => setSearch(event.target.value)}
              onKeyPress={handleOnKeyPress}
            />
          </div>
          <br />
          <table id="boardSize">
            <div>
              <div>
              <td className="noneMenu" id="boardItemSize1">Tb</td>
                <td id="boardItemSize2">혈액형</td>
                <td id="boardItemSize3">혈액종류</td>
                <td id="boardItemSize4">제목</td>
                <td id="boardItemSize5">환자성명</td>
                <td id="boardItemSize6">병원</td>
                <td id="boardItemSize7">등록일</td>
                <td id="boardItemSize8">수량</td>
              </div>
              <br />
              <hr />
            </div>
            {data.map((it) => (
              <Link key={it.postkey} to={`/BoardView${it.postkey}`}>
              <div id ="boardLink">
                <tr id="boardLink2" style={{textDecoration: "none"}}>
                  <td id="boardItemSize1">{it.postkey}</td>
                  <td id="boardItemSize2">{it.bloodType} </td>
                  <td id="boardItemSize3">{it.bloodKind} </td>
                  <td id="boardItemSize4">{it.title}</td>
                  <td id="boardItemSize5">{it.patientName} </td>
                  <td id="boardItemSize6">{it.hospital} </td>
                  <td id="boardItemSize7">{it.year}/{it.month}/{it.day}</td>
                  <td id="boardItemSize8">
                    {it.responseB}/{it.requestB}
                  </td>
                </tr>
                <br />
                <hr />
              </div>
                </Link>
            ))}
          </table>

          <table id="queryBoardSize">
            <div>
              <div>
                <td className="noneMenu" id="queryboardItemSize1">
                  Tb
                </td>

                <td id="queryboardItemSize2">혈액형</td>
                <td id="queryboardItemSize3">혈액종류</td>
                <td id="queryboardItemSize4">제목</td>
                <td id="queryboardItemSize5">환자성명</td>
                <td id="queryboardItemSize6">병원</td>
              </div>
              <br />
              <hr />
              <ui className="sidebarCircle">
          <ul className="sidebarList">
            <a className="href" href="Board">
              {" "}
              <li className="sidebarListItem">전체게시판</li>
            </a>
            &nbsp;
            <a className="href" href="BoardA">
              {" "}
              <li className="sidebarListItem">A혈액형</li>
            </a>
            &nbsp;
            <a className="href" href="BoardB">
              {" "}
              <li className="sidebarListItem">B혈액형</li>
            </a>
            &nbsp;
            <a className="href" href="BoardAB">
              {" "}
              <li className="sidebarListItem active">AB혈액형</li>
            </a>
            &nbsp;
            <a className="href" href="BoardO">
              {" "}
              <li className="sidebarListItem">O혈액형</li>
            </a>
            &nbsp;
          </ul>
        </ui>
            </div>
            {data.map((it) => (
              <Link key={it.postkey} to={`/BoardView${it.postkey}`}>
                <div id="boardLink">
                  <tr id="boardLink2" style={{ textDecoration: "none" }}>
                    <td id="queryboardItemSize1">{it.postkey}</td>
                    <td id="queryboardItemSize2">{it.bloodType} </td>
                    <td id="queryboardItemSize3">{it.bloodKind} </td>
                    <td id="queryboardItemSize4">{it.title}</td>
                    <td id="queryboardItemSize5">{it.patientName} </td>
                    <td id="queryboardItemSize6">{it.hospital} </td>
                  </tr>
                  <br />
                  <hr />
                </div>
              </Link>
            ))}
          </table>

          <br></br>
          <Link to="/BoardWrite">
            <button id="loginBtn" style={{marginTop:"15%", marginBottom:"5%"}}>글쓰기</button>
          </Link>
          <br></br>
          <br></br>
        </div>
        <br></br><br></br>
      </div>
    </div>
  );
}

export default Board;
