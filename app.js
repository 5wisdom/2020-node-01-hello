var express = require('express');
var app = express();
var path = require('path');
//path 경로변경
//console.log(app);


app.listen(3000, function(){ /* 서버를 만듬 */
  // 3000번 포트에 연결성공하면 function을 실행하세요
  console.log("http://127.0.0.1:3000"); /* 127.0.0.1: 내주소 */
});

app.use(express.json());
//post방식으로 들어오는것을 json형태로 만들어주세요
app.use(express.urlencoded({extended: false}));
//요청들어온사항을 쿼리로 변경해주세요 기본노드사용할거라 false쓰면됨

//__dirname : node가 제공하는 글로벌 변수이다
//C:\Users\hi\Documents\저녁반\01.hello 절대경로를 보여줌
//console.log(__dirname); 

//C:\Users\hi\Documents\저녁반\01.hello + ./public 을 합쳐준다
//console.log(path.join(__dirname, './public'));
//루트로 요청이 들어오면 여기로 보내줘 절대 경로를 적어야만 한다.
//html 폴더에서 index파일을 public 바로 하위 파일로 있어햐만 바로 경로가 연결된다.
//public은 프론트엔드 영역이다.
app.use('/', express.static(path.join(__dirname, './public')));


// 웹페이지 두개를 만듬
app.get('/hello', function(req, res, next){
  res.send('<h1>Hello World</h1>');  
  //res를 안해주면 클라이언트는 계속 기다리게 된다. 30초 정도 돌다가 응답하지 않습니다가 뜬다
});
app.get('/5wisdom', function(req, res, next){
  res.send('<h1>Hello JIHYE</h1>');  
});

//터미널에 node app 치면 연결이 됐기 때문에 링크주소가 뜸
//주소를 잘못썼을때는 ctrl + c 취소 한다음에 다시 node app을 치면 된다
//노드js 컬리브레이스 ${  } -> php는 <?= ?>와 같다고 생각하기
app.get('/sample', function(req, res){
  var title = '샘플페이지';
  var content = 'Hello 샘플';
  var html = `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body>
    <h1>${content}</h1>
  </body>
  </html>
  `;
  res.send(html);
});

//get 은 query와 params 2가지로 받을수 있다
app.get('/search', function(req,res){
  var q = req.query.q;
  res.send(`<h1>당신이 요청한 쿼리는 ${q}</h1>`);
});

///user/:id 표지판같은 역할-> 라우터라고 부름 :id가 변수가 된다
app.get('/user/:id', function(req, res){
  var id = req.params.id; // params.id; 여러 파라메터중 id를 찾아라
  res.send(`<h1>안녕하세요! ${id}님</h1>`);
});


//postsms body로 받는다
app.post('/join', function(req, res){
  var userid = req.body.userid; 
  var userpw = req.body.userpw;
  res.send(`<h1>${userid} / ${userpw}</h1>`);
});

