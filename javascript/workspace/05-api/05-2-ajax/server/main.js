//단순 ajax 테스트

const express = require("express");
const bodyParser = require("body-parser");


//마지막에 추가해서 테스트
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

function sum(request, response, next) {
  console.log('sum..')

  // response.setHeader('Access-Control-Allow-Origin', '*');
  // response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

  let no = request.params.no;
  let result = 0
  for(let i=1; i<=no; i++){
    result += i
  }

  // response.setHeader("Content-Type", "text/plain;charset=utf-8");
  response.json({status: 200, result: result}); 
}

app.get("/sum/:no", sum);

app.post("/post_test", (request, response, next) => {
  console.log(request.body)
  response.json({status: 200, msg: 'post request success'})
})
app.get("/get_test", (request, response, next) => {
  console.log(request.query)
  response.json({status: 200, msg: 'get_test request success'})
})

app.get("/text_test", (request, response, next) => {
  console.log(`text_test, ${request.headers['accept']}`)
  response.send('text_test request success')
})

app.listen(PORT, () => {
  console.log(`1 listening at http://localhost:${PORT}`);
});
