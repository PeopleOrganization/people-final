import React, { useEffect } from "react";
import styled from "styled-components";
import axios from 'axios'
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

function MyPage3(props) {
  const [pwCheck,setPwCheck] = useState("1");
  const [pw,setPw] = useState("");
  const [pw2,setPw2] = useState("");
  const [error3,setError3] = useState("primary"); // 비밀번호 확인 에러
  const [pwLabel,setPwLabel] = useState("비밀번호 확인"); // 비밀번호 확인 에러


  const change = () => {
    console.log("비밀번호 변경 하러 옴");

    if(pw2 !== pw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
   
    if(pwCheck !== 0) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if(pw.length < 4) {
      alert("비밀번호는 최소 4자리의 숫자 또는 문자로 이루어져야 합니다.")
      return;
    }


    axios.post('http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/userPw', null, {
      params: { 
        email: window.localStorage.getItem("email"),
        pw: pw
      }
    })
      .then(res => {  
        console.log(res.data)
        alert("비밀번호가 변경되었습니다.")
        document.location.href = '/'
      })
      .catch(function(error){
       console.log(error);
    })
  }

  const pwCheck2 = () => {

        if(pw === pw2) { // 0을 받아오면 성공했다는 알람
          console.log(pw);
          console.log("비밀번호 일치");
          setPwLabel("비밀번호 확인")
          setError3("primary");
          setPwCheck(0);
          return;
        }else { // 0이외의 값이라면 실패했다는 알람
          console.log("비밀번호 다름");
          setPwLabel("일치하지 않는 비밀번호")
          setError3("error");
          setPwCheck(1);
          return;
        }
     
  }


  useEffect(()=>{
    pwCheck2();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pw2])




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
      <div className="container">
        <h1 className="sidebarTitle">비밀번호 변경</h1>
        <span align="center" className="hello">
          사용자의 비밀번호를 변경할 수 있습니다. 
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
        </ui><br></br>
        <div align="center">
          <p>
            <Box 
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
             
              <TextField
                id="outlined-basic"
                label="비밀번호"
                type="password"
                variant="outlined"
                onChange={(event) => setPw(event.target.value)}
              /><br></br>
              <TextField
                id="outlined-basic"
                label={pwLabel}
                type="password"
                variant="outlined"
                color={error3}
                onChange={(event) => setPw2(event.target.value)}
              /><br></br>
             
            </Box>
            
          </p>
          <button id="loginBtn" onClick={change}>비밀번호 변경</button>
        </div>
      </div>
    </div>
  );
}



export default MyPage3;


const Button2 = styled.button`
&:hover{
  background: #555;
  color: #fff;
  border: none;
}
background: #000;
color: #fff;
border: none;
font-size: large;
margin-bottom:6%;
`;

// const Radio = styled.input.attrs((props) => ({
//   type: "radio",
//   size: props.size || "1em",
// }))`
  
//   width:1.25em;
//   height:1.25em;
  
// `;