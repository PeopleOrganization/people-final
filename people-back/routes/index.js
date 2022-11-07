const axios = require("axios");
const qs = require("qs");
const nodeGeocoder = require("node-geocoder");
const cors = require("cors");

var express = require("express");
var router = express.Router();
//시작하려면 터미널에 nodemon start
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
//kosis통계(테스트용)
router.get("/api", function (req, res) {
  axios
    .get(
      "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=MTFjZDU4MDllZjcyY2RmMjM4MTAwMmVlOGRmMDVjZDk=&itmId=T002+&objL1=0+&objL2=A001+A002+A003+A004+A005+A006+A007+&objL3=C02+&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&newEstPrdCnt=1&orgId=445&tblId=DT_445001_003"
    )
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
//지정헌혈 email 보내기
router.get("/email", async function (req, res) {
  console.log("이메일 쿼리");
  console.log(req.query.emails);
  res.status(200).json({ result: "이메일 보냄" });
  req.query.emails.forEach((email) => {
    axios({
      method: "POST",
      url: "https://api.emailjs.com/api/v1.0/email/send",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        service_id: "service_tzwp6m8",
        template_id: "template_hrccsla",
        user_id: "C1MRgJAEshwlNYlB_",
        accessToken: "P96u_pz-h5XviRqJd-Q0Z",
        template_params: {
          from_name: "지정헌혈",
          email: email,
          link: `http://people-donate.surge.sh/BoardView${req.query.postKey}`,
        },
      },
    })
      .then((result) => {
        console.log(email + "로 이메일 보냄");
      })
      .catch(function (error) {
        console.log("이메일 보내기 실패");
      });
  });
});

//헌혈의집 데이터 응답
router.get("/bloodhouse", function (req, res) {
  const options = {
    provider: "google",
    apiKey: "AIzaSyBIgZoVqTFMhUuZj2l0bFRkQsPoXWRVFI0",
  };
  const geocoder = nodeGeocoder(options);
  async function geocoding(arr) {
    const locs = await Promise.all(
      arr.map(async (loc) => {
        try {
          const location = await geocoder.geocode(loc["주소지"]);
          return {
            lat: location[0].latitude,
            long: location[0].longitude,
            tel: loc["전화번호"],
            address: loc["주소지"],
          };
        } catch (err) {
          console.log(loc);
          return {};
        }
      })
    );
    return locs;
  }
  axios
    .get(
      "https://api.odcloud.kr/api/15050729/v1/uddi:e747bbad-2d92-40eb-912d-b9824ca52dbd?page=1&perPage=200&serviceKey=YHz0QiU%2BTZ5Kdd%2FJDE2JkegQKG2EGpZUVrlIgzivmNvUDBoDfy6%2BIFUYuPAkklmoPX87bdG%2BvgMGmMuF9Qavxw%3D%3D"
    )
    .then(async (result) => {
      const locs = await geocoding(result.data["data"]);
      res.status(200).json(locs);
    })
    .catch(function (error) {
      console.log(error);
    });
});
//다른 시설들 요청 응답하는 데 쓰는 지오코딩 함수
async function geocodingjson(arr) {
  const options = {
    provider: "google",
    apiKey: "AIzaSyBIgZoVqTFMhUuZj2l0bFRkQsPoXWRVFI0",
  };
  const geocoder = nodeGeocoder(options);
  const locs = await Promise.all(
    arr.map(async (loc) => {
      try {
        const location = await geocoder.geocode(loc["address"]);
        return {
          lat: location[0].latitude,
          long: location[0].longitude,
          tel: loc["tel"],
          address: loc["address"],
        };
      } catch (err) {
        console.log(loc);
        return {};
      }
    })
  );
  return locs;
}
//다른 시설들 데이터 요청 응답
router.get("/blooddata", async function (req, res) {
  const blooddata = {
    cafe: require("./bloodcafedata.json"),
    bank: require("./bloodBankData.json"),
    hospital: require("./bloodHospitalData.json"),
  };
  console.log(req.query.req);
  if (req.query.req === "house") {
    await axios.get("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/bloodhouse").then((response) => {
      res.status(200).json(response.data);
    });
  } else {
    const locs = await geocodingjson(blooddata[req.query.req]);
    console.log(locs);
    res.status(200).json(locs);
  }
});

router.get("/geocodingtest", async function (req, res) {
  const options = {
    provider: "google",
    apiKey: "AIzaSyBIgZoVqTFMhUuZj2l0bFRkQsPoXWRVFI0",
  };
  const geocoder = nodeGeocoder(options);
  const location = await geocoder.geocode(
    "충남 아산시 번영로 215 우전빌딩 4층"
  );
  res.status(200).json("asdf");
});

module.exports = router;