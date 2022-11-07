import React from 'react';
import Img from '../imgs/faq.png';
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

function QnAQuestion(props) {
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
                <li className="sidebarListItem2">지정헌혈이란?</li>
              </a>
              &nbsp;
              <a className="href2" href="QnAQuestion">
                <li className="sidebarListItem2 active">자주묻는 질문</li>
              </a>
              <br></br>
            <button id="top" onClick={scrollToTop} type="button" > Top</button>
            </ul>
          
        </div>  
          <div className="container">
           
                  <h1 className="sidebarTitle">궁금해요!</h1>
                  <span align="center" className="hello">
                    모두가 궁금해하는 질문들을 모았습니다.
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
                      <li className="sidebarListItem">지정헌혈이란?</li>
                    </a>
                    &nbsp;
                    <a className="href" href="QnAQuestion">
                      <li className="sidebarListItem active">자주묻는 질문</li>
                    </a>
                  </ul>
                </ui>


            <div className="others"></div>
            <Fade bottom>
              <IntroBlock>
                <img
                  src={Img}
                  style={{
                    width: "60%",
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
            <hr style={{ height: "5px", color: "#000" }}></hr>
            <div id="deshos">
              <div id="deshosList">
                <input type="checkbox" id="menuBtn"></input>
                <label for="menuBtn" className="label2Btn" onclick="">
                  Q: 헌혈증서를 구입할 수 있다?
                </label>
                <hr></hr>
                <table className="hosList">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 헌혈증서는 혈액관리법
                        제3조(혈액매매행위등의 금지)에 의해 매매가 금지되어
                        있습니다.
                        <br />
                        최근 인터넷상에 수혈관련 사연을 등록하여 헌혈증서를
                        모아서 이를 다시 수혈이 필요한 환자 및 보호자 등에
                        판매한다는 기사가 소개된 적이 있습니다.
                        <br />
                        혈액관리법에서는 “누구든지 금전,재산상의 이익 기타
                        대가적 급부를 주거나 주기로 하고 타인의 혈액(제14조의
                        규정에 의한 헌혈증서를 포함한다)을
                        <br />
                        제공하거나 이를 약속하여서는 아니된다”고 규정하고
                        있습니다.
                        <br />
                        그러므로 헌혈증서를 사고 파는 것은 위법 행위이며
                        관련법규에 의하여 처벌을 받을 수 있습니다.
                        <br />
                        헌혈증서가 필요하신 분께서는 전국 적십자사
                        혈액원(기관리스트 참조)으로 문의하시면 기증증서를 소정의
                        절차를 거쳐 받으실 수 있습니다.
                        <br /> 자세한 사항은 해당지역 혈액원으로 연락주시기
                        바랍니다.
                        <br />
                        <br />
                        <span id="redColor">-관련법규-</span>
                        <br />
                        <br />
                        <span id="boldText">
                          혈액관리법 제3조(혈액매매행위등의 금지)
                        </span>
                        <br />
                        ①누구든지 금전,재산상의 이익 기타 대가적 급부를 받거나
                        받기로 하고 자신의 혈액(제14조의규정에 의한 헌혈증서를
                        포함한다)을
                        <br /> 제공하거나 이를 약속하여서는 아니된다.
                        <br />
                        ②누구든지 금전,재산상의 이익 기타 대가적 급부를 주거나
                        주기로 하고 타인의 혈액(제14조의 규정에 의한 헌혈증서를
                        포함한다)을
                        <br /> 제공하거나 이를 약속하여서는 아니된다.
                        <br />
                        ③누구든지 제1항 및 제2항의 규정에 위반되는 행위를
                        교사,방조 또는 알선하여서는 아니된다.
                        <br />
                        ④누구든지 제1항 및 제2항의 규정에 위반되는 행위가 있음을
                        안 때에는 그 행위와 관련되는 혈액을 채혈하거나
                        수혈하여서는 아니된다.
                        <br />
                        <br />
                        <span id="boldText">혈액관리법 제 18조(벌칙)</span>
                        <br />
                        ①제3조 규정에 위반한 자는 5년 이하의 징역 또는 2천만원
                        이하의 벌금에 처한다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn2"></input>
                <label for="menuBtn2" className="label2Btn2" onclick="">
                  Q: 헌혈을 하면 건강에 나쁘다?
                </label>
                <hr></hr>
                <table className="hosList2">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 우리 몸에 있는 혈액량은
                        남자의 경우 체중의 8%, 여자는 7% 정도이다.
                        <br />
                        예를 들어 체중이 60Kg인 남자의 몸 속에는 약 4,800mL의
                        혈액이 있고, 50Kg인 여자는 3,500mL 정도의 혈액을 가지고
                        있습니다.
                        <br />
                        전체 혈액량의 15%는 비상시를 대비해 여유로 가지고 있는
                        것으로, 헌혈 후 충분한 휴식을 취하면 건강에 아무런
                        지장을 주지 않습니다.
                        <br />
                        신체 내·외부의 변화에 대한 조절능력이 뛰어난 우리 몸은
                        헌혈 후 1~2일 정도면 일상생활에 지장이 없도록 혈관
                        내외의 혈액순환이 회복됩니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn3"></input>
                <label for="menuBtn3" className="label2Btn3" onclick="">
                  Q: 헌혈을 통해 에이즈 등 질병에 감염될 수 있다?
                </label>
                <hr></hr>
                <table className="hosList3">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 헌혈과정은 매우
                        안전합니다.
                        <br />
                        헌혈에 사용되는 모든 기구(바늘, 혈액백 등)은
                        무균처리되어 있으며, 한번 사용 후에는 모두 폐기처분 하기
                        때문에 <br />
                        헌혈로 인해 에이즈등 다른질병에 감염될 위험은 전혀
                        없습니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn4"></input>
                <label for="menuBtn4" className="label2Btn4" onclick="">
                  Q: 헌혈을 하면 살이 빠진다던데..., 다이어트에도 좋나요?
                </label>
                <hr></hr>
                <table className="hosList4">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 헌혈을 하면 헌혈량 만큼이
                        체외로 빠져나오는 것은 사실이지만 조직에 있던 혈액이
                        혈관 내로 바로 이동하여 보상하며,
                        <br /> 이후 며칠 또는 몇 주간 음식 및 수분 섭취 등으로
                        원래 상태로 보충됩니다.
                        <br /> 따라서 헌혈은 다이어트와는 무관합니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn5"></input>
                <label for="menuBtn5" className="label2Btn5" onclick="">
                  Q: 헌혈을 많이 하면 혈관이 좁아진다고 하는데?
                </label>
                <hr></hr>
                <table className="hosList5">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 혈관은 외부로부터 바늘이
                        들어오면 순간적으로 수축합니다.
                        <br /> 그러나 곧 본래의 상태로 회복되므로, 헌혈의 횟수와
                        혈관수축과는 아무런 상관이 없습니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn6"></input>
                <label for="menuBtn6" className="label2Btn6" onclick="">
                  Q: 헌혈을 하면 빈혈에 걸리지 않나요?
                </label>
                <hr></hr>
                <table className="hosList6">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 헌혈은 자기 몸에 여유로
                        가지고 있는 혈액을 나눠주는 것으로
                        <br /> 헌혈 전에 충분한 혈액이 있는지를 판단하기 위해
                        적혈구 내의 혈색소(헤모글로빈) 치를 측정하는 것입니다.
                        <br />
                        따라서 헌혈로 빈혈에 걸리지는 않습니다.
                        <br />
                        또한 헌혈자를 보호하기 위하여 연간 헌혈가능 횟수도
                        전혈헌혈은 5회로 제한하고 있습니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn7"></input>
                <label for="menuBtn7" className="label2Btn7" onclick="">
                  Q: 전에 헌혈을 하려다가 못하였는데 헌혈이 가능한가요?
                </label>
                <hr></hr>
                <table className="hosList7">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 일시적으로 헌혈에 참여하지
                        못한 경우, 다시 헌혈에 참여하실 수 있습니다.
                        <br /> 헌혈 부적격 사유는 매우 다양하지만 우리나라의
                        헌혈 부적격 사유 중 가장 많은 비율을 차지하고 있는 것은{" "}
                        <br />
                        저비중(최근 5년간 부적격 사유 중 평균 43.7% 차지)
                        입니다.
                        <br />
                        혈액속의 혈색소(헤모글로빈)는 항상 일정하지 않기 때문에
                        헌혈 전 검사를 통해 헌혈가능 여부를 확인하고 있으며,
                        <br /> 기타 질병 또는 약복용과 관련된 부적격은 사유별로
                        기간이 다르므로 헌혈의 집 간호사나 각 혈액원에 문의 하는
                        것이 좋습니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn8"></input>
                <label for="menuBtn8" className="label2Btn8" onclick="">
                  Q: 나의 헌혈기록이나 검사결과에 대한 비밀보장이
                  어렵다는데....?
                </label>
                <hr></hr>
                <table className="hosList8">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 헌혈자의 모든 헌혈기록이나
                        검사결과는 비밀이 보장되며, 본인이 아닌 다른 분들에게는
                        공개되지 않도록 법적으로 보호됩니다.
                        <br />
                        또한 개인정보보호를 위해 독립된 문진공간에서 문진이
                        진행되며 문진항목에 대한 답변 또한 비밀이 유지됩니다.
                        <br /> 또한 헌혈혈액 검사결과는 헌혈 후 1개월 정도
                        이내에 개인이 원하는 장소로 검사결과통보서를 발송해
                        줍니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn9"></input>
                <label for="menuBtn9" className="label2Btn9" onclick="">
                  Q: 에이즈검사도 하나요? 왜 검사를 통보해주지 않나요?
                </label>
                <hr></hr>
                <table className="hosList9">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 헌혈한 혈액은 혈액형검사,
                        B형간염 항원검사, C형간염 항체검사, ALT검사,
                        매독항체검사, HIV검사를 실시하나
                        <br /> 에이즈 검사를 목적으로 헌혈에 참여하는 것을 막기
                        위해서 에이즈(HIV) 검사결과는 통보해 주지 않습니다.
                        <br />
                        현재 각 구청 보건소에서는 개인의 비밀을 보장하면서
                        에이즈 검사를 실시하고 있으니 참고바랍니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn10"></input>
                <label for="menuBtn10" className="label2Btn10" onclick="">
                  Q: 에이즈에 대해 더 자세히 알고 싶을 땐 어디로 문의하면
                  되나요?
                </label>
                <hr></hr>
                <table className="hosList10">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 에이즈에 대해 자세히 알고
                        싶을 때는 한국에이즈퇴치연맹, 대한에이즈예방협회,
                        질병관리청로 문의해 주시기 바랍니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn11"></input>
                <label for="menuBtn11" className="label2Btn11" onclick="">
                  Q: 언론 보도를 보면, 에이즈 감염혈액이 수혈되었다고
                  하는데....?
                </label>
                <hr></hr>
                <table className="hosList11">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 대한적십자사에서는
                        수혈자의 안전을 위해 HIV, 매독, B형 간염, C형 간염,
                        간기능 검사등을 실시합니다.
                        <br />
                        HIV와 간염 검사는 과거 효소면역검사법(EIA)을
                        이용하였는데 이 검사법은 바이러스에 감염되지 않았는데도
                        양성반응을 보이는 경우
                        <br />
                        (가짜 양성, 위양성)가 있으며, 감염 후 혈액 내에 항원
                        또는 항체가 일정량 이상에 도달하지 못해 감염 여부를
                        진단할 수 없는 기간인
                        <br />
                        window period(잠복기)에는 혈액검사상 음성으로 판정될
                        수도 있었습니다.
                        <br />
                        에이즈나 간염에 감염된 혈액이 수혈되었다고 하는 보도의
                        대부분은 검사로는 바이러스 감염여부를 알아낼 수 없는
                        잠복기에 수혈된 경우입니다.
                        <br />
                        대한적십자사는 이러한 EIA 검사법을 보완하기 위해 혈액 속
                        바이러스의 핵산을 분리, 증폭하여 그 감염 유무를 확인하는
                        핵산증폭검사(NAT)를
                        <br />
                        도입해, 지난 2005년 2월부터 모든 헌혈혈액에 대해 검사를
                        실시하고 있습니다.
                        <br />
                        가장 선진화된 검사방법인 NAT 검사법은 기존의
                        효소면역측정법에 비하여 잠복기를 단축(HIV-11일, C형 간염
                        - 23일)하여 조기에
                        <br />
                        바이러스 감염 여부를 진단할 수 있는 방법입니다.
                        <br />
                        그러나 NAT 검사법 역시 에이즈의 경우에는 11일간, C형
                        간염의 경우에는 23일 정도의 잠복기를 가지고 있기 때문에
                        <br />
                        수혈로 인한 질병감염을 100% 막을 수는 없습니다.
                      </span>
                    </td>
                  </tr>
                </table>
                <input type="checkbox" id="menuBtn12"></input>
                <label for="menuBtn12" className="label2Btn12" onclick="">
                  Q: 적십자사에서 피 장사 한다...?
                </label>
                <table className="hosList12">
                  <tr id="hosUl2">
                    <td id="hosLi">
                      <span>
                        <span id="redColor">A:</span> 많은 사람들이 아직도
                        혈액사업에 대해 많은 오해를 가지고 있습니다.
                        <br />
                        가장 많은 오해가 바로 혈액을 병원에 공급하고 받는
                        혈액수가와 연관된 부분일 것입니다.
                        <br />
                        대한적십자사는 혈액관리에 사용되는 재원을 혈액수가에만
                        의존하고 있으며, 국민들이 지로 형태로 납부하는
                        적십자회비와는 전혀 무관합니다.
                        <br />
                        혈액수가는 혈액원의 인건비, 의료품비, 기념품비, 헌혈의
                        집 임대비등 운영비와 홍보비 등에 사용되며,
                        <br /> 우리나라의 혈액수가는 일본, 미국 등 주요
                        OECD국가의 1/4 수준입니다.
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <hr style={{ height: "5px", color: "#000" }}></hr>
            <button id="top2" onClick={scrollToTop} type="button" > Top</button>
            <br></br><br></br>
          </div>
        </div>
     
    );
}

export default QnAQuestion;