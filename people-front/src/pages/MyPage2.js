import React, { useEffect } from "react";
import styled from "styled-components";
import axios from 'axios'
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

function MyPage2(props) {
  const [check,setCheck] = useState("1");
  const [nickName,setNickName] = useState("");
  let [blood,setBlood] = useState(""); // rh체크 시 값 변경이 일어나므로 let으로 선언
  const [area,setArea] = useState("서울특별시");
  const [error,setError] = useState("primary"); // 닉네임 에러
  const [nickLabel,setNickLabel] = useState("닉네임"); // 닉네임 에러'
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

     if(nickName === "") {
      alert("닉네임을 입력해주세요");
      return;
    }
    if(check !== 0) {
      alert("이미 사용중인 닉네임입니다.");
      return;
    }
    

    if(rh){ //rh를 체크 했을 때
      blood = blood+'-';
    }

    axios.post('http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/userModify', null, {
      params: { 
        email: window.localStorage.getItem("email"),
        nickName : nickName,
        blood: blood,
        area: area,
        push: push
      }
    })
      .then(res => {  
        console.log(res.data)
        alert("회원정보가 수정되었습니다.")
        document.location.href = '/myPage'
      })
      .catch(function(error){
       console.log(error);
    })
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

  

  useEffect(()=>{
    overlap();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[nickName])



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
      <h1 className="sidebarTitle">내 정보 수정</h1>
      <span align="center" className="hello">
        사용자 계정을 수정할 수 있는 공간입니다.
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
      <br></br>
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
                id="outlined-error"
                label={nickLabel}
                variant="outlined"
                color={error}
                onChange={(event) => setNickName(event.target.value)}
              /><br/>
            </Box>
            
          </p>
          <br></br>------------ (본인의 혈액형을 선택해주세요.) ------------
          <br />
          <fieldset>
            <label>
              <Radio
                onChange={(event) => setBlood(event.target.value)}
                value="A"
                name="blood"
              />
              A형&nbsp;&nbsp;
            </label>

            <label>
              <Radio
                onChange={(event) => setBlood(event.target.value)}
                value="B"
                name="blood"
              />
              B형&nbsp;&nbsp;
            </label>

            <label>
              <Radio
                onChange={(event) => setBlood(event.target.value)}
                value="AB"
                name="blood"
              />
              AB형&nbsp;&nbsp;
            </label>

            <label>
              <Radio
                onChange={(event) => setBlood(event.target.value)}
                value="O"
                name="blood"
              />
              O형&nbsp;&nbsp; &nbsp;꒐
              <Checkbox style={{ color: "#e6687d" }} onChange={handleChange2}/>
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
          <button id="loginBtn" onClick={join}>정보 수정</button>
        </div>
      </div>
    </div>
  );
}



export default MyPage2;


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