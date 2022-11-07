import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import  {useEffect} from "react";
//<Route path="/product/*" element={<Product />}></Route>
import Menu from "./components/menu";
import Footer from "./components/footer";
import Facilities from "./pages/Facilities";
import Board from "./pages/Board";
import BoardView from "./pages/BoardView";
import BoardWrite from "./pages/BoardWrite";
import Site from "./pages/Site";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BloodChartTotal from "./pages/BloodChartTotal";
import BloodChartMonth from "./pages/BloodChartMonth";
import BloodChartLoc from "./pages/BloodChartLoc";
import BloodChartAge from "./pages/BloodChartAge";
import BloodChartBloodType from "./pages/BloodChartBloodType";
import QnADesignated from "./pages/QnADesignated";
import QnAKnowledge from "./pages/QnAKnowledge";
import QnAQuestion from "./pages/QnAQuestion";
import MyPage from "./pages/MyPage";
import ScrollToTop from "./components/ScrollToTop";
import MyPage2 from "./pages/MyPage2";
import MyPage3 from "./pages/MyPage3";
import BoardModify from "./pages/BoardModify";
import BoardSearch from "./pages/BoardSearch";
import BoardA from "./pages/BoardA";
import BoardB from "./pages/BoardB";
import BoardAB from "./pages/BoardAB";
import BoardO from "./pages/BoardO";
import MyPagePost from "./pages/MyPagePost";
import MyPageScrap from "./pages/MyPageScrap";
import MyPageReply from "./pages/MyPageReply";
import "./menu.css";
import BoardSearchA from "./pages/BoardSearchA";
import BoardSearchB from "./pages/BoardSearchB";
import BoardSearchAB from "./pages/BoardSearchAB";
import BoardSearchO from "./pages/BoardSearchO";
import MyBlood from "./pages/MyBlood";
import FindPassword from "./pages/FindPassword.js";

function App() {
  
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Menu />
        <div style={{marginTop:"0.2%",}}></div>
        <div id="center"></div>
        <Routes>
          <Route path="/BoardSearchA" element={<BoardSearchA />}></Route>
          <Route path="/BoardSearchB" element={<BoardSearchB />}></Route>
          <Route path="/BoardSearchAB" element={<BoardSearchAB />}></Route>
          <Route path="/BoardSearchO" element={<BoardSearchO />}></Route>
          <Route path="MyBlood" element={<MyBlood />}></Route>
          <Route path="/FindPassword" element={<FindPassword />}></Route>
          <Route path="/MyPage2" element={<MyPage2 />}></Route>
          <Route path="/MyPage3" element={<MyPage3 />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="MyPage" element={<MyPage />}></Route>
          <Route path="MyPagePost" element={<MyPagePost />}></Route>
          <Route path="MyPageScrap" element={<MyPageScrap />}></Route>
          <Route path="MyPageReply" element={<MyPageReply />}></Route>
          <Route path="/BoardSearch" element={<BoardSearch />}></Route>
          <Route path="/BoardA" element={<BoardA />}></Route>
          <Route path="/BoardB" element={<BoardB />}></Route>
          <Route path="/BoardAB" element={<BoardAB />}></Route>
          <Route path="/BoardO" element={<BoardO />}></Route>s
          <Route path="/Facilities" element={<Facilities />}></Route>
          <Route path="/Board" element={<Board />}></Route>
          <Route path="/BoardView:postkey" element={<BoardView />} />
          <Route path="/BoardWrite" element={<BoardWrite />} />
          <Route path="/Site" element={<Site />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/BloodChartTotal" element={<BloodChartTotal />}></Route>
          <Route path="/BloodChartLoc" element={<BloodChartLoc />}></Route>
          <Route path="/BloodChartMonth" element={<BloodChartMonth />}></Route>
          <Route path="/BloodChartAge" element={<BloodChartAge />}></Route>
          <Route
            path="/BloodChartBloodType"
            element={<BloodChartBloodType />}
          ></Route>
          <Route path="BoardModify" element={<BoardModify />}></Route>
          <Route path="/QnADesignated" element={<QnADesignated />}></Route>
          <Route path="/QnAKnowledge" element={<QnAKnowledge />}></Route>
          <Route path="/QnAQuestion" element={<QnAQuestion />}></Route>
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
      <div style={{marginBottom:"0.2%",}}></div>
      <Footer />
    </div>
  );
}

export default App;
