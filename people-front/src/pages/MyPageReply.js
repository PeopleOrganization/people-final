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
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };


  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/myReply", null, {
        params: {
          email: window.localStorage.getItem("email")
        }
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
          <a className="href2" href="MyPage">
            {" "}
            <li className="sidebarListItem2">내 정보</li>
          </a>
          &nbsp;
          <li className="sidebarListItem3 active">
            활동 리스트
            <li>
              <a id="BoardDropList" href="MyPagePost">
                내 게시글
              </a>
            </li>
            <li>
              <a id="BoardDropList" href="MyPageReply">
                내 댓글
              </a>
            </li>
            <li>
              <a id="BoardDropList" href="MyPageScrap">
                내 스크랩
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
        <h1 className="sidebarTitle">내 댓글</h1>
        <span align="center" className="hello">
        내가 작성한 댓글의 게시글을 확인할 수 있는 공간입니다.
        </span>
        <hr />
          <br></br>
        <div id="postContainer0" align="center">
        <div align="end" style={{padding:"1%"}}>
          </div>
          <br />
          <table id="boardSize">
            <div>
              <div>
              <td className="noneMenu" id="boardItemSize1">게</td>
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
                <ui className="sidebarCircle">
          <ul className="sidebarList">
          <a className="href" href="MyPage">
            {" "}
            <li className="sidebarListItem">내 정보</li>
          </a>
            &nbsp;
            <a className="href" href="MyPagePost">
            {" "}
            <li className="sidebarListItem">내 게시글</li>
          </a>
            &nbsp;
            <a className="href" href="MyPageReply">
            {" "}
            <li className="sidebarListItem active">내 댓글</li>
          </a>
            &nbsp;
            <a className="href" href="MyPageScrap">
            {" "}
            <li className="sidebarListItem">내 스크랩</li>
          </a>
            &nbsp;
          </ul>
        </ui>
              </div>
                </Link>
            ))}
          </table>

          <br></br>
          <Link to="/BoardWrite">
            <button id="loginBtn">글쓰기</button>
          </Link>
          <br></br>
          <br></br>
        </div>
        <br></br>
          <br></br>
      </div>
    </div>
  );
}

export default Board;