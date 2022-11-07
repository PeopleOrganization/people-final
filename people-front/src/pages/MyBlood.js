import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";


const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

//개인 정보 보여주는 페이지
function MyPage(props) {
  // const [data, setData] = useState(null);
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");


  useEffect(() => {
   // checkM();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.localStorage.getItem("check")]);

  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/Myblood", null, {
        params: {
          email: window.localStorage.getItem("email"),
        },
      })
      .then((res) => {
          setOne(res.data[0]["one"]);
          setTwo(res.data[0]["two"]);
          setThree(res.data[0]["three"]);
          setFour(res.data[0]["four"]);
          setFive(res.data[0]["five"]);
          setSix(res.data[0]["six"]);
      });
  }, []);

  return (
    <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href2" href="MyPage">
            {" "}
            <li className="sidebarListItem2 active">내 정보</li>
          </a>
          &nbsp;
          <li className="sidebarListItem3">
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
          &nbsp;
          <br></br>
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            Top
          </button>
        </ul>
      </div>
      <div className="container" align="center">
        <h1 className="sidebarTitle">내 헌혈 정보</h1>
        <span align="center" className="hello">
          내 헌혈 정보를 확인할 수 있습니다.
        </span>
        <hr /><br></br><br></br>
        전 혈 <br/> <input type={"text"} disabled value={one} name="area" /> <br />
        <br />
        성분채혈 혈소판 <br/> <input type={"text"} disabled value={two} name="blood" />
        <br />
        <br /> 
        혈 장 <br/> <input type={"text"} disabled value={three} name="area" />
        <br />
        <br />
        농축적혈구 <br/> <input type={"text"} disabled value={four} name="area" />
        <br />
        <br />
        성분채혈 백혈구<br/> <input type={"text"} disabled value={five} name="area" />
        <br />
        <br />
        백혈구여과제거적혈구 <br/> <input type={"text"} disabled value={six} name="area" />
        <br />
        <br />
        
      </div>
    </div>
  );
}

export default MyPage;