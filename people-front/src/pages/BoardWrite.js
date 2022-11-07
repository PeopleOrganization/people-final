import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BoardView.css";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function BoardWrite() {
  const { vocId } = useParams();
  // const item = GetData(vocId);

  const [open, setOpen] = React.useState(false);

  const [bloodType, setBloodType] = useState("");
  const [title, setTitle] = useState("");
  const [bloodKind, setBloodKind] = useState("");
  const [patientName, setPatientName] = useState("");
  const [hospital, setHospital] = useState("");
  const [phonNum, setPhonNum] = useState("");
  const [registNum, setRegistNum] = useState("");
  const [requestB, setRequestB] = useState("");
  const [content, setContent] = useState("");

  function validation(post) {
    if (title === "") {
      alert("제목을 입력하세요");
      return;
    }
    if (bloodType === "") {
      alert("혈액형을 선택하세요");
      return;
    }
    if (bloodKind === "") {
      alert("헌혈종류를 선택하세요");
      return;
    }
    if (requestB === "") {
      alert("필요수량을 선택하세요");
      return;
    }
    if (patientName === "") {
      alert("환자명을 입력하세요");
      return;
    }
    if (hospital === "") {
      alert("의료기관을 입력하세요");
      return;
    }
    if (!/^[0-9]+$/.test(phonNum) || phonNum.length < 8) {
      alert("연락처를 입력하세요");
      return;
    }
    if (!/^\d{10}$/.test(registNum)) {
      alert("등록번호를 입력하세요");
      return;
    }
    post();
  }

  const postSave = () => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/post", null, {
        params: {
          nickName: window.localStorage.getItem("nickName"),
          bloodType: bloodType,
          bloodKind: bloodKind,
          patientName: patientName,
          registNum: registNum,
          hospital: hospital,
          phonNum: phonNum,
          requestB: requestB,
          responseB: 0,
          title: title,
          content: content,
          email: window.localStorage.getItem("email"),
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("게시글 등록에 성공하셨습니다.");
        document.location.href = "/Board";
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <h1 className="sidebarTitle">글쓰기</h1>
        <span align="center" className="hello">
          도움을 요청하세요.
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
        <br></br>
        <div id="postContainer2" align="center">
          <br />
          {/* <div>{item}</div> */}
          <br />
          <div className="voc-view-wrapper">
            <div className="voc-view-row2">
              <TextField
                sx={{ minWidth: "100%" }}
                name="email"
                label="제목"
                id="outlined-basic"
                variant="outlined"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="voc-view-row2">
              <Box sx={{ minWidth: "32.8%" }}>
                <FormControl fullWidth>
                  <InputLabel
                    
                    id="demo-simple-select-helper-label"
                  >
                    혈액형
                  </InputLabel>
                  <Select
                    
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={bloodType}
                    label="Type"
                    onChange={(event) => setBloodType(event.target.value)}
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
              &nbsp;
              <Box sx={{ minWidth: "32.8%" }}>
                <FormControl fullWidth>
                  <InputLabel
                    
                    id="demo-simple-select-helper-label"
                  >
                    헌혈종류
                  </InputLabel>
                  <Select
                   
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={bloodKind}
                    label="Kind"
                    onChange={(event) => setBloodKind(event.target.value)}
                  >
                    <MenuItem value="">혈액종류</MenuItem>
                    <MenuItem value={"전혈"}>전혈</MenuItem>
                    <MenuItem value={"성분채혈 혈소판"}>
                      성분채혈 혈소판
                    </MenuItem>
                    <MenuItem value={"혈장"}>혈장</MenuItem>
                    <MenuItem value={"농축적혈구"}>농축적혈구</MenuItem>
                    <MenuItem value={"성분채혈 백혈구"}>
                      성분채혈 백혈구
                    </MenuItem>
                    <MenuItem value={"백혈구여과제거적혈구"}>
                      백혈구여과제거적혈구
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              &nbsp;
              <Box sx={{ minWidth: "32.8%" }}>
                <FormControl fullWidth>
                  <InputLabel
                   
                    id="demo-simple-select-helper-label"
                  >
                    필요수량
                  </InputLabel>
                  <Select
                   
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={requestB}
                    label="Kind"
                    onChange={(event) => setRequestB(event.target.value)}
                  >
                    <MenuItem value="">필요수량</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="voc-view-row2">
              <TextField
                sx={{ minWidth: "100%" }}
                name="email"
                label="환자명"
                id="outlined-basic"
                variant="outlined"
                onChange={(event) => setPatientName(event.target.value)}
              />
            </div>
            <div className="voc-view-row2">
              <TextField
                sx={{ minWidth: "100%" }}
                name="email"
                label="의료기관"
                id="outlined-basic"
                variant="outlined"
                onChange={(event) => setHospital(event.target.value)}
              />
            </div>
            <div className="voc-view-row2">
              <TextField
                sx={{ minWidth: "100%" }}
                name="email"
                label="연락처 (ex:01012345678)"
                id="outlined-basic"
                variant="outlined"
                onChange={(event) => setPhonNum(event.target.value)}
              />
            </div>
            <div className="voc-view-row2">
              <TextField
                sx={{ minWidth: "100%" }}
                name="email"
                label="수혈자 등록번호 (10자리)"
                id="outlined-basic"
                variant="outlined"
                onChange={(event) => setRegistNum(event.target.value)}
              />
            </div>
            <br />
          </div>
          <div id="chatRoom2">
            {/* 수혈자 */}
            <br />
            <div id="receive2">
              <label id="receiveNick2">댓글 작성</label>
              <br />
              <textarea
                id="receiveChat2"
                onChange={(event) => setContent(event.target.value)}
              ></textarea>
            </div>
            <br />
            {/* 수혈자 여기까지 */}
            <br /> <br /> <br />
          </div>
          <button id="loginBtn" style={{marginBottom:"3%",padding:"1%"}} onClick={() => {
              validation(postSave);
            }}>
            등록하기
          </button>
          <br /> <br />
        </div>{" "}
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
export default BoardWrite;
