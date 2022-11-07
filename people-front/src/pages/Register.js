import React, { useEffect } from "react";
import styled from "styled-components";
import axios from 'axios'
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { margin } from "polished";

function Register(props) {
  var mailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const [check,setCheck] = useState("1");
  const [emailCheck,setEmailCheck] = useState("1");
  const [pwCheck,setPwCheck] = useState("1");
  const [email,setEmail] = useState("");
  const [pw,setPw] = useState("");
  const [pw2,setPw2] = useState("");
  const [nickName,setNickName] = useState("");
  let [blood,setBlood] = useState(""); // rh체크 시 값 변경이 일어나므로 let으로 선언
  const [area,setArea] = useState("서울특별시");
  const [error,setError] = useState("primary"); // 닉네임 에러
  const [nickLabel,setNickLabel] = useState("닉네임"); // 닉네임 에러'
  const [error2,setError2] = useState("primary"); // 이메일 에러
  const [emailLabel,setEmailLabel] = useState("이메일"); // 이메일 에러
  const [error3,setError3] = useState("primary"); // 비밀번호 확인 에러
  const [pwLabel,setPwLabel] = useState("비밀번호 확인"); // 비밀번호 확인 에러
  const [push,setPush] = useState(false);
  const [rh, setRh] = useState(false);
  const handleChange = () => { 
    setPush(!push); 
  };
  const handleChange2 = () => { 
    setRh(!rh); 
  };

  const provinces = [
    { id: "서울특별시", province: "서울특별시" },
    { id: "경기도", province: "경기도" },
    { id: "강원도", province: "강원도" },
    { id: "충청북도", province: "충청북도" },
    { id: "충청남도", province: "충청남도" },
    { id: "전라북도", province: "전라북도" },
    { id: "전라남도", province: "전라남도" },
    { id: "경상북도", province: "경상북도" },
    { id: "경상남도", province: "경상남도" },
    { id: "제주특별자치도", province: "제주특별자치도" },
  ];

  const join = () => {
    console.log("회원가입 하러 옴");

    if(email === "") {
      alert("이메일을 입력해주세요.");
      return;
    }else if(pw === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }else if(nickName === "") {
      alert("닉네임을 입력해주세요");
      return;
    }else if(pw2 !== pw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if(emailCheck !== 0) {
      alert("이미 사용중인 이메일입니다.");
      return;
    }
    if(check !== 0) {
      alert("이미 사용중인 닉네임입니다.");
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
    if(!mailRegExp.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if(rh){ //rh를 체크 했을 때
      blood = blood+'-';
    }

    axios.post('http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/join', null, {
      params: { 
        email: email,
        pw: pw,
        nickName : nickName,
        blood: blood,
        area: area,
        push: push
      }
    })
      .then(res => {  
        console.log(res.data)
        alert("회원가입에 성공하셨습니다.")
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

  //닉네임 중복체크
  const overlap = (prop) => {
    console.log("중복체크 하러 옴");


    axios.post('http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/overlap', null, {
      params: { 
        nickName: nickName,
      }
    })
      .then(res => {

        console.log(res.data)
        if(res.data === 0) { // 0을 받아오면 성공했다는 알람
          console.log("없는 닉네임");
          setNickLabel("닉네임")
          setError("primary");
          setCheck(0);
          return;
        }else { // 0이외의 값이라면 실패했다는 알람
          console.log("있는 닉네임");
          setNickLabel("이미 존재하는 닉네임")
          setError("error");
          setCheck(1);
          return;
        }
      })
      .catch(function(error){
       console.log(error);
    })
  }

  //이메일 중복체크
  const emailOverlap = () => {
    console.log("중복체크 하러 옴");


    axios.post('http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/emailOverlap', null, {
      params: { 
        email: email,
      }
    })
      .then(res => {

        console.log(res.data)
        if(res.data === 0) { // 0을 받아오면 성공했다는 알람
          console.log("없는 이메일");
          setEmailLabel("이메일");
          setError2("primary");
          setEmailCheck(0);
          return;
        }else { // 0이외의 값이라면 실패했다는 알람
          console.log("있는 이메일");
          setEmailLabel("이미 존재하는 이메일");
          setError2("error");
          setEmailCheck(1);
          return;
        }
      })
      .catch(function(error){
       console.log(error);
    })
  }

  useEffect(()=>{
    pwCheck2();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pw2])

  useEffect(()=>{
    overlap();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[nickName])

  useEffect(()=>{
    emailOverlap();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[email])

  return (
    <div className="centerContainer">
      <div className="container">
        <h1 className="sidebarTitle">회원가입</h1>
        <span align="center" className="hello">
          <span id="redColor">피플</span>은 고객님의 정보를 소중하게 생각합니다.
        </span>
        <span align="center" className="hello">
          일부 서비스는 로그인 이후 이용 가능합니다.
        </span>
        <hr />
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
                label={emailLabel}
                variant="outlined"
                color={error2}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="비밀번호"
                type="password"
                variant="outlined"
                onChange={(event) => setPw(event.target.value)}
              />
              <br></br>
              <TextField
                id="outlined-basic"
                label={pwLabel}
                type="password"
                variant="outlined"
                color={error3}
                onChange={(event) => setPw2(event.target.value)}
              />
              <br></br>
              <TextField
                id="outlined-error"
                label={nickLabel}
                variant="outlined"
                color={error}
                onChange={(event) => setNickName(event.target.value)}
              />
              <br />
            </Box>
          </p>
          <br></br>------------ (본인의 혈액형을 선택해주세요.) ------------
          <br />
          <fieldset>
              <Radio
                onChange={(event) => setBlood(event.target.value)}
                value="A"
                name="blood"
                />&nbsp;
                <label>
              A형&nbsp;&nbsp;
            </label>

              <Radio
                onChange={(event) => setBlood(event.target.value)}
                value="B"
                name="blood"
                />&nbsp;
                <label>
              B형&nbsp;&nbsp;
            </label>

              <Radio
                onChange={(event) => setBlood(event.target.value)}
                value="AB"
                name="blood"
                />&nbsp;
                <label>
              AB형&nbsp;&nbsp;
            </label>

              <Radio
                onChange={(event) => setBlood(event.target.value)}
                value="O"
                name="blood"
                />&nbsp;
                <label>
              O형&nbsp;&nbsp; &nbsp;꒐
              <Checkbox style={{ color: "#e6687d" }} onChange={handleChange2} />
              Rh-혈액형
            </label>
          </fieldset>
          <br></br>
          <p>
            --------------- (거주지역을 선택해주세요.) ---------------
            <br />
            <select onChange={(event) => setArea(event.target.value)}>
              {provinces.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.province}
                </option>
              ))}
            </select>
          </p>
          <br></br>
          <p>
            <Checkbox
              style={{ color: "#e6687d" }}
              id="agree"
              onChange={handleChange}
            />
            이메일 수신 동의
          </p>
          <button id="loginBtn" onClick={join}>
            회원가입
          </button>
        </div>
          <br></br><br></br>
      </div>
    </div>
  );
}



export default Register;


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

const Radio = styled.input.attrs((props) => ({
  type: "radio",
  size: props.size || "1em",
}))`
  
  width:1.25em;
  height:1.25em;
  
`;