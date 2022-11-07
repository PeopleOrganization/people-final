import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";

function Login(props) {
  const [email, setEmail] = useState("");

  const find = () => {
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/findPassword", null, {
        params: {
          email: email,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.result !== 0) {
          // 받아온 값이 0이 아니라면 성공
          alert("임시 비밀번호가 발급되었습니다. 메일을 확인해주세요");
          document.location.href = "/Login";
        } else {
          // 0이라면 실패
          alert("가입되지 않은 이메일입니다.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="centerContainer">
      <div className="container">
        <h1 className="sidebarTitle">비밀번호 찾기</h1>
        <span align="center" className="hello">
          <span id="redColor">피플</span>은 고객님의 정보를 소중하게 생각합니다.
        </span>
        <span align="center" className="hello">
          비밀번호를 찾으시려면 이메일을 입력해주세요
        </span>
        <hr />
        <br></br>
        <div align="center" id="margin">
          <TextField
            sx={{ width: "25%" }}
            name="email"
            label="이메일"
            id="outlined-basic"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <br />

          <p>
            <button id="loginBtn" onClick={find}>
              비밀번호 찾기
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;