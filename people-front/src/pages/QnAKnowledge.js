import React from 'react';
import Img from '../imgs/QnA_bg.png';
import Img2 from '../imgs/blood_icon.png';
import Img3 from '../imgs/blood_icon2.png';
import Img4 from '../imgs/blood_icon3.png';
import Img5 from '../imgs/icon_flow01.png';
import Img6 from '../imgs/icon_flow02.png';
import Img7 from '../imgs/icon_flow03.png';
import Img8 from '../imgs/icon_flow04.png';
import styled from "styled-components";
import Fade from "react-reveal/Fade";

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

function QnAKnowledge(props) {
    return (
      <div id="bigContainer">
<div id="sideLeft">

    <ul className="sidebarList2">
      <a className="href2" href="QnAKnowledge">
        {" "}
        <li className="sidebarListItem2 active">헌혈지식</li>
      </a>
      &nbsp;
      <a className="href2" href="QnADesignated">
        <li className="sidebarListItem2">지정헌혈이란?</li>
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
          생명이 위태로운 다른 사람에게 자신의 혈액을 기증하는
                  <br></br>사랑의 실천이자 생명을 나누는 고귀한 행위입니다.
          </span>
          <hr />
          
          <ui className="sidebarCircle">
                  <ul className="sidebarList">
                    <a className="href" href="QnAKnowledge">
                      {" "}
                      <li className="sidebarListItem active">헌혈지식</li>
                    </a>
                    &nbsp;
                    <a className="href" href="QnADesignated">
                      <li className="sidebarListItem">지정헌혈이란?</li>
                    </a>
                    &nbsp;
                    <a className="href" href="QnAQuestion">
                      <li className="sidebarListItem">자주묻는 질문</li>
                    </a>
                  </ul>
                </ui>
          <div className="others">
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
              id="booldKind"
              style={{
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <h1 style={{ color: "red", fontWeight: "bold" }}>
                #헌혈을 하는 이유?&nbsp;
                <img
                  src={Img2}
                  style={{
                    width: "10%",
                  }}
                  alt="React"
                ></img>
              </h1>
              <hr style={{ height: "5px" }}></hr>
              <table
                id="qnaTable"
                align="center"
                
                width={"100%"}
              >
                
                <tr id="qnaTr">
                  <td id="qnaTd">
                    <br></br>
                    <h3 id="qnaTitle">#헌혈이란?</h3>
                    <hr id="qnaHr"></hr>건강한 사람이 혈액이 부족하여 생명이
                    위태로운 다른 사람에게 아무런 대가없이 자유의사로 자신의
                    혈액을 기증하는 사랑의 실천이자 생명을 나누는 고귀한
                    행위입니다.
                    <br></br>
                    <br></br>{" "}
                  </td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <td id="qnaTd">
                    <br></br>
                    <h3 id="qnaTitle">#헌혈은 장기이식의<br></br> 한 부분</h3>
                    <hr id="qnaHr"></hr>헌혈은 수혈이 필요한 환자의 생명을
                    구하는 유일한 수단입니다. 혈액은 아직 인공적으로 만들수
                    있거나 대체할 물질이 존재하지 않습니다.<br></br>
                    <br></br><br></br>
                  </td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <td id="qnaTd">
                    <h3 id="qnaTitle">#혈액의 상업적 유통 법적 규제</h3>
                    <hr id="qnaHr"></hr>생명을 사고 팔 수 없다는 인류공통의
                    윤리에 기반하여 세계각국은 혈액의 상업적 유통을 법으로
                    규제하고 있습니다.<br></br><br></br><br></br>
                  </td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </tr>
                <tr id="qnaTr">
                  <td id="qnaTd">
                    <h3 id="qnaTitle">#지속적 헌혈 필요</h3>
                    <hr id="qnaHr"></hr>혈액은 살아있는 세포로 구성되어 장기간
                    보존할 수 없습니다. 그러므로 헌혈은 지속적으로 이루어져야만
                    합니다.<br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <td id="qnaTd">
                    <h3 id="qnaTitle">#정기적 헌혈 참여의 필요</h3>
                    <hr id="qnaHr"></hr>우리나라는 연간 약 300만명이 헌혈하여야
                    외국으로부터 수입하지 않고 혈액을 자급할 수 있습니다.
                    <br></br>그러므로 건강한 성인이라면 정기적이고 꾸준한 헌혈이
                    필요합니다.
                   
                    <br></br>
                    <br></br>
                  </td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <td id="qnaTd">
                    <h3 id="qnaTitle">#모두를 위한 사랑의 실천</h3>
                    <hr id="qnaHr"></hr>우리는 언제 수혈을 받을 상황에 처할지
                    모릅니다. 건강할 때 헌혈하는 것은 자신과 사랑하는 가족을
                    위하여, 더 나아가 모두를 위한 사랑의 실천입니다. 헌혈은
                    건강한 사람만이 누릴 수 있는 특권입니다.
                    
                    <br></br>
                    <br></br>
                  </td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </tr>
                
              </table>
            </div>
            <div
              id="booldKind"
              style={{
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <h1 style={{ color: "red", fontWeight: "bold" }}>
                #혈액의 종류&nbsp;
                <img
                  src={Img3}
                  style={{
                    width: "10%",
                  }}
                  alt="React"
                ></img>
              </h1>
              <hr style={{ height: "5px" }}></hr>
              <h5>
                한 명의 헌혈자로부터 채혈된 전혈헌혈은 성분별 분리과정을 거쳐{" "}
                <span id="redColor">적혈구,</span>{" "}
                <span id="yellowColor">혈장, 혈소판 등</span>으로 나누어집니다.
              </h5>
              <br></br>

              <h3 id="redColor">
                #전혈: <span id="basicColor">대량출혈 또는 수술시 사용</span>
              </h3>
              <table style={{border:"1px solid"}}
                align="center"
                bgcolor="eaa063"
                width={"100%"}
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <tr>
                  <li id="qnaContents">
                    심한 출혈이 있는 환자, 즉 총 혈액량의 25% 이상 되는 출혈이
                    지속되어 쇼크에 빠질 우려가 있는 환자에게는 전혈을 수혈하는
                    것이 좋습니다. 전혈은 산소운반능력과 혈액량 확장이 동시에
                    요구될 때에만 사용하는 것이 권장됩니다. 적은 출혈 또는 만성
                    빈혈 환자에게 주입속도가 빠르게 전혈을 수혈하면 혈액량
                    과부하를 초래하여 폐부종 등을 유발할 수 있으므로 주의해야
                    합니다.
                  </li>

                  <li id="qnaContents">
                    24시간 이상 저장된 전혈에는 생존 가능한 혈소판과 백혈구가
                    거의 없으며 Fator V와 VIII의 농도도 저하되어 있습니다.
                    따라서 혈소판과 백혈구를 공급하기 위해서는 혈소판 또는
                    백혈구제제를 수혈해야 하며 혈액 응고인자를 보충하기 위해서는
                    신선동결혈장(fresh frozen plasma)을 수혈해야 합니다.
                  </li>
                </tr>
              </table>
              <br></br>
              <h3 id="redColor">
                #농축적혈구:{" "}
                <span id="basicColor">
                  적혈구 부족 또는 기능 저하시, 철결핍, 악성.재생불량성 등 각종
                  빈혈, 일산화탄소 중독 등에 사용
                </span>
              </h3>
              <table style={{border:"1px solid"}}
                align="center"
                bgcolor="eaa063"
                width={"100%"}
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <tr>
                  <li id="qnaContents">
                    적혈구는 산소운반능력 부족의 증상을 보이는 만성 빈혈 환자 및
                    수술 또는 외상에 의해 총혈액량의 15%이상의 출혈이 있는
                    환자의 치료에 이용됩니다. 신부전이나 악성종양 등 만성 빈혈
                    환자들은 혈액량이 정상이므로 전혈을 수혈하면 혈액량 과부하의
                    위험이 있습니다.
                  </li>

                  <li id="qnaContents">
                    헤모글로빈 수치가 8g/dl이상인 경우에는 적혈구 수혈이
                    불필요한 경우가 많습니다. 수술이나 외상에 의한 총혈액량의
                    15%미만의 출혈시에는 대부분 적혈구 수혈이 불필요합니다.
                  </li>
                </tr>
              </table>
              <br></br>

              <h3 id="yellowColor">
                #농축혈소판:{" "}
                <span id="basicColor">
                  혈소판 기능 이상, 혈소판 감소 환자, 급성백혈병, 재생불량성
                  빈혈 등에 사용
                </span>
              </h3>
              <table style={{border:"1px solid"}}
                align="center"
                bgcolor="e6687d"
                width={"100%"}
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <tr>
                  <li id="qnaContents">
                    적혈구는 산소운반능력 부족의 증상을 보이는 만성 빈혈 환자 및
                    수술 또는 외상에 의해 총혈액량의 15%이상의 출혈이 있는
                    환자의 치료에 이용됩니다. 신부전이나 악성종양 등 만성 빈혈
                    환자들은 혈액량이 정상이므로 전혈을 수혈하면 혈액량 과부하의
                    위험이 있습니다.
                  </li>

                  <li id="qnaContents">
                    헤모글로빈 수치가 8g/dl이상인 경우에는 적혈구 수혈이
                    불필요한 경우가 많습니다. 수술이나 외상에 의한 총혈액량의
                    15%미만의 출혈시에는 대부분 적혈구 수혈이 불필요합니다.
                  </li>
                </tr>
              </table>
              <br></br>

              <h3 id="yellowColor">
                #성분채혈 혈소판:{" "}
                <span id="basicColor">
                  혈소판 기능 이상, 혈소판 감소 환자, 급성백혈병, 재생불량성
                  빈혈 등에 사용
                </span>
              </h3>
              <table style={{border:"1px solid"}}
                align="center"
                bgcolor="e6687d"
                width={"100%"}
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <tr>
                  <li id="qnaContents">
                    혈소판제제는 혈소판 감소증 또는 혈소판 기능장애가있는
                    환자에게 지혈기능을 회복시키기 위해 사용됩니다.
                  </li>

                  <li id="qnaContents">
                    특히 HLA 동종면역에 의한 혈소판 수혈불응증 예방을 위해
                    계속적인 혈소판 수혈이 예상되는 백혈병, 재생불량성 빈혈 또는
                    항암제 치료시 사용됩니다.
                  </li>

                  <li id="qnaContents">
                    백혈병 또는 재생불량성 빈혈, 항암제 치료, 악성종양의
                    골수침범, 원발성 골수형성부전증 등으로 인하여 혈소판수가
                    20,000/ul이하로 감소된 환자들에게 주로 적응됩니다.
                  </li>
                </tr>
              </table>
              <br></br>

              <h3 id="yellowColor">
                #동결침전제제:{" "}
                <span id="basicColor">혈우병, 제8응고인자 결핍시에 사용</span>
              </h3>
              <table style={{border:"1px solid"}}
                align="center"
                bgcolor="e6687d"
                width={"100%"}
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <tr>
                  <li id="qnaContents">
                    A형 혈우병, 폰빌레브란트병, 선천성 혹은 후천성 섬유소원
                    결핍증, 제XIII인자 결핍증, 산과적 합병증 또는
                    파종성혈관내응고증 등 섬유소원의 소모와 관계된 질환들에
                    사용됩니다.
                  </li>
                </tr>
              </table>
              <br></br>

              <h3 id="yellowColor">#신선동결혈장</h3>
              <table style={{border:"1px solid"}}
                align="center"
                bgcolor="e6687d"
                width={"100%"}
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <tr>
                  <li id="qnaContents">
                    파종성혈관내응고증, 중증간질환, 쿠마딘계 항응고제 사용 시
                    출혈, 선천적 응고인자결핍증, 유전성 응고억제제 결핍증,
                    희석성 응고장애, 혈전성혈소판감소성 자반증,
                    용혈성요독성증후군, 비타민K결핍증, 출혈량을 예측할 수 없는
                    출혈로서 응급으로 혈액응고 검사를 시행할 수 없는 경우 등에
                    사용됩니다.
                  </li>
                </tr>
              </table>
              <br></br>

              <h3 id="redColor">#백혈구제거혈액제제</h3>
              <table style={{border:"1px solid"}}
                align="center"
                bgcolor="eaa063"
                width={"100%"}
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <tr>
                  <li id="qnaContents">
                    발열성 수혈부작용의 예방, HLA 동종면역을 예방할 수 있습니다.
                  </li>

                  <li id="qnaContents">
                    CMV등 바이러스 감염 예방 면역억제제를 투여하고 있는 장기이식
                    환자 또는 면역기능이 저하된 환자 등에게 적용됩니다.
                  </li>
                </tr>
              </table>
              <br></br><br></br>
            </div>
            <div
              id="booldKind"
              style={{
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <h1 style={{ color: "red", fontWeight: "bold" }}>
                #혈액은 어디로 갈까?&nbsp;
                <img
                  src={Img4}
                  style={{
                    width: "10%",
                  }}
                  alt="React"
                ></img>
              </h1>
              <hr style={{ height: "5px" }}></hr>
            </div>
            <div id="qnaWhere">
              <div id="where"><img
                  src={Img5}
                  style={{
                    width: "50%",
                  }}
                  alt="React"
                ></img><p id="whereTitle"><br></br>안전한 혈액보관</p>
                <br></br>혈액원은 검사가 완료된 <br></br>안전한 혈액을 보관합니다.</div>
              <div id="where"><img
                  src={Img6}
                  style={{
                    width: "50%",
                  }}
                  alt="React"
                ></img><p id="whereTitle"><br></br>혈액 성분제제별로 요청</p>
                <br></br>의료기관(병원)에서 혈액원으로 <br></br>필요한 만큼의 혈액을 <br></br>성분제제별로 요청합니다.</div>
              <div id="where"><img
                  src={Img7}
                  style={{
                    width: "50%",
                  }}
                  alt="React"
                ></img><p id="whereTitle"><br></br>의료기관으로 출고 및 운송</p>
                <br></br>혈액원은 의료기관이 요청한<br></br> 수량의 혈액성분제제를<br></br>해당 의료기관으로 출고 및 운송합니다.</div>
              <div id="where"><img
                  src={Img8}
                  style={{
                    width: "50%",
                  }}
                  alt="React"
                ></img><p id="whereTitle"><br></br>수혈전 적합검사</p>
                <br></br>의료기관(병원)은 해당 혈액을 필요한<br></br> 환자에게 수혈전 적합검사를 거쳐<br></br> 수혈하게 됩니다.</div>
            </div>
          </div>
          <button id="top2" onClick={scrollToTop} type="button" > Top</button>
          <br></br><br></br>
        </div>
      </div>
    );
}

export default QnAKnowledge;

