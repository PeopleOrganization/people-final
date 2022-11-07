import React from "react";
import Img from "../imgs/QnA_bg2.png";
import Img2 from "../imgs/blood_icon4.png";
import Img3 from "../imgs/blood_icon5.png";
import Img4 from "../imgs/blood_icon.png";
import Img5 from "../imgs/blood_icon7.png";
import Img6 from "../imgs/blood_icon8.png";
import Img7 from "../imgs/blood_icon9.png";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const IntroBlock = styled.div`
  margin-bottom: 135px;
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

const oneCheckBox = (checkThis) =>{
  const box = document.getElementsByName("box");
  for(let i=0; i<box.length; i++){
    if(box[i]!==checkThis){
      box[i].checked = false;
    }
  }
}

function QnADesignated(props) {
  return (
    <div id="bigContainer">
      <div id="sideLeft">
          <ul className="sidebarList2">
            <a className="href2" href="QnAKnowledge">
              {" "}
              <li className="sidebarListItem2">헌혈지식</li>
            </a>
            &nbsp;
            <a className="href2" href="QnADesignated">
              <li className="sidebarListItem2 active">지정헌혈이란?</li>
            </a>
            &nbsp;
            <a className="href2" href="QnAQuestion">
              <li className="sidebarListItem2">자주묻는 질문</li>
            </a>
            <br></br>
            <button id="top" onClick={scrollToTop} type="button" > Top</button>
          </ul>
      </div>
      <div className="container">
        <h1 className="sidebarTitle">궁금해요!</h1>
        <span align="center" className="hello">
          헌혈자가 대상을 미리 지정해 놓고 하는 헌혈로써,
          <br></br>헌혈을 하는 사람이 현혈을 하기 전에 수혈자를 지정하거나,
          <br></br>환자가 수혈을 받기 전에 헌혈자를 지정하는 경우를 모두
          포함합니다.
        </span>
        <hr />
        <ui className="sidebarCircle">
                  <ul className="sidebarList">
                    <a className="href" href="QnAKnowledge">
                      {" "}
                      <li className="sidebarListItem">헌혈지식</li>
                    </a>
                    &nbsp;
                    <a className="href" href="QnADesignated">
                      <li className="sidebarListItem active">지정헌혈이란?</li>
                    </a>
                    &nbsp;
                    <a className="href" href="QnAQuestion">
                      <li className="sidebarListItem">자주묻는 질문</li>
                    </a>
                  </ul>
                </ui>





        <div className="others"></div>
        <Fade bottom>
          <IntroBlock>
            <img
              src={Img}
              style={{
                width: "80%",
                backgroundrepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundAttachment: "fixed",
                webkitUserDrag: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
              alt="React"
            ></img>
          </IntroBlock>
        </Fade>

        <div
          id="designated_1"
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <h1 style={{ color: "red", fontWeight: "bold" }}>
            #지정헌혈 필수 지참 사항&nbsp;
            <img
              src={Img2}
              style={{
                width: "10%",
              }}
              alt="React"
            ></img>
          </h1>
          <hr style={{ height: "5px" }}></hr>

          <h3 id="underLine">
            {" "}
            1. "환자 또는 보호자" 로 부터 전달 받은 "수혈자 등록번호"
          </h3>
          <br />
          <h3 id="underLine"> 2. 헌혈자 본인 신분증</h3>
          <br></br>
          <br></br>
          <div id="desAllDiv">
            <div id="desLeftDiv">
              <table border={3}>
                <tr>
                  <td id="desTd1">"수혈자 등록번호"를 지참한 지정헌혈자</td>
                </tr>
                <tr>
                  <td>
                    1. 문진 간호사에게 "수혈자 등록번호"를 보여주시기 바랍니다.
                  </td>
                </tr>
                <tr>
                  <td>2. 혈연여부 확인 후 채혈이 진행됩니다.</td>
                </tr>
              </table>
            </div>

            <div id="desRightDiv">
              <table border={3}>
                <tr>
                  <td id="desTd2">"수혈자 등록번호"가 없는 지정헌혈자</td>
                </tr>
                <tr>
                  <td>
                    1. 환자 또는 보호자에게 "수혈자 등록번호"를 받아 주시기
                    바랍니다.
                  </td>
                </tr>
                <tr>
                  <td>
                    2. "수혈자 등록번호"가 없으면{" "}
                    <span id="redColor">지정헌혈 진행이 불가능합니다.</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <h3 id="desH3">
            "수혈자 등록번호"는 해당 병원에서 환자 또는 보호자에게 SNS로
            전송됩니다.
          </h3>
          <br></br>
          <br></br>
          <h4 id="desH4">
            #유의사항: 의료기관에서 수혈자 정보가 등록되지 않거나 요청 기간이
            만료된 경우 <br></br>일반 헌혈로 전환되어 다른 환자에게 수혈될 수
            있습니다.
          </h4>
          <hr style={{ height: "5px" }}></hr>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 style={{ color: "red", fontWeight: "bold" }}>
            #지정헌혈 절차&nbsp;
            <img
              src={Img3}
              style={{
                width: "10%",
              }}
              alt="React"
            ></img>
          </h1>
          <hr style={{ height: "5px" }}></hr>
          <br></br>

          <table id="desTable" border={3}>
            <tr width="100%">
              <td width="30%">
                <img
                  src={Img5}
                  style={{
                    width: "50%",
                  }}
                  alt="React"
                ></img>
              </td>
              <td id="desT" width="70%">
                1. 문진 시 ‘지정헌혈자 안내문’(SMS 발신내용)을 문진 간호사에게
                보여주세요.
              </td>
            </tr>
            <br></br>
            <tr width="100%">
              <td width="30%">
                <img
                  src={Img4}
                  style={{
                    width: "40%",
                  }}
                  alt="React"
                ></img>
              </td>
              <td id="desT" width="70%">
                2. 지정헌혈(수혈자 등록번호) 정보조회 후 채혈이 진행됩니다.
              </td>
            </tr>
            <br></br>
            <tr width="100%">
              <td width="30%">
                <img
                  src={Img6}
                  style={{
                    width: "70%",
                  }}
                  alt="React"
                ></img>
              </td>
              <td id="desT" width="70%">
                3. 채혈되어진 혈액은 환자의 지정혈액으로 등록되어 해당병원으로
                보냅니다.
              </td>
            </tr>
          </table>

          <br />
          <br />
          <h1 style={{ color: "red", fontWeight: "bold" }}>
            #지정헌혈 가능 병원&nbsp;
            <img
              src={Img7}
              style={{
                width: "10%",
              }}
              alt="React"
            ></img>
          </h1>
          <Link to="/Facilities?blood=hospital">
            <button className="hosButton" type="button">
              병원위치보기
            </button>
          </Link>
          <hr style={{ height: "5px" }}></hr>

          <br></br>
          <div id="deshos">
            <div id="deshosList">
              <input
                type="checkbox"
                name="box"
                id="menuBtn"
                defaultChecked
                onChange={(e) => oneCheckBox(e.target)}
              ></input>
              <label for="menuBtn" className="labelBtn" onclick="">
                ㄱ
              </label>
              <input
                type="checkbox"
                name="box"
                id="menuBtn2"
                onChange={(e) => oneCheckBox(e.target)}
              ></input>
              <label for="menuBtn2" className="labelBtn2" onclick="">
                ㄷ
              </label>
              <input
                type="checkbox"
                name="box"
                id="menuBtn3"
                onChange={(e) => oneCheckBox(e.target)}
              ></input>
              <label for="menuBtn3" className="labelBtn3" onclick="">
                ㅁ
              </label>
              <input
                type="checkbox"
                name="box"
                id="menuBtn4"
                onChange={(e) => oneCheckBox(e.target)}
              ></input>
              <label for="menuBtn4" className="labelBtn4" onclick="">
                ㅂ
              </label>
              <input
                type="checkbox"
                name="box"
                id="menuBtn5"
                onChange={(e) => oneCheckBox(e.target)}
              ></input>
              <label for="menuBtn5" className="labelBtn5" onclick="">
                ㅅ
              </label>
              <input
                type="checkbox"
                name="box"
                id="menuBtn6"
                onChange={(e) => oneCheckBox(e.target)}
              ></input>
              <label for="menuBtn6" className="labelBtn6" onclick="">
                ㅇ
              </label>
              <input
                type="checkbox"
                name="box"
                id="menuBtn7"
                onChange={(e) => oneCheckBox(e.target)}
              ></input>
              <label for="menuBtn7" className="labelBtn7" onclick="">
                ㅈ
              </label>
              <input
                type="checkbox"
                name="box"
                id="menuBtn8"
                onChange={(e) => oneCheckBox(e.target)}
              ></input>
              <label for="menuBtn8" className="labelBtn8" onclick="">
                ㅊ
              </label>
              <input
                type="checkbox"
                name="box"
                id="menuBtn9"
                onChange={(e) => oneCheckBox(e.target)}
              ></input>
              <label for="menuBtn9" className="labelBtn9" onclick="">
                ㅎ
              </label>
              <table className="hosList">
                <br></br>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>강남연세사랑</span>
                  </td>
                  <td id="hosLi">
                    <span>강남힘찬</span>
                  </td>
                  <td id="hosLi">
                    <span>강북힘찬</span>
                  </td>
                  <td id="hosLi">
                    <span>강서힘찬</span>
                  </td>
                </tr>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>강동성심</span>
                  </td>
                  <td id="hosLi">
                    <span>강동경희대</span>
                  </td>
                  <td id="hosLi">
                    <span>건국대</span>
                  </td>
                  <td id="hosLi">
                    <span>고대안암</span>
                  </td>
                </tr>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>고대구로</span>
                  </td>
                  <td id="hosLi">
                    <span>고대안산</span>
                  </td>
                  <td id="hosLi">
                    <span>국제성모</span>
                  </td>
                  <td id="hosLi">
                    <span>국립암</span>
                  </td>
                </tr>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>광명성애</span>
                  </td>
                  <td id="hosLi">
                    <span>광명21세기</span>
                  </td>
                  <td id="hosLi">
                    <span>김포우리(우리의료재단)</span>
                  </td>
                  <td id="hosLi">
                    <span>가은</span>
                  </td>
                </tr>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>경희의료원</span>
                  </td>
                  <td id="hosLi">
                    <span>가천의대 길</span>
                  </td>
                  <td id="hosLi">
                    <span>국제나은(안양)</span>
                  </td>
                  <td id="hosLi">
                    <span>가톨릭대학교 서울성모</span>
                  </td>
                </tr>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>가톨릭대학교 여의도성모</span>
                  </td>
                  <td id="hosLi">
                    <span>가톨릭대학교 의정부성모</span>
                  </td>
                  <td id="hosLi">
                    <span>가톨릭대학교 인천성모</span>
                  </td>
                  <td id="hosLi">
                    <span>가톨릭대학교 은평성모</span>
                  </td>
                </tr>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>가톨릭대학교 부천성모</span>
                  </td>
                </tr>
              </table>

              <table className="hosList2">
                <br></br>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>더플러스병원(경기도 광주)</span>
                  </td>
                </tr>
              </table>

              <table className="hosList3">
                <br></br>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>목동힘찬</span>
                  </td>
                  <td id="hosLi">
                    <span>명지(화정)</span>
                  </td>
                  <td id="hosLi">
                    <span>메디하임효병원</span>
                  </td>
                </tr>
              </table>

              <table className="hosList4">
                <br></br>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>백성병원</span>
                  </td>
                  <td id="hosLi">
                    <span>본서부병원</span>
                  </td>
                  <td id="hosLi">
                    <span>부평힘찬</span>
                  </td>
                  <td id="hosLi">
                    <span>부천세종(혜원의료재단)</span>
                  </td>
                  <td id="hosLi">
                    <span>바른사랑(신림)-신규병원</span>
                  </td>
                </tr>
              </table>

              <table className="hosList5">
                <br></br>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>서울아산</span>
                  </td>
                  <td id="hosLi">
                    <span>서울대</span>
                  </td>
                  <td id="hosLi">
                    <span>서울대 어린이병원</span>
                  </td>
                  <td id="hosLi">
                    <span>삼성서울본원</span>
                  </td>
                  <td id="hosLi">
                    <span>삼성서울 암센터</span>
                  </td>
                  <td id="hosLi">
                    <span>시화(남촌의료재단)</span>
                  </td>
                  <td id="hosLi">
                    <span>신길성애</span>
                  </td>
                  <td id="hosLi">
                    <span>샘안양(효산의료재단)</span>
                  </td>
                  <td id="hosLi">
                    <span>센트럴병원(시화)</span>
                  </td>
                </tr>
              </table>

              <table className="hosList6">
                <br></br>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>아주대</span>
                  </td>
                  <td id="hosLi">
                    <span>인제대학교 일산백</span>
                  </td>
                  <td id="hosLi">
                    <span>일산21세기</span>
                  </td>
                  <td id="hosLi">
                    <span>안산21세기</span>
                  </td>
                  <td id="hosLi">
                    <span>인천힘찬종합</span>
                  </td>
                  <td id="hosLi">
                    <span>원광대 산본</span>
                  </td>
                  <td id="hosLi">
                    <span>연세본사랑(전 부천연세사랑)</span>
                  </td>
                  <td id="hosLi">
                    <span>의정부 을지대병원</span>
                  </td>
                  <td id="hosLi">
                    <span>이화의대 서울</span>
                  </td>
                  <td id="hosLi">
                    <span>이화의대 목동</span>
                  </td>
                  <td id="hosLi">
                    <span>용인세브란스</span>
                  </td>
                  <td id="hosLi">
                    <span>연세의료원(신촌세브란스)</span>
                  </td>
                  <td id="hosLi">
                    <span>우리들병원(청담)</span>
                  </td>
                </tr>
              </table>

              <table className="hosList7">
                <br></br>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>지샘(효산의료재단)</span>
                  </td>
                </tr>
              </table>

              <table className="hosList8">
                <br></br>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>최원호</span>
                  </td>
                  <td id="hosLi">
                    <span>참조은병원(경기도 광주)</span>
                  </td>
                  <td id="hosLi">
                    <span>척편한병원</span>
                  </td>
                </tr>
              </table>

              <table className="hosList9">
                <br></br>
                <tr id="hosUl">
                  <td id="hosLi">
                    <span>한양의대 구리</span>
                  </td>
                  <td id="hosLi">
                    <span>한림대학교 한강성심</span>
                  </td>
                  <td id="hosLi">
                    <span>한림대학교 강남성심</span>
                  </td>
                  <td id="hosLi">
                    <span>한림대학교 강남성심(신관)</span>
                  </td>
                  <td id="hosLi">
                    <span>한림대학교 평촌성심</span>
                  </td>
                  <td id="hosLi">
                    <span>한림대학교 동탄성심</span>
                  </td>
                  <td id="hosLi">
                    <span>혜민</span>
                  </td>
                  <td id="hosLi">
                    <span>희명</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <button id="top2" onClick={scrollToTop} type="button" > Top</button>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default QnADesignated;
