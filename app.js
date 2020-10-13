var express = require('express');
var app = express();

app.listen(3000, function(){ /* 서버를 만듬 */
  // 3000번 포트에 연결성공하면 function을 실행하세요
  console.log("http://127.0.0.1:3000"); /* 127.0.0.1: 내주소 */
});

// 웹페이지 두개를 만듬
app.get('/', function(req, res, next){
  res.send('<h1>Hello World</h1>');  
});
app.get('/5wisdom', function(req, res, next){
  res.send('<h1>Hello JIHYE</h1>');  
});

//터미널에 node app 치면 연결이 됐기 때문에 링크주소가 뜸
//주소를 잘못썼을때는 ctrl + c 취소 한다음에 다시 node app을 치면 된다