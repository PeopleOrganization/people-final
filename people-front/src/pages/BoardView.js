import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BoardView.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PhotoIcon from "@mui/icons-material/Photo";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import styled from "styled-components";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Button1 = styled.button`
  &:hover {
    background: rgb(28, 61, 101);
    color: #fff;
    font-weight: bold;
  }

  background: rgb(63, 120, 190);
  color: #fff;
  font-weight: bold;
`;

const oneCheckBox = (checkThis) => {
  const box = document.getElementsByName("box");
  for (let i = 0; i < box.length; i++) {
    if (box[i] !== checkThis) {
      box[i].checked = false;
    }
  }
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function GetData(vocId) {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [bloodKind, setBloodKind] = useState("");
  const [patientName, setPatientName] = useState("");
  const [hospital, setHospital] = useState("");
  const [phonNum, setPhonNum] = useState("");
  const [requestB, setRequestB] = useState("");
  const [responseB, setResponseB] = useState("");
  const params = useParams();
  const postkey2 = params.postkey;

  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/postView", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((res) => {
        setTitle(res.data[0]["title"]);
        setBloodType(res.data[0]["bloodType"]);
        setBloodKind(res.data[0]["bloodKind"]);
        setPatientName(res.data[0]["patientName"]);
        setHospital(res.data[0]["hospital"]);
        setPhonNum(res.data[0]["phonNum"]);
        setRequestB(res.data[0]["requestB"]);
        setResponseB(res.data[0]["responseB"]);
      });
  }, []);

  const item = (
    <>
      <div className="voc-view-wrapper2">
        <div className="voc-view-row">
          <label>제목 :</label>
          <label>{title}</label>
        </div>
        <div className="voc-view-row">
          <label>환자명 :</label>
          <label>{patientName}</label>
        </div>
        <div className="voc-view-row">
          <label>혈액형 :</label>
          <label>{bloodType}</label>
        </div>
        <div className="voc-view-row">
          <label>혈액종류 :</label>
          <label>{bloodKind}</label>
        </div>
        <div className="voc-view-row">
          <label>필요수량 :</label>
          <label>{responseB + "/" + requestB}</label>
        </div>
      </div>
    </>
  );

  return { jsx: item, rqb: requestB, rpb: responseB };
}

function BoardView() {
  const { vocId } = useParams();
  const item = GetData(vocId);
  const scrollRef = useRef();
  const [content, setContent] = useState("");
  const [replyData, setReplyData] = useState([]); //댓글 저장
  const [deleteShow, setDeleteShow] = useState("boardDelete"); //기본 값은 안 보이게
  const params = useParams();
  const postkey2 = params.postkey;
  const [email3, setEmail3] = useState(""); // 게시글 작성자의 이메일
  const [replyContent, setReplyContent] = useState(""); // 댓글 내용

  const [nickName, setNickName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [bloodKind, setBloodKind] = useState("");
  const [patientName, setPatientName] = useState("");
  const [hospital, setHospital] = useState("");
  const [phonNum, setPhonNum] = useState("");
  const [registNum, setRegistNum] = useState("");
  const [postYear, setPostYear] = useState("");
  const [postMonth, setPostMonth] = useState("");
  const [postDay, setPostDay] = useState("");
  const [postHour, setPostHour] = useState("");
  const [postMinute, setPostMinute] = useState("");

  //이 아래는 헌혈 등록자가 입력하는 정보
  const [bloodNum, setBloodNum] = useState("");
  const [bloodNum2, setBloodNum2] = useState("");
  const [bloodNum3, setBloodNum3] = useState("");
  const [bloodNum4, setBloodNum4] = useState("");
  const [bloodType2, setBloodType2] = useState("");
  const [bloodKind2, setBloodKind2] = useState("");
  const [hospital2, setHospital2] = useState("");
  const [bloodDate, setBloodDate] = useState("2022-01-01");

  //현재 날짜
  const dateTotal = new Date();
  const nowYear = dateTotal.getFullYear();
  const nowMonth = dateTotal.getMonth() + 1;
  const nowDay = dateTotal.getDate();

  const [bloodCheck, setBloodCheck] = useState("boardDelete"); //헌혈증서 확인용(작성자 시점)
  const [bloodCheck2, setBloodCheck2] = useState("boardDelete2"); //헌혈증서 작성용(헌혈자 시점)

  const [endData, setEndData] = useState([]); //헌혈 목록 저장

  let [scrapCheck2, setScrapCheck2] = useState("");

  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/certificateShow", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((res) => {
        console.log(res.data);
        setEndData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/postView", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((res) => {
        setBloodType(res.data[0]["bloodType"]);
        setBloodKind(res.data[0]["bloodKind"]);
        setPatientName(res.data[0]["patientName"]);
        setHospital(res.data[0]["hospital"]);
        setPhonNum(res.data[0]["phonNum"]);
        setNickName(res.data[0]["nickName"]);
        setRegistNum(res.data[0]["registNum"]);
        setPostYear(res.data[0]["year"]);
        setPostMonth(res.data[0]["month"]);
        setPostDay(res.data[0]["day"]);
        setPostHour(res.data[0]["hour"]);
        setPostMinute(res.data[0]["minute"]);
      });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  function countCertificate() {
    item.rpb < item.rqb
      ? handleClickOpen()
      : alert("필요수량만큼의 혈액이 모두 확보되었습니다.");
  }

  //삭제버튼이 보일지 안 보일지 결정
  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/deleteNick", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((res) => {
        window.localStorage.setItem("postkey", postkey2);

        // eslint-disable-next-line array-callback-return
        console.log("이메일확인하러옴");
        console.log(res.data[0]["email"]);
        setEmail3(res.data[0]["email"]);
        console.log(window.localStorage.getItem("email"));
        if (res.data[0]["email"] === window.localStorage.getItem("email")) {
          setDeleteShow("boardDelete2");
          setBloodCheck("boardDelete2");
          setBloodCheck2("boardDelete");
        }
      });
  }, []);

  //댓글 불러오기
  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/replyShow", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((response) => {
        setReplyData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/postView", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((res) => {
        setContent(res.data[0]["content"]);
      });
  });

  const modify2 = () => {
    document.location.href = "/BoardModify";
  };

  //댓글 등록
  const replySave = () => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/reply", null, {
        params: {
          postkey: postkey2,
          email: window.localStorage.getItem("email"),
          nickName: window.localStorage.getItem("nickName"),
          replyContent: replyContent,
          replyType: "true",
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //헌혈증서 등록
  const certificate = () => {
    if (validation()) {
      axios
        .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/certificate", null, {
          params: {
            postkey: postkey2,
            bloodNum: bloodNum,
            bloodNum2: bloodNum2,
            bloodNum3: bloodNum3,
            bloodNum4: bloodNum4,
            email: window.localStorage.getItem("email"),
            nickName: window.localStorage.getItem("nickName"),
            bloodType: bloodType2,
            bloodKind: bloodKind2,
            hospital: hospital2,
            bloodDate: bloodDate,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === 0) {
            // 0을 받으면 헌혈증서 등록에 성공했다는 댓글 생성
            axios
              .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/reply2", null, {
                params: {
                  postkey: postkey2,
                  email: window.localStorage.getItem("email"),
                  nickName: window.localStorage.getItem("nickName"),
                  replyContent: "<지정 헌혈을 완료했어요!>",
                  bloodType: bloodType2,
                  bloodKind: bloodKind2,
                  hospital: hospital2,
                  bloodDate: bloodDate,
                },
              })
              .then((res) => {
                console.log("1증가");
                axios.post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/responsePlus", null, {
                  params: {
                    postkey: postkey2,
                  },
                });
              })
              .then((res) => {
                console.log("등록완료 후 새로고침");
                alert("헌혈 증서가 등록 되었습니다.");
                window.location.reload();
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            // 0이외의 값이면 이미 스크랩 했다는 것
            alert("헌혈 증서 등록에 실패하였습니다.").catch(function (error) {
              console.log(error);
            });
          }
        });
    }
  };

  //헌혈증서 유효성 검사
  const validation = () => {
    if (!/^\d{2}$/.test(bloodNum)) {
      alert("헌혈 증서번호를 정확히 입력해주세요");
      return false;
    }
    if (!/^\d{2}$/.test(bloodNum2)) {
      alert("헌혈 증서번호를 정확히 입력해주세요");
      return false;
    }
    if (!/^\d{6}$/.test(bloodNum3)) {
      alert("헌혈 증서번호를 정확히 입력해주세요");
      return false;
    }
    if (!/^\d{2}$/.test(bloodNum4)) {
      alert("헌혈 증서번호를 정확히 입력해주세요");
      return false;
    }

    handleClose();
    return true;
  };

  //스크랩 했는지, 안 했는지
  const scrapCheck = () => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/scrapCheck", null, {
        params: {
          postkey: postkey2,
          email: window.localStorage.getItem("email"),
          nickName: window.localStorage.getItem("nickName"),
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log("순서 1");
        if (res.data === 0) {
          // 0을 받으면 아직 스크랩을 안 했다는 것
          console.log("아직 스크랩 안 했음!! 0");
          axios
            .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/scrap", null, {
              params: {
                postkey: postkey2,
                email: window.localStorage.getItem("email"),
                nickName: window.localStorage.getItem("nickName"),
              },
            })
            .then((res) => {
              // console("값0: "+scrapCheck2)
              console.log(res.data);
              alert("스크랩 되었습니다.");
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          // 0이외의 값이면 이미 스크랩 했다는 것
          console.log("이미 스크랩 했음!! 1");
          axios
            .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/scrapDelete", null, {
              params: {
                postkey: postkey2,
                email: window.localStorage.getItem("email"),
                nickName: window.localStorage.getItem("nickName"),
              },
            })
            .then((res) => {
              // console.log(res.data)
              // console("값1: "+scrapCheck2)
              alert("스크랩을 취소하였습니다.");
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
  };

  //게시글 삭제
  const delete2 = () => {
    console.log("글 삭제 하러 옴");

    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/delete", null, {
        params: {
          postkey: postkey2,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("게시글이 삭제되었습니다.");
        document.location.href = "/Board";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [Type, setType] = React.useState("");
  const [Kind, setKind] = React.useState("");
  const [Bank, setBank] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleChange2 = (event) => {
    setKind(event.target.value);
  };

  const handleChange3 = (event) => {
    setBank(event.target.value);
  };

  return (
    <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href" href="Board">
            {" "}
            <li className="sidebarListItem2 active">전체게시판</li>
          </a>
          &nbsp;
          <li className="sidebarListItem3">
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
        <h1 className="sidebarTitle">헌혈글</h1>
        <span align="center" className="hello">
          헌혈하는 당신이 진정한 영웅입니다.
        </span>
        <hr />
        <ui className="sidebarCircle">
          <ul className="sidebarList">
            <a className="href" href="Board">
              {" "}
              <li className="sidebarListItem active">전체게시판</li>
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
              <li className="sidebarListItem">AB혈액형</li>
            </a>
            &nbsp;
            <a className="href" href="BoardO">
              {" "}
              <li className="sidebarListItem">O혈액형</li>
            </a>
            &nbsp;
          </ul>
        </ui>
        <div id="postContainer" align="center">
          <br />
          <div>{item.jsx}
          <div id="chatIcon">
              <span id="boardButton">
                <button id="boardBtn1" onClick={handleClickOpen2}>
                  {" "}
                  <PermContactCalendarIcon color="white"></PermContactCalendarIcon>
                  수혈자정보
                </button>
                <Dialog
                  open={open2}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose2}
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
                    {"수혈자 정보"}
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
                          <td id="bloodInfoTd1">환자명 :&nbsp;</td>
                          <td id="bloodInfoTd2">{patientName}</td>
                        </tr>
                        <tr id="bloodInfoTr2">
                          <td id="bloodInfoTd1">혈액형 :&nbsp;</td>
                          <td id="bloodInfoTd2">{bloodType}형</td>
                        </tr>
                        <tr id="bloodInfoTr1">
                          <td id="bloodInfoTd1">혈액종류 :&nbsp;</td>
                          <td id="bloodInfoTd2">{bloodKind}</td>
                        </tr>
                        <tr id="bloodInfoTr2">
                          <td id="bloodInfoTd1">의료기관 :&nbsp;</td>
                          <td id="bloodInfoTd2">{hospital}</td>
                        </tr>
                        <tr id="bloodInfoTr1">
                          <td id="bloodInfoTd1">연락처 :&nbsp;</td>
                          <td id="bloodInfoTd2">{phonNum}</td>
                        </tr>
                        <tr id="bloodInfoTr2">
                          <td id="bloodInfoTd1">등록번호 :&nbsp;</td>
                          <td id="bloodInfoTd2">{registNum}</td>
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
                      onClick={handleClose2}
                    >
                      확인
                    </button>
                  </DialogActions>
                </Dialog>
                &nbsp;
                <button id="boardBtn2" onClick={scrapCheck}>
                  {" "}
                  <BookmarkIcon></BookmarkIcon>스크랩
                </button>
                <Dialog
                  open={open3}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose3}
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
                    {""}
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
                      스크랩되었습니다.
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
                      style={{ padding: "1%", width: "30%" }}
                      onClick={handleClose3}
                    >
                      확인
                    </button>
                  </DialogActions>
                </Dialog>
                &nbsp;
                {/*########################## 헌혈자 시점 ##########################*/}
                <Button1 id={bloodCheck2} onClick={countCertificate}>
                  <FactCheckIcon></FactCheckIcon>헌혈증서
                </Button1>
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
                    {"헌혈증서등록"}
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
                      <p id="bloodLicenceTitle2">소중한 지정헌혈 감사합니다.</p>{" "}
                      <p id="bloodLicenceTitle3">
                        헌혈환료를 눌러 요청자에게 알려주세요. <br></br>헌혈증
                        정보까지 입력해 주시면 요청자에게 큰 도움이 돼요.
                        <br></br>
                        <br></br>헌혈증을 보고 정보를 입력해 주세요. (필수){" "}
                      </p>
                      <hr></hr>
                      <br></br>
                      <table id="bloodLicenceTable">
                        <tr>
                          <td id="bloodLicence">
                            헌혈증서 &nbsp;
                            <td id="bloodLicence2">
                              증서번호:&nbsp;
                              <input
                                id="bloodLicenceNum1"
                                onChange={(event) =>
                                  setBloodNum(event.target.value)
                                }
                              ></input>
                              &nbsp;-&nbsp;
                              <input
                                id="bloodLicenceNum2"
                                onChange={(event) =>
                                  setBloodNum2(event.target.value)
                                }
                              ></input>
                              &nbsp;-&nbsp;
                              <input
                                id="bloodLicenceNum3"
                                onChange={(event) =>
                                  setBloodNum3(event.target.value)
                                }
                              ></input>
                              &nbsp;-&nbsp;
                              <input
                                id="bloodLicenceNum4"
                                onChange={(event) =>
                                  setBloodNum4(event.target.value)
                                }
                              ></input>
                            </td>
                          </td>
                        </tr>{" "}
                        <tr>
                          <td>
                            <br></br>
                            &nbsp;
                            <span>
                              {window.localStorage.getItem("nickName")} 님
                            </span>
                            <br></br>
                            <br></br>
                            <p id="bloodLicenceBloodType">
                              <Box
                              // sx={{ width: "5%", minWidth: "45%" }}
                              >
                                <FormControl fullWidth>
                                  <InputLabel
                                    sx={{
                                      fontFamily: "GmarketSansMedium",
                                      fontWeight: "bold",
                                    }}
                                    id="demo-simple-select-helper-label"
                                  >
                                    혈액형
                                  </InputLabel>
                                  <Select
                                    sx={{
                                      fontFamily: "GmarketSansMedium",
                                      fontWeight: "bold",
                                    }}
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={bloodType2}
                                    label="Type"
                                    onChange={(event) =>
                                      setBloodType2(event.target.value)
                                    }
                                    // onChange={handleChange}
                                  >
                                    <MenuItem value="">혈액형</MenuItem>
                                    <MenuItem value={"A"}>A+</MenuItem>
                                    <MenuItem value={"B"}>B+</MenuItem>
                                    <MenuItem value={"AB"}>AB+</MenuItem>
                                    <MenuItem value={"O"}>O+</MenuItem>
                                    <MenuItem value={"A-"}>A-</MenuItem>
                                    <MenuItem value={"B-"}>B-</MenuItem>
                                    <MenuItem value={"AB-"}>AB-</MenuItem>
                                    <MenuItem value={"O-"}>O-</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                              &nbsp;&nbsp;
                              <Box
                              // sx={{ width: "5%", minWidth: "45%" }}
                              >
                                <FormControl fullWidth>
                                  <InputLabel
                                    sx={{
                                      fontFamily: "GmarketSansMedium",
                                      fontWeight: "bold",
                                    }}
                                    id="demo-simple-select-helper-label"
                                  >
                                    헌혈종류
                                  </InputLabel>
                                  <Select
                                    sx={{
                                      fontFamily: "GmarketSansMedium",
                                      fontWeight: "bold",
                                    }}
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={bloodKind2}
                                    label="Kind"
                                    onChange={(event) =>
                                      setBloodKind2(event.target.value)
                                    }
                                    // onChange={handleChange2}
                                  >
                                    <MenuItem value="">혈액종류</MenuItem>
                                    <MenuItem value={"전혈"}>전혈</MenuItem>
                                    <MenuItem value={"성분채혈 혈소판"}>
                                      성분채혈 혈소판
                                    </MenuItem>
                                    <MenuItem value={"혈장"}>혈장</MenuItem>
                                    <MenuItem value={"농축적혈구"}>
                                      농축적혈구
                                    </MenuItem>
                                    <MenuItem value={"성분채혈 백혈구"}>
                                      성분채혈 백혈구
                                    </MenuItem>
                                    <MenuItem value={"백혈구여과제거적혈구"}>
                                      백혈구여과제거적혈구
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </p>
                            <p id="bloodLicenceBloodType">
                              <Box
                              // sx={{ width: "5%", minWidth: "47%" }}
                              >
                                <FormControl fullWidth>
                                  <InputLabel
                                    sx={{
                                      fontFamily: "GmarketSansMedium",
                                      fontWeight: "bold",
                                    }}
                                    id="demo-simple-select-helper-label"
                                  >
                                    혈액원 명
                                  </InputLabel>
                                  <Select
                                    sx={{
                                      fontFamily: "GmarketSansMedium",
                                      fontWeight: "bold",
                                    }}
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={hospital2}
                                    label="Bank"
                                    onChange={(event) =>
                                      setHospital2(event.target.value)
                                    }
                                    // onChange={handleChange3}
                                  >
                                    <MenuItem value="">혈액원 명</MenuItem>
                                    <MenuItem value={"서울중앙혈액원"}>
                                      서울중앙혈액원
                                    </MenuItem>
                                    <MenuItem value={"서울남부혈액원"}>
                                      서울남부혈액원
                                    </MenuItem>
                                    <MenuItem value={"서울동부혈액원"}>
                                      서울동부혈액원
                                    </MenuItem>
                                    <MenuItem value={"부산혈액원"}>
                                      부산혈액원
                                    </MenuItem>
                                    <MenuItem value={"대구경북혈액원"}>
                                      대구경북혈액원
                                    </MenuItem>
                                    <MenuItem value={"인천혈액원"}>
                                      인천혈액원
                                    </MenuItem>
                                    <MenuItem value={"울산혈액원"}>
                                      울산혈액원
                                    </MenuItem>
                                    <MenuItem value={"경기혈액원"}>
                                      경기혈액원
                                    </MenuItem>
                                    <MenuItem value={"강원혈액원"}>
                                      강원혈액원
                                    </MenuItem>
                                    <MenuItem value={"충북혈액원"}>
                                      충북혈액원
                                    </MenuItem>
                                    <MenuItem value={"대전세종충남혈액원"}>
                                      대전세종충남혈액원
                                    </MenuItem>
                                    <MenuItem value={"전북혈액원"}>
                                      전북혈액원
                                    </MenuItem>
                                    <MenuItem value={"광주·전남혈액원"}>
                                      광주·전남혈액원
                                    </MenuItem>
                                    <MenuItem value={"경남혈액원"}>
                                      경남혈액원
                                    </MenuItem>
                                    <MenuItem value={"제주혈액원"}>
                                      제주혈액원
                                    </MenuItem>
                                    <MenuItem value={"중앙혈액검사센터"}>
                                      중앙혈액검사센터
                                    </MenuItem>
                                    <MenuItem value={"혈액관리본부"}>
                                      혈액관리본부
                                    </MenuItem>
                                    <MenuItem value={"혈장분획센터"}>
                                      혈장분획센터
                                    </MenuItem>
                                    <MenuItem value={"중부혈액검사센터"}>
                                      중부혈액검사센터
                                    </MenuItem>
                                    <MenuItem value={"남부혈액검사센터"}>
                                      남부혈액검사센터
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                              &nbsp;&nbsp;
                              <Stack component="form" noValidate spacing={3}>
                                <TextField
                                  id="date"
                                  label="헌혈일자"
                                  type="date"
                                  defaultValue="2022-01-01"
                                  // sx={{ width: "5%", minWidth: "155%" }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  onChange={(event) =>
                                    setBloodDate(event.target.value)
                                  }
                                />
                              </Stack>
                            </p>
                            <br></br>
                            <p id="BoardLicenceText">
                              사랑의 헌혈에 동참하여 생명 나눔을 몸소 실천하신
                              귀하에게<br></br>
                              깊은 존경과 감사의 마음을 담아 이 증서를 드립니다.
                            </p>
                          </td>
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
                      onClick={() => {
                        certificate();
                      }}
                    >
                      등록
                    </button>
                    <button
                      id="loginBtn"
                      style={{ padding: "1%" }}
                      onClick={handleClose}
                    >
                      취소
                    </button>
                  </DialogActions>
                </Dialog>
                {/* ########################## 수혈자시점 ##########################*/}
                <Button1 id={bloodCheck} onClick={handleClickOpen5}>
                  <FactCheckIcon></FactCheckIcon>헌혈증서
                </Button1>
                <div>
                  <Dialog
                    open={open5}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose5}
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
                      {"헌혈증서확인"}
                      <br />
                      {"("}
                      {endData.length}
                      {"개)"}
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
                        {endData.map((it) => (
                          <div key={it.certificatekey}>
                            <div>
                              <table id="bloodLicenceTable">
                                <tr>
                                  <td id="bloodLicence">
                                    헌혈증서 &nbsp;
                                    <td id="bloodLicence2">
                                      증서번호:&nbsp;
                                      <input
                                        id="bloodLicenceNum1"
                                        value="**"
                                        onChange={(event) =>
                                          setBloodNum(event.target.value)
                                        }
                                      ></input>
                                      &nbsp;-&nbsp;
                                      <input
                                        id="bloodLicenceNum2"
                                        value="**"
                                        onChange={(event) =>
                                          setBloodNum2(event.target.value)
                                        }
                                      ></input>
                                      &nbsp;-&nbsp;
                                      <input
                                        id="bloodLicenceNum3"
                                        value="******"
                                        onChange={(event) =>
                                          setBloodNum3(event.target.value)
                                        }
                                      ></input>
                                      &nbsp;-&nbsp;
                                      <input
                                        id="bloodLicenceNum4"
                                        value="**"
                                        onChange={(event) =>
                                          setBloodNum4(event.target.value)
                                        }
                                      ></input>
                                    </td>
                                  </td>{" "}
                                </tr>

                                <tr>
                                  <td>
                                    <br></br>
                                    <button id="BoardArrow">
                                      {/* <ArrowBackIosNewIcon></ArrowBackIosNewIcon> */}
                                    </button>
                                    <span
                                      style={{
                                        marginRight: "20%",
                                        marginLeft: "20%",
                                      }}
                                    >
                                      {window.localStorage.getItem("nickName")}{" "}
                                      님
                                    </span>
                                    <button id="BoardArrow">
                                      {/* <ArrowForwardIosIcon></ArrowForwardIosIcon> */}
                                    </button>
                                    <br></br>
                                    <br></br>
                                    <p id="bloodLicenceBloodType">
                                      <Box
                                      // sx={{ width: "5%", minWidth: "45%" }}
                                      >
                                        <FormControl fullWidth>
                                          <InputLabel
                                            sx={{
                                              fontFamily: "GmarketSansMedium",
                                              fontWeight: "bold",
                                            }}
                                            id="demo-simple-select-helper-label"
                                          ></InputLabel>
                                          <TextField
                                            sx={{
                                              fontFamily: "GmarketSansMedium",
                                              fontWeight: "bold",
                                            }}
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={it.bloodType}
                                            label="혈액형"
                                            // onChange={(event) => setBloodType2(event.target.value)}
                                            // onChange={handleChange}
                                          ></TextField>
                                        </FormControl>
                                      </Box>
                                      &nbsp;&nbsp;
                                      <Box
                                      // sx={{ width: "5%", minWidth: "45%" }}
                                      >
                                        <FormControl fullWidth>
                                          <InputLabel
                                            sx={{
                                              fontFamily: "GmarketSansMedium",
                                              fontWeight: "bold",
                                            }}
                                            id="demo-simple-select-helper-label"
                                          ></InputLabel>
                                          <TextField
                                            sx={{
                                              fontFamily: "GmarketSansMedium",
                                              fontWeight: "bold",
                                            }}
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={it.bloodKind}
                                            label="헌혈종류"
                                            onChange={(event) =>
                                              setBloodKind2(event.target.value)
                                            }
                                            // onChange={handleChange2}
                                          ></TextField>
                                        </FormControl>
                                      </Box>
                                    </p>
                                    <p id="bloodLicenceBloodType">
                                      <Box
                                      // sx={{ width: "5%", minWidth: "47%" }}
                                      >
                                        <FormControl fullWidth>
                                          <InputLabel
                                            sx={{
                                              fontFamily: "GmarketSansMedium",
                                              fontWeight: "bold",
                                            }}
                                            id="demo-simple-select-helper-label"
                                          ></InputLabel>
                                          <TextField
                                            sx={{
                                              fontFamily: "GmarketSansMedium",
                                              fontWeight: "bold",
                                            }}
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={it.hospital}
                                            label="혈액원 명"
                                            onChange={(event) =>
                                              setHospital2(event.target.value)
                                            }
                                            // onChange={handleChange3}
                                          ></TextField>
                                        </FormControl>
                                      </Box>
                                      &nbsp;&nbsp;
                                      <Stack
                                        component="form"
                                        noValidate
                                        spacing={3}
                                      >
                                        <TextField
                                          id="date"
                                          label="헌혈일자"
                                          type="date"
                                          value={it.bloodDate}
                                          // sx={{ width: "5%", minWidth: "155%" }}
                                          InputLabelProps={{
                                            shrink: true,
                                          }}
                                          onChange={(event) =>
                                            setBloodDate(event.target.value)
                                          }
                                        />
                                      </Stack>
                                    </p>
                                    <br></br>
                                    <p id="BoardLicenceText">
                                      사랑의 헌혈에 동참하여 생명 나눔을 몸소
                                      실천하신 귀하에게<br></br>
                                      깊은 존경과 감사의 마음을 담아 이 증서를
                                      드립니다.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                              <br />
                            </div>
                          </div>
                        ))}
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
                        onClick={handleClose5}
                      >
                        확인
                      </button>
                    </DialogActions>
                  </Dialog>
                </div>
              </span>
            </div>
          
          
          
          </div>
          <br />
          <br />
          <div id="chatRoom" ref={scrollRef}>

            {/* 수혈자 */}
            <br />
            <div id="receive">
              <label id="receiveNick">{nickName}</label>
              <br />
              <label id="receiveChat">
                {content} <br></br>
              </label>
              <br></br>
              {postYear === nowYear &&
              postMonth === nowMonth &&
              postDay === nowDay ? (
                <label id="receiveDate">
                  {postHour}:{postMinute}
                </label>
              ) : (
                <label id="receiveDate">
                  {postYear}/{postMonth}/{postDay}
                </label>
              )}
            </div>
            <br />
            {/* 수혈자 여기까지 */}
            {replyData.map((it) => (
              <div key={it.replykey}>
                <div>
                  {it.email === email3 ? ( //자신의 게시글에 댓글을 다는 경우
                    it.year === nowYear &&
                    it.month === nowMonth &&
                    it.day === nowDay ? (
                      <div id="receive">
                        <label id="receiveNick">{it.nickName}</label>
                        <br />
                        <label id="receiveChat">{it.replyContent}</label>
                        <br></br>{" "}
                        <label id="receiveDate">
                          {it.hour}:{it.minute}
                        </label>{" "}
                      </div>
                    ) : (
                      <div id="receive">
                        <label id="receiveNick">{it.nickName}</label>
                        <br />
                        <label id="receiveChat">{it.replyContent}</label>
                        <br></br>{" "}
                        <label id="receiveDate">
                          {it.year}/{it.month}/{it.day}
                        </label>{" "}
                      </div>
                    )
                  ) : it.replyType === "true" ? ( // 일반 댓글일 경우
                    it.year === nowYear &&
                    it.month === nowMonth &&
                    it.day === nowDay ? (
                      <div id="give">
                        {" "}
                        <label id="giveNick">{it.nickName}</label>
                        <br />
                        <label id="giveChat">{it.replyContent}</label>
                        <br></br>{" "}
                        <label id="giveDate">
                          {it.hour}:{it.minute}
                        </label>{" "}
                      </div>
                    ) : (
                      <div id="give">
                        {" "}
                        <label id="giveNick">{it.nickName}</label>
                        <br />
                        <label id="giveChat">{it.replyContent}</label>
                        <br></br>{" "}
                        <label id="giveDate">
                          {it.year}/{it.month}/{it.day}
                        </label>{" "}
                      </div>
                    )
                  ) : //헌혈증서 댓글일 경우
                  it.year === nowYear &&
                    it.month === nowMonth &&
                    it.day === nowDay ? (
                    <div id="give">
                      {" "}
                      <label id="giveNick">{it.nickName}</label>
                      <br />
                      {/* start */}
                      <label id="giveChat2">
                        <table id="bloodLicenceTable3">
                          <tr>
                            <td id="bloodLicence">
                              <span
                                style={{
                                  fontSize: "large",
                                  fontWeight: "bold",
                                }}
                              >
                                헌혈증서
                              </span>{" "}
                              &nbsp;
                              <td id="bloodLicence2">
                                증서번호<br></br>
                                <input
                                  id="bloodLicenceNum1"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum2"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum2(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum3"
                                  value="******"
                                  onChange={(event) =>
                                    setBloodNum3(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum4"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum4(event.target.value)
                                  }
                                ></input>
                              </td>
                            </td>{" "}
                          </tr>
                          <br />
                          <tr>
                            <td>
                              {it.nickName} 님<br></br>
                              <br></br>
                              <p id="bloodLicenceBloodType">
                                <Box
                                // sx={{ width: "5%", minWidth: "45%" }}
                                >
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    ></InputLabel>
                                    <TextField
                                      disabled
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={it.bloodType}
                                      label="혈액형"
                                      // onChange={(event) => setBloodType2(event.target.value)}
                                      // onChange={handleChange}
                                    ></TextField>
                                  </FormControl>
                                </Box>
                                &nbsp;&nbsp;
                                <Box
                                // sx={{ width: "5%", minWidth: "45%" }}
                                >
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    ></InputLabel>
                                    <TextField
                                      disabled
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={it.bloodKind}
                                      label="헌혈종류"
                                      onChange={(event) =>
                                        setBloodKind2(event.target.value)
                                      }
                                      // onChange={handleChange2}
                                    ></TextField>
                                  </FormControl>
                                </Box>
                              </p>
                              <p id="bloodLicenceBloodType2">
                                <span id="nonQueryType">
                                  <Box
                                  // sx={{ width: "5%", minWidth: "106%" }}
                                  >
                                    <FormControl fullWidth>
                                      <InputLabel
                                        sx={{
                                          fontFamily: "GmarketSansMedium",
                                          fontWeight: "bold",
                                        }}
                                        id="demo-simple-select-helper-label"
                                      ></InputLabel>
                                      <TextField
                                        disabled
                                        sx={{
                                          fontFamily: "GmarketSansMedium",
                                          fontWeight: "bold",
                                        }}
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={it.hospital}
                                        label="혈액원 명"
                                        onChange={(event) =>
                                          setHospital2(event.target.value)
                                        }
                                        // onChange={handleChange3}
                                      ></TextField>
                                    </FormControl>
                                  </Box>
                                </span>
                                &nbsp;&nbsp;
                                <Stack component="form" noValidate spacing={3}>
                                  <TextField
                                    id="date"
                                    label="헌혈일자"
                                    type="date"
                                    defaultValue="2022-01-01"
                                    value={it.bloodDate}
                                    // sx={{ marginLeft: "10%", width: "150%" }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    onChange={(event) =>
                                      setBloodDate(event.target.value)
                                    }
                                  />
                                </Stack>
                              </p>
                              <br></br>
                            </td>
                          </tr>
                        </table>

                        <table id="QbloodLicenceTable3">
                          <tr>
                            <td id="bloodLicence">
                              <span
                                style={{
                                  fontSize: "large",
                                  fontWeight: "bold",
                                }}
                              >
                                헌혈증서
                              </span>{" "}
                              &nbsp;
                              <td id="bloodLicence2">
                                증서번호<br></br>
                                <input
                                  id="bloodLicenceNum1"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum2"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum2(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum3"
                                  value="******"
                                  onChange={(event) =>
                                    setBloodNum3(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum4"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum4(event.target.value)
                                  }
                                ></input>
                              </td>
                            </td>{" "}
                          </tr>
                          <br />
                          <tr>
                            <td>
                              {it.nickName} 님<br></br>
                              <br></br>
                              <p id="bloodLicenceBloodType">
                                <Box
                                // sx={{ width: "5%", minWidth: "45%" }}
                                >
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    ></InputLabel>
                                    <TextField
                                      disabled
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={it.bloodType}
                                      label="혈액형"
                                      // onChange={(event) => setBloodType2(event.target.value)}
                                      // onChange={handleChange}
                                    ></TextField>
                                  </FormControl>
                                </Box>
                                &nbsp;&nbsp;
                                <Box
                                // sx={{ width: "5%", minWidth: "45%" }}
                                >
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    ></InputLabel>
                                    <TextField
                                      disabled
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={it.bloodKind}
                                      label="헌혈종류"
                                      onChange={(event) =>
                                        setBloodKind2(event.target.value)
                                      }
                                      // onChange={handleChange2}
                                    ></TextField>
                                  </FormControl>
                                </Box>
                              </p>
                              <p id="bloodLicenceBloodType2">
                                <span id="nonQueryType">
                                  <Box
                                  // sx={{ width: "5%", minWidth: "310%" }}
                                  >
                                    <FormControl fullWidth>
                                      <InputLabel
                                        sx={{
                                          fontFamily: "GmarketSansMedium",
                                          fontWeight: "bold",
                                        }}
                                        id="demo-simple-select-helper-label"
                                      ></InputLabel>
                                      <TextField
                                        disabled
                                        sx={{
                                          fontFamily: "GmarketSansMedium",
                                          fontWeight: "bold",
                                        }}
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={it.hospital}
                                        label="혈액원 명"
                                        onChange={(event) =>
                                          setHospital2(event.target.value)
                                        }
                                        // onChange={handleChange3}
                                      ></TextField>
                                    </FormControl>
                                  </Box>
                                </span>
                                &nbsp;&nbsp;
                                <Stack component="form" noValidate spacing={3}>
                                  <TextField
                                    id="date"
                                    label="헌혈일자"
                                    type="date"
                                    defaultValue="2022-01-01"
                                    value={it.bloodDate}
                                    // sx={{ marginLeft: "34%", width: "58%" }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    onChange={(event) =>
                                      setBloodDate(event.target.value)
                                    }
                                  />
                                </Stack>
                              </p>
                              <br></br>
                            </td>
                          </tr>
                        </table>
                      </label>
                      {/* end */}
                      <br></br>{" "}
                      <label id="giveDate">
                        {it.hour}:{it.minute}
                      </label>{" "}
                    </div>
                  ) : (
                    <div id="give">
                      {" "}
                      <label id="giveNick">{it.nickName}</label>
                      <br />
                      {/* start */}
                      <label id="giveChat2">
                        <table id="bloodLicenceTable3">
                          <tr>
                            <td id="bloodLicence">
                              <span
                                style={{
                                  fontSize: "large",
                                  fontWeight: "bold",
                                }}
                              >
                                헌혈증서
                              </span>{" "}
                              &nbsp;
                              <td id="bloodLicence2">
                                증서번호<br></br>
                                <input
                                  id="bloodLicenceNum1"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum2"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum2(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum3"
                                  value="******"
                                  onChange={(event) =>
                                    setBloodNum3(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum4"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum4(event.target.value)
                                  }
                                ></input>
                              </td>
                            </td>{" "}
                          </tr>
                          <br />
                          <tr>
                            <td>
                              {it.nickName} 님<br></br>
                              <br></br>
                              <p id="bloodLicenceBloodType">
                                <Box
                                // sx={{ width: "5%", minWidth: "45%" }}
                                >
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    ></InputLabel>
                                    <TextField
                                      disabled
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={it.bloodType}
                                      label="혈액형"
                                      // onChange={(event) => setBloodType2(event.target.value)}
                                      // onChange={handleChange}
                                    ></TextField>
                                  </FormControl>
                                </Box>
                                &nbsp;&nbsp;
                                <Box
                                // sx={{ width: "5%", minWidth: "45%" }}
                                >
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    ></InputLabel>
                                    <TextField
                                      disabled
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={it.bloodKind}
                                      label="헌혈종류"
                                      onChange={(event) =>
                                        setBloodKind2(event.target.value)
                                      }
                                      // onChange={handleChange2}
                                    ></TextField>
                                  </FormControl>
                                </Box>
                              </p>
                              <p id="bloodLicenceBloodType2">
                                <span id="nonQueryType">
                                  <Box
                                  // sx={{ width: "5%", minWidth: "106%" }}
                                  >
                                    <FormControl fullWidth>
                                      <InputLabel
                                        sx={{
                                          fontFamily: "GmarketSansMedium",
                                          fontWeight: "bold",
                                        }}
                                        id="demo-simple-select-helper-label"
                                      ></InputLabel>
                                      <TextField
                                        disabled
                                        sx={{
                                          fontFamily: "GmarketSansMedium",
                                          fontWeight: "bold",
                                        }}
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={it.hospital}
                                        label="혈액원 명"
                                        onChange={(event) =>
                                          setHospital2(event.target.value)
                                        }
                                        // onChange={handleChange3}
                                      ></TextField>
                                    </FormControl>
                                  </Box>
                                </span>
                                &nbsp;&nbsp;
                                <Stack component="form" noValidate spacing={3}>
                                  <TextField
                                    id="date"
                                    label="헌혈일자"
                                    type="date"
                                    defaultValue="2022-01-01"
                                    value={it.bloodDate}
                                    // sx={{ marginLeft: "10%", width: "150%" }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    onChange={(event) =>
                                      setBloodDate(event.target.value)
                                    }
                                  />
                                </Stack>
                              </p>
                              <br></br>
                            </td>
                          </tr>
                        </table>

                        <table id="QbloodLicenceTable3">
                          <tr>
                            <td id="bloodLicence">
                              <span
                                style={{
                                  fontSize: "large",
                                  fontWeight: "bold",
                                }}
                              >
                                헌혈증서
                              </span>{" "}
                              &nbsp;
                              <td id="bloodLicence2">
                                증서번호<br></br>
                                <input
                                  id="bloodLicenceNum1"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum2"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum2(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum3"
                                  value="******"
                                  onChange={(event) =>
                                    setBloodNum3(event.target.value)
                                  }
                                ></input>
                                &nbsp;-&nbsp;
                                <input
                                  id="bloodLicenceNum4"
                                  value="**"
                                  style={{ width: "12%" }}
                                  onChange={(event) =>
                                    setBloodNum4(event.target.value)
                                  }
                                ></input>
                              </td>
                            </td>{" "}
                          </tr>
                          <br />
                          <tr>
                            <td>
                              {it.nickName} 님<br></br>
                              <br></br>
                              <p id="bloodLicenceBloodType">
                                <Box
                                // sx={{ width: "5%", minWidth: "45%" }}
                                >
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    ></InputLabel>
                                    <TextField
                                      disabled
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={it.bloodType}
                                      label="혈액형"
                                      // onChange={(event) => setBloodType2(event.target.value)}
                                      // onChange={handleChange}
                                    ></TextField>
                                  </FormControl>
                                </Box>
                                &nbsp;&nbsp;
                                <Box
                                // sx={{ width: "5%", minWidth: "45%" }}
                                >
                                  <FormControl fullWidth>
                                    <InputLabel
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      id="demo-simple-select-helper-label"
                                    ></InputLabel>
                                    <TextField
                                      disabled
                                      sx={{
                                        fontFamily: "GmarketSansMedium",
                                        fontWeight: "bold",
                                      }}
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={it.bloodKind}
                                      label="헌혈종류"
                                      onChange={(event) =>
                                        setBloodKind2(event.target.value)
                                      }
                                      // onChange={handleChange2}
                                    ></TextField>
                                  </FormControl>
                                </Box>
                              </p>
                              <p id="bloodLicenceBloodType2">
                                <span id="nonQueryType">
                                  <Box
                                  // sx={{ width: "5%", minWidth: "310%" }}
                                  >
                                    <FormControl fullWidth>
                                      <InputLabel
                                        sx={{
                                          fontFamily: "GmarketSansMedium",
                                          fontWeight: "bold",
                                        }}
                                        id="demo-simple-select-helper-label"
                                      ></InputLabel>
                                      <TextField
                                        disabled
                                        sx={{
                                          fontFamily: "GmarketSansMedium",
                                          fontWeight: "bold",
                                        }}
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={it.hospital}
                                        label="혈액원 명"
                                        onChange={(event) =>
                                          setHospital2(event.target.value)
                                        }
                                        // onChange={handleChange3}
                                      ></TextField>
                                    </FormControl>
                                  </Box>
                                </span>
                                &nbsp;&nbsp;
                                <Stack component="form" noValidate spacing={3}>
                                  <TextField
                                    id="date"
                                    label="헌혈일자"
                                    type="date"
                                    defaultValue="2022-01-01"
                                    value={it.bloodDate}
                                    // sx={{ marginLeft: "34%", width: "58%" }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    onChange={(event) =>
                                      setBloodDate(event.target.value)
                                    }
                                  />
                                </Stack>
                              </p>
                              <br></br>
                            </td>
                          </tr>
                        </table>
                      </label>
                      {/* end */}
                      <br></br>{" "}
                      <label id="giveDate">
                        {it.year}/{it.month}/{it.day}
                      </label>{" "}
                    </div>
                  )}
                </div>
                <br />
              </div>
            ))}
          </div>
          <div id="boardReply">
           
            <div id="replyRight" style={{ whiteSpace: "pre-wrap" }}>
              <textarea
                id="replyBoard"
                style={{ whiteSpace: "pre-wrap" }}
                onChange={(event) => setReplyContent(event.target.value)}
              ></textarea>
            </div>
            <div id="replySend">
              <button id="replySendBtn" onClick={replySave}>
                보내기
              </button>
            </div>
          </div>
          <br /> <br />
        </div>
        <br></br> <br></br>
        <div align="center">
          <button className="modifyBtn" id={deleteShow} onClick={modify2}>
            수정
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className="deleteBtn"
            id={deleteShow}
            onClick={handleClickOpen4}
          >
            삭제
          </button>
          <Dialog
            open={open4}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose4}
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
              {"삭제"}
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
                정말 삭제하시겠습니까?
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
                style={{ padding: "1%", width: "30%" }}
                onClick={delete2}
              >
                확인
              </button>
              <button
                id="loginBtn"
                style={{ padding: "1%", width: "30%" }}
                onClick={handleClose4}
              >
                취소
              </button>
            </DialogActions>
          </Dialog>
        </div>
        <br /> <br />
        <br /> <br />
      </div>
    </div>
  );
}

export default BoardView;
