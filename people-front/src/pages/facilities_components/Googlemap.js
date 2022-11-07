import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Googlemap(props) {
  const mapElement = useRef(null);
  const [list, setList] = useState([]);
  const [googlemap, setGooglemap] = useState();
  const [resData, setResData] = useState();

  const placeholder = {
    house: "헌혈의집",
    cafe: "헌혈카페",
    bank: "혈액원",
    hospital: "지정병원",
  };

  // function geo() {
  //   //동기 처리로 위치정보 세팅 후 구글맵을 띄우도록 함
  //   const promise = new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log("위도 : " + position.coords.latitude);
  //       console.log("경도: " + position.coords.longitude);
  //       const location = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       };
  //       resolve(location);
  //     });
  //   });
  //   return promise;
  // }

  //자동완성 창에서 주소 클릭하면 그 주소로 구글맵 이동
  function goAddress(address) {
    resData.forEach((data) => {
      if (data.address === address) {
        googlemap.setCenter({ lat: data.lat, lng: data.long });
        googlemap.setZoom(17);
      }
    });
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

  // script에서 google map api를 가져온 후에 실행될 callback 함수
  const initMap = useCallback(async () => {
    const { google } = window;
    if (!mapElement.current || !google) return;
    const map = new google.maps.Map(mapElement.current, {
      zoom: 17,
      center: {
        lat: 37.5558368,
        lng: 126.922818,
      },
    });
  

    const infoWindow = new google.maps.InfoWindow();
    axios
      .get("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/blooddata", {
        params: {
          req: new URLSearchParams(window.location.search).get("blood"),
        },
      })
      .then((res) => {
        setResData(res.data);
        res["data"].forEach((loc) => {
          try {
            //각 시설 마커
            const bhmarker = new google.maps.Marker({
              position: { lat: loc["lat"], lng: loc["long"] },
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              },
              map,
            });
            //마커 클릭시 설명 띄우기
            bhmarker.addListener("click", () => {
              infoWindow.close();
              infoWindow.setContent(
                `전화번호 : ${loc["tel"]}<br>주소 : ${loc["address"]}`
              );
              infoWindow.open(map, bhmarker);
            });
          } catch (err) {
            console.log(err);
          }
        });
        return { data: res["data"], gmap: map };
      })
      .then((res) => {
        setGooglemap(res.gmap);
        //console.log(res.data);
        setList(
          res.data.map((loc) => {
            return loc["address"] !== undefined ? loc["address"] : "";
          })
        );
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
    <div>
      <div className="others">
        <div align="center">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={list}
            onChange={(event, newValue) => {
              goAddress(newValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  placeholder[
                    new URLSearchParams(window.location.search).get("blood")
                  ]
                }
                onClick={(e) => {
                  e.target.value = "";
                }}
              />
            )}
          />
        </div>
        <br></br>
        <br></br>
        <div id="mapT">
          <div id="hosMap" ref={mapElement} style={{ minHeight: "600px" }} />
        </div>
      </div>
    </div>
  );
}

export default Googlemap;