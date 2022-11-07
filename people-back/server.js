
const mysql = require('mysql');
const axios = require("axios");
const fs = require('fs');
const express = require("express");
var parseurl = require('parseurl')
const app = express();
const cors = require('cors');
cookieParser = require('cookie-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const redis = require('redis');
const client = redis.createClient();
var FileStore = require('session-file-store')(session);
const crypto = require('crypto'); // Node.js 내장 모듈이며, 여러 해시 함수를 통한 암호화 기능을 제공
var bodyParser = require('body-parser');
var SHA256 = require("crypto-js/sha256"); // 암호화
const salt = crypto.randomBytes(128).toString('base64'); // 난수 생성
axios.defaults.withCredentials = true;

const indexRouter = require("./routes/index");


app.use(express.static(__dirname));
// app.use(
//   cors({
//     origin: ['http://localhost:3000'],
//     credentials: true,
//   }),
// );

// sql 연동
const db = mysql.createConnection({
    user: 'people',
    host: 'awseb-e-vj5pexrasv-stack-awsebrdsdatabase-lprvp3o1hbyu.c2k4cktruffj.ap-northeast-2.rds.amazonaws.com',
    password: 'ks29850850',
    database: 'people'
});


var sessionStore = new MySQLStore(db); 


// var cors = require('cors');
app.use(cors());

app.use("/", indexRouter);
// app.use(cors({
//   origin: true, // 출처 허용 옵션
//   credential: true // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
// }));

// 잘 연동 되었는지 확인
db.connect(function(err) { 
    if(err) throw err;
    console.log('DB is Connected!')
});

// cookie and session assign middleWare
app.use(cookieParser());


//세션
// app.use(session({
//   secret: 'vlvmfxlaaksakstp!!!@', //암호화하는 데 쓰일 키
//   resave: false,  //세션을 언제나 저장할지 설정함
//   saveUninitialized: true, //세션이 저장되기 전 uninitialized 상태로 미리 만들어 저장
//   key: "blood",
  // store: new MySQLStore({  
  //   host:"localhost",
  //   port: 3001,
  //   user: 'root',
  //   password: '1234',
  //   database: 'minje'
  // })
//   store:new FileStore(), 
//   cookie: {
//     maxAge: 1000 * 60 * 60, // 쿠키 유효기간 1시간
//   },
//   rolling : true //페이지 이동 시 세션 만료 시간 갱신
// }))

app.get('/', (req, res, next) => {  
  console.log(req.session);
  if(req.session.num === undefined) {
    req.session.num = 1;
  }else{
    req.session.num = req.session.num+1;
  }
	res.send(`View: ${req.session.num}`);
});


// app.get("/", (req, res) =>{
// res.send("이거는 루트입니다.")
// });

app.listen(3001, function() {
    console.log("Server is running");
});

// API Server
app.get('/user', (req, res) => {
    var sql = 'SELECT * FROM user;'
    db.query(sql,
    (err, result) => {
        if (err)
            console.log(err);
        else
            res.send(result);
    });
})

// 연령별 통계
app.get("/age", function (req, res) {
    axios
      .get(
        "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=MzkwZGYwNmRlOTJjYzNmOWI0NGQ3MWRlZDBmNGZmMTE=&itmId=T002+&objL1=0+&objL2=A001+A002+A003+A004+A005+A006+A007+&objL3=C01+&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&newEstPrdCnt=1&prdInterval=1&orgId=445&tblId=DT_445001_003"
      )
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // 월별 통계
  app.get("/month", function (req, res) {
    axios
      .get(
        "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=MzkwZGYwNmRlOTJjYzNmOWI0NGQ3MWRlZDBmNGZmMTE=&itmId=T002+&objL1=0+&objL2=A001+A002+A003+A004+A005+A006+A007+A008+A009+A010+A011+A012+A013+&objL3=C01+&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&newEstPrdCnt=1&prdInterval=1&orgId=445&tblId=DT_445001_002"
      )
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  
  // 혈액형별 통계
  app.get("/bloodType", function (req, res) {
    axios
      .get(
        "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=MzkwZGYwNmRlOTJjYzNmOWI0NGQ3MWRlZDBmNGZmMTE=&itmId=T002+&objL1=0+&objL2=A0101+A0102+A0103+A0104+&objL3=C01+&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&newEstPrdCnt=1&prdInterval=1&orgId=445&tblId=DT_445001_006"
      )
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // 인구별 통계
  app.get("/total", function (req, res) {
    axios
      .get(
        "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=MzkwZGYwNmRlOTJjYzNmOWI0NGQ3MWRlZDBmNGZmMTE=&itmId=T001+T002+T003+T004+T005+T006+T007+T008+&objL1=DATA&objL2=&objL3=&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&newEstPrdCnt=1&prdInterval=1&orgId=445&tblId=DT_445001_007"
      )
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // 지역별 통계
  app.get("/loc", function (req, res) {
    axios
      .get(
        "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=MzkwZGYwNmRlOTJjYzNmOWI0NGQ3MWRlZDBmNGZmMTE=&itmId=T002+&objL1=A00+A01+A02+A03+A04+A05+A06+A07+A08+A09+A10+A11+A12+A13+&objL2=&objL3=&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&newEstPrdCnt=1&prdInterval=1&orgId=445&tblId=DT_445001_013"
      )
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // const alertMove = (path, msg) => {
  //   return `<script>
  //     alert('${msg}')
  //     location.href  = "${path}"
  //     </script>`;
  // };

  app.use(bodyParser.json()); // 클라이언트의 요청 데이터 중 json객체를 파싱할 수 있게 하기 위함
  app.use(bodyParser.urlencoded({extended: true})); //URL을 통해 전달되는 데이터에 한글, 공백등과 같은 문자가 있을 때 제대로 인식하지 못하는 문제를 해결해줌
  
//회원가입
app.post('/join', (req, res) => {
  //파라미터를 받아오는 부분
  let email = req.query.email;
  let pw = crypto.createHash("sha512").update(req.query.pw).digest("base64");
  let nickName = req.query.nickName;
  let blood = req.query.blood;
  let area = req.query.area;
  let push = req.query.push;
  let values = [email, pw, nickName, blood, area, push]

  console.log(values)
  
  //SQL 코드
  const sql = "INSERT INTO joinUser(email, pw, nickName, blood, area, push) VALUES(?, ?, ? ,?, ?, ?)"
  db.query(sql, values,
      (err, result) => {
          if (err)
              console.log(err);
          else
              res.send(result);
      });
});

//로그인
app.post('/login', function(req, res) {
  let email = req.query.email;
  let pw = crypto.createHash("sha512").update(req.query.pw).digest("base64");
  let values = [email, pw]

  // console.log(values)
  //SQL 코드
  const sql = "Select nickName From joinUser WHERE email = ? AND pw = ?"
  db.query(sql, values,
    
      (err, result) => {
        
          if (err)
              console.log(err);
          if(result.length > 0) {
            console.log("로그인 성공");
            res.send(result); // 로그인에 성공하면 닉네임을, 실패하면 1을 반환
            console.log(result) 
                // req.session.loggedin = true;
                // req.session.email = email;
                // console.log(req.session);
          }else {
            res.send('1');
            console.log("로그인 실패");
          }
      });
});


//닉네임 중복 체크
app.post('/overlap', function(req, res) {
  let nickName = req.query.nickName;
  let values = [nickName]

  // console.log(values)
  //SQL 코드
  const sql = "Select * From joinUser WHERE nickName = ?"
  db.query(sql, values,
    
      (err, result, fields) => {
        
          if (err)
              console.log(err);
          if(result.length < 1) {
            console.log("없는 닉네임");
            res.send('0'); // 중복검사에 성공하면 0을, 실패하면 1을 반환
          }else {
            res.send('1');
            console.log("있는 닉네임");
            console.log(result)
          }
      });
});

//이메일 중복 체크
app.post('/emailOverlap', function(req, res) {
  let email = req.query.email;
  let values = [email]

  //SQL 코드
  const sql = "Select * From joinUser WHERE email = ?"
  db.query(sql, values,
    
      (err, result, fields) => {
        
          if (err)
              console.log(err);
          if(result.length < 1) {
            console.log("없는 이메일");
            res.send('0'); // 중복검사에 성공하면 0을, 실패하면 1을 반환
          }else {
            res.send('1');
            console.log("있는 이메일");
            console.log(result)
          }
      });
});

//세션 확인
// app.post('/session', function(req, res) {

//   console.log(req.session);

//   if(req.session.loggedin) {
//     console.log("세션 존재");
//     res.send('0'); // 세션이 존재하면 0을, 존재하지 않으면 1을 반환
//     console.log(req.session.user);
//   }else {
//     res.send('1');
//     console.log("세션 없음2");
//     console.log(req.session.user);
//   }
// });

//로그아웃
app.post('/logout', function(req, res) {

  if(req.session.loggedin){
        console.log('로그아웃');
        
        req.session.destroy(function(err){
            if(err) throw err;
            console.log('세션 삭제하고 로그아웃됨');
            res.send('0'); 
        });
    }
    else{
        res.send('1');
        console.log('로그인 상태 아님');
    }
  
});


app.post("/post", (req, res) => {
  //파라미터를 받아오는 부분
  let nickName = req.query.nickName; // 게시글 작성자
  let bloodType = req.query.bloodType; // 혈액형
  let bloodKind = req.query.bloodKind; // 혈액종류 (최대 3개까지)
  let patientName = req.query.patientName; // 환자 이름
  let registNum = req.query.registNum; // 수혈자 등록번호
  let hospital = req.query.hospital; // 지정병원
  let phonNum = req.query.phonNum; // 연락처
  let requestB = req.query.requestB; // 필요 개수
  let responseB = req.query.responseB; // 받은 개수
  let title = req.query.title; // 게시글 제목
  let content = req.query.content; // 게시글 내용
  let email = req.query.email;

  let values = [
    nickName,
    bloodType,
    bloodKind,
    patientName,
    registNum,
    hospital,
    phonNum,
    requestB,
    responseB,
    title,
    content,
    email,
  ];

  //console.log(values);

  //SQL 코드
  const sql =
    "INSERT INTO post(nickName, bloodType, bloodKind, patientName,registNum, hospital, phonNum, requestB, responseB, title, content, email) VALUES(?, ? ,?, ?, ?, ?, ?, ? ,?, ?, ?, ?)";
  db.query(sql, values, (err, insertResult) => {
    console.log(insertResult);
    //게시글의 혈액형을 가진 회원들의 email 가져오는 쿼리
    const emailsql = "select email from joinUser where blood=? AND push = 'true'";
    db.query(emailsql, bloodType, (err, result) => {
      if (err) console.log(err);
      else {
        axios
          .get("http://people-env.eba-35362bbh.ap-northeast-2.elasticbeanstalk.com:3001/email", {
            params: {
              emails: result.map((row) => {
                return row.email;
              }),
              postKey: insertResult.insertId, //insert 쿼리의 결과의 객체에 insertId라는 키값이 있음
            },
          })
          .then((response) => {
            //console.log(response);
          });
      }
    });
    if (err) console.log(err);
    else res.send(insertResult);
  });
});


//게시글 수정
app.post('/modify', (req, res) => {
   //파라미터를 받아오는 부분
  let postkey = req.query.postkey;
  let bloodType = req.query.bloodType; // 혈액형
  let bloodKind = req.query.bloodKind; // 혈액종류 (최대 3개까지)
  let patientName = req.query.patientName; // 환자 이름
  let registNum = req.query.registNum; // 수혈자 등록번호
  let hospital = req.query.hospital; // 지정병원
  let phonNum = req.query.phonNum; // 연락처
  let requestB = req.query.requestB; // 필요 개수
  let title = req.query.title; // 게시글 제목
  let content = req.query.content; // 게시글 내용


  let values = [bloodType, bloodKind, patientName, registNum,
    hospital, phonNum, requestB, title, content, postkey]

  console.log(values)
  //SQL 코드
  const sql = "UPDATE post SET  bloodType = ?, bloodKind = ?, patientName = ?, registNum = ?,  hospital = ?, phonNum = ?, requestB = ?, title = ?, content = ? Where postkey = ?"
  db.query(sql, values,
      (err, result) => {
          if (err)
              console.log(err);
          else
              res.send(result);
      });
});

//게시글 삭제
app.post('/delete', (req, res) => {
  //파라미터를 받아오는 부분
  let postkey = req.query.postkey;

  let values = [postkey]

 console.log(values)
 // 게시글 nickname과 동일한 nickname이 mysql에 있는지 확인
 //SQL 코드
 const sql = "DELETE FROM post WHERE postkey = ?"
 db.query(sql, values,
     (err, result) => {
         if (err)
             console.log(err);
         else
             res.send(result);
     });
});

// 이메일을 받아 유저 정보 반환(마이페이지)
app.post('/userInfo', (req, res) => {
  //파라미터를 받아오는 부분
  let email = req.query.email;

  let values = [email]

 console.log(values)
 //SQL 코드
 const sql = "Select * From joinUser Where email = ?"
 db.query(sql, values,
     (err, result) => {
      console.log(result)
         if (err)
             console.log(err);
         else
             res.send(result);
     });
});

//유저 정보 수정
app.post('/userModify', (req, res) => {
  let email = req.query.email;
  let nickName = req.query.nickName;
  let blood = req.query.blood;
  let area = req.query.area;
  let push = req.query.push;
  let values = [nickName, blood, area, push, email]

  console.log(values)
 //SQL 코드
 const sql = "UPDATE joinUser SET nickName = ?, blood = ?, area = ?, push = ? Where email = ?"
 db.query(sql, values,
     (err, result) => {
      
      console.log(result)
         if (err)
             console.log(err);
         else
         console.log(sql)
             res.send(result);
     });
});


//유저 비밀번호 수정
app.post('/userPw', (req, res) => {
  let email = req.query.email;
  let pw = crypto.createHash("sha512").update(req.query.pw).digest("base64");

  let values = [pw, email]

  console.log(values)
 //SQL 코드
 const sql = "UPDATE joinUser SET pw = ? Where email = ?"
 db.query(sql, values,
     (err, result) => {
      
      console.log(result)
         if (err)
             console.log(err);
         else
         console.log(sql)
             res.send(result);
     });
});


//게시글 리스트 만들 때 보여야 할 것들 반환
app.post('/postList',(req, res) => {
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute  From post Order By postkey DESC"
  db.query(sql,
    (err, result) => {
     console.log(result)
        if (err)
            console.log(err);
        else
        // console.log(result);
        res.send(result);
    });
});

//A형 게시글 리스트
app.post('/bloodA',(req, res) => {
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where bloodType = 'A' OR bloodType = 'A-' Order By postkey DESC"
  db.query(sql, 
    (err, result) => {
     console.log(sql)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

//B형 게시글 리스트
app.post('/bloodB',(req, res) => {
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where bloodType = 'B' OR bloodType = 'B-' Order By postkey DESC"
  db.query(sql, 
    (err, result) => {
     console.log(result)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

//O형 게시글 리스트
app.post('/bloodO',(req, res) => {
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where bloodType = 'O' OR bloodType = 'O-' Order By postkey DESC"
  db.query(sql, 
    (err, result) => {
     console.log(result)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

//AB형 게시글 리스트
app.post('/bloodAB',(req, res) => {
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where bloodType = 'AB' OR bloodType = 'AB-' Order By postkey DESC"
  db.query(sql, 
    (err, result) => {
     console.log(result)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

// 게시글 상세 페이지
app.post('/postView', (req, res) => {
  //파라미터를 받아오는 부분
  let postkey = req.query.postkey;

  let values = [postkey]

//  console.log(values)
 //SQL 코드
 const sql = "Select bloodType, bloodKind, patientName, hospital, phonNum, requestB, responseB, title, content, nickName, registNum, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where postkey = ?"
 db.query(sql, values,
     (err, result) => {
      // console.log(sql)
         if (err)
             console.log(err);
         else
             res.send(result);
     });
});


//키값을 받아서 이메일 반환
app.post('/deleteNick', function(req, res) {
  let postkey = req.query.postkey;
  let values = [postkey]

  //SQL 코드
  const sql = "Select email From post WHERE postkey = ?"
  db.query(sql, values,
    
      (err, result) => {
        
          if (err)
              console.log(err);
          if(result.length > 0) {
            console.log("이메일 반환 성공");
            res.send(result);
            console.log(result) 
          }else {
            res.send('1');
            console.log("반환 실패");
          }
      });
});


//수정할 게시글의 키값을 받아서 전체 데이터 반환
app.post('/modifyInfo', function(req, res) {
  let postkey = req.query.postkey;
  let values = [postkey] 
  console.log(values)
  //SQL 코드
  const sql = "Select * From post WHERE postkey = ?"
  db.query(sql, values,
    (err, result) => {
      console.log(result)
         if (err)
             console.log(err);
         else
             res.send(result);
     });
});


//게시글의 키값을 받아 해당하는 댓글 반환
app.post('/replyShow', function(req, res) {
  let postkey = req.query.postkey;
  let values = [postkey] 
  console.log(values)
  //SQL 코드
  const sql = "Select email, nickName, replyContent, replyType, bloodType, bloodKind, hospital, bloodDate, year(replyDate) as year, month(replyDate) as month, day(replyDate) as day, hour(replyDate) as hour, minute(replyDate) as minute  From reply WHERE postkey = ?"
  db.query(sql, values,
    (err, result) => {
      console.log(result)
         if (err)
             console.log(err);
         else
             res.send(result);
     });
});


//댓글 달기
app.post('/reply', (req, res) => {
  //파라미터를 받아오는 부분
  let postkey = req.query.postkey; 
  let email = req.query.email;
  let nickName = req.query.nickName;
  let replyContent = req.query.replyContent;
  let replyType = req.query.replyType;
  
  let values = [postkey, email, nickName, replyContent, replyType]

  console.log(values)
  
  //SQL 코드
  const sql = "INSERT INTO reply(postkey,email, nickName, replyContent, replyType) VALUES(?, ? ,?, ?, ?)"
  db.query(sql, values,
      (err, result) => {
          if (err) {
              console.log(err);
              res.send("1");
          }
          else
              res.send("0");
      });
});

//헌혈증서 완료 댓글 달기
app.post('/reply2', (req, res) => {
  //파라미터를 받아오는 부분
  let postkey = req.query.postkey; 
  let email = req.query.email;
  let nickName = req.query.nickName;
  let replyContent = req.query.replyContent;
  let bloodType = req.query.bloodType; 
  let bloodKind = req.query.bloodKind; 
  let hospital = req.query.hospital; 
  let bloodDate = req.query.bloodDate; 
  let values = [postkey, email, nickName, replyContent, bloodType, bloodKind, hospital, bloodDate]

  console.log(values)
  
  //SQL 코드
  const sql = "INSERT INTO reply(postkey,email, nickName, replyContent, bloodType, bloodKind, hospital, bloodDate) VALUES(?, ? ,?, ?, ?, ?, ?, ?)"
  db.query(sql, values,
      (err, result) => {
          if (err) {
              console.log(err);
              res.send("1");
          }
          else
              res.send("0");
      });
});

// 게시글 검색
app.post('/search',(req, res) => {
  let search = req.query.search;

  let values = [search, search]
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where title Like ? OR patientName like ? Order By postkey DESC"
  db.query(sql, values,
    (err, result) => {
     console.log(result)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

//스크랩 하기
app.post('/scrap', (req, res) => {
  //파라미터를 받아오는 부분
  let postkey = req.query.postkey; 
  let email = req.query.email;
  let nickName = req.query.nickName;
  
  let values = [postkey, email, nickName]

  
  //SQL 코드
  const sql = "INSERT INTO scrap2(postkey,email, nickName) VALUES(?, ? ,?)"
  db.query(sql, values,
      (err, result) => {
          if (err) {
              console.log(err);
              res.send("1");
          }
          else
              res.send("0");
      });
});

//스크랩 확인
app.post('/scrapCheck', (req, res) => {
  //파라미터를 받아오는 부분
  let postkey = req.query.postkey; 
  let email = req.query.email;
  let nickName = req.query.nickName;
  
  let values = [postkey, email, nickName]

  console.log("스크랩 체크")
  
  //SQL 코드
  const sql = "Select * From scrap2 Where postkey = ? AND email = ? AND nickName = ?"
  db.query(sql, values,
    (err, result, fields) => {
      if (err)
          console.log(err);
      if(result.length === 0) {
        res.send('0'); // 중복검사에 성공하면 0을, 실패하면 1을 반환
        console.log("0")
      }else {
        res.send('1');
        console.log("1")
      }
  });
});

//스크랩 삭제
app.post('/scrapDelete', (req, res) => {
  //파라미터를 받아오는 부분
  let postkey = req.query.postkey; 
  let email = req.query.email;
  let nickName = req.query.nickName;
  
  let values = [postkey, email, nickName]

  console.log(values)
  
  //SQL 코드
  const sql = "DELETE FROM scrap2 WHERE postkey = ? AND email = ? AND nickName = ?"
  db.query(sql, values,
      (err, result) => {
          if (err)
              console.log(err);
          else
              res.send(result);
      });
 });


 //마이페이지 내 게시글 리스트
app.post('/myPost',(req, res) => {
  let email = req.query.email;
  let values = [email]

  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where email = ? Order By postkey DESC"
  db.query(sql, values,
    (err, result) => {
     console.log(result)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

 //마이페이지 내 스크랩 리스트
 app.post('/myScrap',(req, res) => {
  let email = req.query.email;
  let values = [email]
  const sql= "Select post.postkey, post.bloodType, post.bloodKind, post.patientName, post.hospital, post.requestB, post.responseB, post.title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Join scrap2 ON post.postkey = scrap2.postkey Where scrap2.email = ? Order By postkey DESC"
  db.query(sql, values,
    (err, result) => {
     console.log(sql)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

 //마이페이지 내 댓글 리스트
 app.post('/myReply',(req, res) => {
  let email = req.query.email;
  let values = [email]
  const sql= "Select DISTINCT  post.postkey, post.bloodType, post.bloodKind, post.patientName, post.hospital, post.requestB, post.responseB, post.title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Join reply ON post.postkey = reply.postkey Where reply.email = ? Order By postkey DESC"
  db.query(sql, values,
    (err, result) => {
     console.log(sql)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});


//헌혈증서 입력 하기
app.post('/certificate', (req, res) => {
  //파라미터를 받아오는 부분
  let postkey = req.query.postkey;
  let bloodNum = req.query.bloodNum;
  let bloodNum2 = req.query.bloodNum2;
  let bloodNum3 = req.query.bloodNum3;
  let bloodNum4 = req.query.bloodNum4;
  let email = req.query.email;
  let nickName = req.query.nickName;
  let bloodType = req.query.bloodType; 
  let bloodKind = req.query.bloodKind; 
  let hospital = req.query.hospital; 
  let bloodDate = req.query.bloodDate; 

  let values = [postkey, bloodNum, bloodNum2, bloodNum3, bloodNum4, email, nickName, bloodType, bloodKind, hospital, bloodDate]

  
  //SQL 코드
  const sql = "INSERT INTO certificate(postkey, bloodNum, bloodNum2, bloodNum3, bloodNum4, email, nickName, bloodType, bloodKind, hospital, bloodDate) VALUES(?, ? ,?, ?, ?, ?, ?, ?, ?, ?, ?)"
  db.query(sql, values,
      (err, result) => {
        console.log(sql)
          if (err) {
              console.log(err);
              res.send("1");
          }
          else
              res.send("0"); //헌혈증서 등록에 성공했다면 1을 반환
      });
});


//헌혈증서 등록시 받은 수량 1증가
app.post('/responsePlus', (req, res) => {
  //파라미터를 받아오는 부분
 let postkey = req.query.postkey;

 let values = [postkey]

 console.log(values)
 //SQL 코드
 const sql = "UPDATE post SET responseB = responseB+1 Where postkey = ?"
 db.query(sql, values,
     (err, result) => {
      console.log(sql)
         if (err)
             console.log(err);
         else
             res.send(result);
     });
});


// 게시글 검색 A
app.post('/searchA',(req, res) => {
  let search = req.query.search;

  let values = [search, search]
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where (bloodType = 'A' OR bloodType = 'A-') AND (title Like ? OR patientName like ?) Order By postkey DESC"
  db.query(sql, values,
    (err, result) => {
     console.log(sql)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

// 게시글 검색 B
app.post('/searchB',(req, res) => {
  let search = req.query.search;

  let values = [search, search]
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where (bloodType = 'B' OR bloodType = 'B-') AND (title Like ? OR patientName like ?)  Order By postkey DESC"
  db.query(sql, values,
    (err, result) => {
     console.log(sql)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

// 게시글 검색 AB
app.post('/searchAB',(req, res) => {
  let search = req.query.search;

  let values = [search, search]
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where (bloodType = 'AB' OR bloodType = 'AB-') AND (title Like ? OR patientName like ?) Order By postkey DESC"
  db.query(sql, values,
    (err, result) => {
     console.log(result)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

// 게시글 검색 O
app.post('/searchO',(req, res) => {
  let search = req.query.search;

  let values = [search, search]
  const sql= "Select postkey, bloodType, bloodKind, patientName, hospital, requestB, responseB, title, year(postDate) as year, month(postDate) as month, day(postDate) as day, hour(postDate) as hour, minute(postDate) as minute From post Where (bloodType = 'O' OR bloodType = 'O-') AND (title Like ? OR patientName like ?) Order By postkey DESC"
  db.query(sql, values,
    (err, result) => {
     console.log(result)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

// 마이페이지 내 헌혈 상황
app.post('/Myblood',(req, res) => {
  let email = req.query.email;

  let values = [email]
  const sql= "select COUNT(CASE WHEN bloodKind='전혈' THEN 1 END) AS one, COUNT(CASE WHEN bloodKind='성분채혈 혈소판' THEN 2 END) AS two, COUNT(CASE WHEN bloodKind='혈장' THEN 3 END) AS three, COUNT(CASE WHEN bloodKind='농축적혈구' THEN 4 END) AS four, COUNT(CASE WHEN bloodKind='성분채혈 백혈구' THEN 5 END) AS five, COUNT(CASE WHEN bloodKind='백혈구여과제거적혈구' THEN 6 END) AS six From certificate Where email = ?"
  db.query(sql, values,
    (err, result) => {
     console.log(result)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});

//비밀번호 찾기
app.post("/findPassword", (req, res) => {
  const randomBytes = require("crypto").randomBytes(3);
  const number = parseInt(randomBytes.toString("hex"), 16);
  console.log(number);
  const search = req.query.email;
  console.log(search);
  const emailsql = "Select email From joinUser";
  db.query(emailsql, (err, result) => {
    console.log(result);
    const is = result.reduce((accumulator, curOb) => {
      if (curOb.email === search) {
        axios({
          method: "POST",
          url: "https://api.emailjs.com/api/v1.0/email/send",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            service_id: "service_tzwp6m8",
            template_id: "template_zgxzu37",
            user_id: "C1MRgJAEshwlNYlB_",
            accessToken: "P96u_pz-h5XviRqJd-Q0Z",
            template_params: {
              from_name: "지정헌혈",
              toEmail: search,
              newPassword: number,
            },
          },
        })
          .then((result) => {
            const pw = crypto
              .createHash("sha512")
              .update(number + "")
              .digest("base64");
            const values = [pw, search];
            const sql = "UPDATE joinUser SET pw = ? WHERE email = ?";

            db.query(sql, values, (err, result) => {
              //console.log(result);
              if (err) console.log(err);
            });
          })
          .catch(function (error) {
            console.log(error);
          });
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
    console.log(is);
    if (err) console.log(err);
    res.send({ result: is });
  });
});


// 게시글 작성자 시점 헌혈증서 목록
app.post('/certificateShow',(req, res) => {
  let postkey = req.query.postkey;

  let values = [postkey]
  const sql= "Select * From certificate Where postkey = ?"
  db.query(sql, values,
    (err, result) => {
     console.log(sql)
        if (err)
            console.log(err);
        else
        console.log(result);
        res.send(result);
    });
});