import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/sidebar.css'


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}


export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/age")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div id="bigContainer">
    <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href2" href="BloodChartTotal">
            {" "}
            <li className="sidebarListItem2">인구별</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodChartLoc">
            <li className="sidebarListItem2">지역별</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodChartMonth">
            <li className="sidebarListItem2">월별</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodChartBloodType">
            <li className="sidebarListItem2">혈액형별</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodChartAge">
            <li className="sidebarListItem2 active">연령별</li>
          </a>
          <br></br>
            <button id="top" onClick={scrollToTop} type="button" > Top</button>
        </ul>
    </div>
    <div className="container">
      <h1 className="sidebarTitle">알아볼까요?</h1>
      <span align="center" className="hello">
        연령별 헌혈 통계 데이터 현황을 확인 할 수 있습니다.
      </span>
      <hr />
      <ui className="sidebarCircle">
          <ul className="sidebarList">
            <a className="href" href="BloodChartTotal">
              {" "}
              <li className="sidebarListItem">인구별</li>
            </a>
            &nbsp;
            <a className="href" href="BloodChartLoc">
              <li className="sidebarListItem">지역별</li>
            </a>
            &nbsp;
            <a className="href" href="BloodChartMonth">
              <li className="sidebarListItem">월별</li>
            </a>
            &nbsp;
            <a className="href" href="BloodChartBloodType">
              <li className="sidebarListItem">혈액형별</li>
            </a>
            &nbsp;
            <a className="href" href="BloodChartAge">
              <li className="sidebarListItem active">연령별</li>
            </a>
          </ul>
        </ui>
        <div className="others3">
        <BarChart
          width={1200}
          height={600}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="C2_NM"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis type="number" domain={[0, 50]} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="DT" name='연령별(%)' fill="#DC143C" background={{ fill: "#eee" }} />
        </BarChart>
      </div>

      <div className="others2">
        <BarChart
          width={300}
          height={600}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="C2_NM"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis type="number" domain={[0, 50]} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="DT" name='연령별(%)' fill="#DC143C" background={{ fill: "#eee" }} />
        </BarChart>
      </div>

      </div>
    </div>
  );
}

 