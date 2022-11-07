import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";

// import { KAKAO_AUTH_URL } from "../KaKaoLoginData";
// import logo from "../imgs/kakaologin.png";

// function Login(props) {
//   return (
//     <div align="center">
//       <a href={KAKAO_AUTH_URL}>
//         <img className="buttonImage" alt="kakaoButton" src={logo}></img>
//       </a>
//     </div>
//   );
// }

function Login(props) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const login2 = () => {
    console.log("로그인 하러 옴");
    axios
      .post("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/login", null, {
        params: {
          email: email,
          pw: pw,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data !== 1) {
          // 받아온 값이 1이 아니라면 성공

          alert("로그인에 성공하셨습니다.");
          window.localStorage.setItem("check", "login");
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("nickName", res.data[0]["nickName"]);
          document.location.href = "/";
        } else {
          // 1이라면 실패
          alert("로그인에 실패하셨습니다.");
        }

        return res;
      })
      .then((res) => {
        if (email === "") {
          alert("이메일을 입력해주세요.");
          return;
        } else if (pw === "") {
          alert("비밀번호를 입력해주세요.");
          return;
        }

        //console.log(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      login2(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const checkL = () => {
    // 로그인 페이지에 있는데 다른 페이지에서 이미 로그인 했다면
    if (window.localStorage.getItem("check") === "login") {
      document.location.href = "/";
    }
  };

  useEffect(() => {
    checkL();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.localStorage.getItem("check")]);

  return (
    <div className="centerContainer">
      <div className="container">
        <h1 className="sidebarTitle">로그인</h1>
        <span align="center" className="hello">
          <span id="redColor">피플</span>은 고객님의 정보를 소중하게 생각합니다.
        </span>
        <span align="center" className="hello">
          일부 서비스는 로그인 이후 이용 가능합니다.
        </span>
        <hr />
        <br></br>
        <div align="center" id="margin">
          <TextField
            sx={{ width: "25%"}}
            name="email"
            label="이메일"
            id="outlined-basic"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <br />
          <TextField
            sx={{ width: "25%" }}
            name="pw"
            id="outlined-basic"
            label="비밀번호"
            type="password"
            variant="outlined"
            onChange={(event) => setPw(event.target.value)}
            onKeyPress={handleOnKeyPress}
          />
          <br></br>
          <br></br>

          <p>
            <button id="loginBtn" onClick={login2}>
              로그인
            </button>
          </p>

          <table id="table">
            <tr>
              <p>
                {" "}
                <a id="loginHref" href="FindPassword">
                  비밀번호 찾기 ꒐
                </a>
                &nbsp;
                <a id="loginHref" href="Register" >
                  회원가입
                </a>
                &nbsp;
              </p>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Login;