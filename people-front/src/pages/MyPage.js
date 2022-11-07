import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import "./BoardView.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//개인 정보 보여주는 페이지
function MyPage(props) {
  // const [data, setData] = useState(null);
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  let [blood, setBlood] = useState("");
  const [area, setArea] = useState("");
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const myPage2 = () => {
    document.location.href = "/MyPage2";
  };

  const myPage3 = () => {
    document.location.href = "/MyPage3";
  };

  const checkM = () => {
    // 마이페이지에 있는데 다른 페이지에서 로그아웃 시 로그인 페이지로 이동
    if (window.localStorage.getItem("check") !== "login") {
      document.location.href = "/login";
    }
  };

  useEffect(() => {
   // checkM();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.localStorage.getItem("check")]);

  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/userInfo", null, {
        params: {
          email: window.localStorage.getItem("email"),
        },
      })
      .then((res) => {
          setEmail(res.data[0]["email"]);
          setNickName(res.data[0]["nickName"]);
          setBlood(res.data[0]["blood"]);
          setArea(res.data[0]["area"]);
      });
  }, []);

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
          <br></br>
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            Top
          </button>
        </ul>
      </div>
      <div className="container" align="center">
        <h1 className="sidebarTitle">내 정보</h1>
        <span align="center" className="hello">
          내 정보를 확인할 수 있습니다.
        </span>
        <hr />
        <ui className="sidebarCircle">
          <ul className="sidebarList">
          <a className="href" href="MyPage">
            {" "}
            <li className="sidebarListItem active">내 정보</li>
          </a>
            &nbsp;
            <a className="href" href="MyPagePost">
            {" "}
            <li className="sidebarListItem">내 게시글</li>
          </a>
            &nbsp;
            <a className="href" href="MyPageReply">
            {" "}
            <li className="sidebarListItem">내 댓글</li>
          </a>
            &nbsp;
            <a className="href" href="MyPageScrap">
            {" "}
            <li className="sidebarListItem">내 스크랩</li>
          </a>
            &nbsp;
          </ul>
        </ui>
        <br></br><br></br>
        이메일:{" "}
        <input type={"text"} disabled value={email} name="nickName" /> <br />
        <br />
        닉네임:{" "}
        <input type={"text"} disabled value={nickName} name="nickName" /> <br />
        <br />
        혈액형: <input type={"text"} disabled value={blood} name="blood" />
        <br />
        <br />
        지 역:&nbsp; <input type={"text"} disabled value={area} name="area" />
        <br />
        <br />
        <p>
          <button id="loginBtn" onClick={myPage2}>
            정보 수정
          </button>
        </p>
        <p>
          <button id="loginBtn" onClick={myPage3}>
            비밀번호 변경
          </button>
        </p>
        <p>
          <button id="loginBtn" onClick={handleClickOpen}>
            내 헌혈 현황
          </button>
          <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle
                    align="center"
                    color="red"
                    sx={{
                      fontFamily: "GmarketSansMedium",
                      fontSize: "x-large",
                      fontWeight: "bold",
                    }}
                  >
                    {"내 헌혈 현황"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-slide-description"
                      sx={{
                        fontFamily: "GmarketSansMedium",
                        fontSize: "large",
                        fontWeight: "bold",
                      }}
                    >
                      <table id="bloodLicenceTable2">
                        <tr id="bloodInfoTr1">
                          <td id="bloodInfoTd1">전 혈 :&nbsp;</td>
                          <td id="bloodInfoTd2">{one}번</td>
                        </tr>
                        <tr id="bloodInfoTr2">
                          <td id="bloodInfoTd1">성분채혈 혈소판 :&nbsp;</td>
                          <td id="bloodInfoTd2">{two}번</td>
                        </tr>
                        <tr id="bloodInfoTr1">
                          <td id="bloodInfoTd1">혈 장 :&nbsp;</td>
                          <td id="bloodInfoTd2">{three}번</td>
                        </tr>
                        <tr id="bloodInfoTr2">
                          <td id="bloodInfoTd1">농축적혈구 :&nbsp;</td>
                          <td id="bloodInfoTd2">{four}번</td>
                        </tr>
                        <tr id="bloodInfoTr1">
                          <td id="bloodInfoTd1">성분채혈 백혈구 :&nbsp;</td>
                          <td id="bloodInfoTd2">{five}번</td>
                        </tr>
                        <tr id="bloodInfoTr2">
                          <td id="bloodInfoTd1">백혈구여과제거적혈구 :&nbsp;</td>
                          <td id="bloodInfoTd2">{six}번</td>
                        </tr>
                      </table>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions
                    sx={{
                      fontFamily: "GmarketSansMedium",
                      fontSize: "x-large",
                      fontWeight: "bold",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      marginBottom: "3%",
                    }}
                  >
                    <button
                      id="loginBtn"
                      style={{ padding: "1%" }}
                      onClick={handleClose}
                    >
                      확인
                    </button>
                  </DialogActions>
                </Dialog>
        </p>
      </div>
    </div>
  );
}

export default MyPage;