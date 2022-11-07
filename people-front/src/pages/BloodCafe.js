//구글맵키 AIzaSyBIgZoVqTFMhUuZj2l0bFRkQsPoXWRVFI0
import { useCallback, useEffect, useRef } from "react";
import axios from "axios";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function BloodCafe(props) {
  const mapElement = useRef(null);

  function geo() {
    //동기 처리로 위치정보 세팅 후 구글맵을 띄우도록 함
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("위도 : " + position.coords.latitude);
        console.log("경도: " + position.coords.longitude);
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        resolve(location);
      });
    });
    return promise;
  }

  // 컴포넌트가 마운트될 때, 수동으로 스크립트를 넣어줍니다.
  // ﻿이는 script가 실행되기 이전에 window.initMap이 먼저 선언되어야 하기 때문입니다.
  const loadScript = useCallback((url) => {
    const firstScript = window.document.getElementsByTagName("script")[0];
    const newScript = window.document.createElement("script");
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    firstScript?.parentNode?.insertBefore(newScript, firstScript);
  }, []);

  // const locs = [
  //   { lat: 36, lng: 127 },
  //   { lat: 37, lng: 128 },
  // ];
  // script에서 google map api를 가져온 후에 실행될 callback 함수
  const initMap = useCallback(async () => {
    const { google } = window;
    if (!mapElement.current || !google) return;
    const location = await geo();
    const map = new google.maps.Map(mapElement.current, {
      zoom: 17,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      },
      map,
    });

    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent("<h3>현재위치</h3>");
      infoWindow.open(map, marker);
    });

    const infoWindow = new google.maps.InfoWindow();
    axios
      .get(
        "http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/blooddata",
        { params: { req: "cafe" } }
      )
      .then((res) => {
        let num = 1;
        console.log(res["data"].length);
        res["data"].forEach((loc) => {
          try {
            const bhmarker = new google.maps.Marker({
              position: { lat: loc["lat"], lng: loc["long"] },
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              },
              map,
            });
            bhmarker.addListener("click", () => {
              infoWindow.close();
              infoWindow.setContent(
                `전화번호 : ${loc["tel"]}<br>주소 : ${loc["address"]}`
              );
              infoWindow.open(map, bhmarker);
            });
            console.log(num++);
          } catch (err) {
            console.log("error" + num);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const script = window.document.getElementsByTagName("script")[0];
    const includeCheck = script.src.startsWith(
      "https://maps.googleapis.com/maps/api"
    );

    // script 중복 호출 방지
    if (includeCheck) return initMap();

    window.initMap = initMap;
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBIgZoVqTFMhUuZj2l0bFRkQsPoXWRVFI0&callback=initMap&language=en"
    );
  }, [initMap, loadScript]);

  return (
    <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href2" href="BloodHouse">
            {" "}
            <li className="sidebarListItem2">헌혈의집</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodCafe">
            <li className="sidebarListItem2 active">헌혈카페</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodBank">
            <li className="sidebarListItem2">혈액원</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodHospital">
            <li className="sidebarListItem2">지정병원</li>
          </a>
          <br></br>
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            Top
          </button>
        </ul>
      </div>

      <div className="container">
        <h1 className="sidebarTitle">찾아보아요!</h1>
        <span align="center" className="hello">
          헌혈카페는 아늑하고 편안한 공간으로 구성되어 친구들과 차도 마시고
          <br></br>인터넷도 즐기며 편하게 쉬어갈 수 있는 헌혈+카페+문화의
          공간입니다.
        </span>
        <hr />

        <ui className="sidebarCircle">
          <ul className="sidebarList">
            <a className="href" href="BloodHouse">
              {" "}
              <li className="sidebarListItem">헌혈의집</li>
            </a>
            &nbsp;
            <a className="href" href="BloodCafe">
              <li className="sidebarListItem active">헌혈카페</li>
            </a>
            &nbsp;
            <a className="href" href="BloodBank">
              <li className="sidebarListItem">혈액원</li>
            </a>
            &nbsp;
            <a className="href" href="BloodHospital">
              <li className="sidebarListItem">지정병원</li>
            </a>
          </ul>
        </ui>

        <div className="others"></div>
        <div id="mapT">
          <div id="hosMap" ref={mapElement} style={{ minHeight: "600px" }} />
        </div>
      </div>
    </div>
  );
}

export default BloodCafe;
