// const express = require("express");  // commonjs 방식
import express from "express"; // module 방식

const app = express();
app.use(express.json()); // 과거에는 bodyParser 사용

app.get("/boards", function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    { number: 1, writer: "철수", title: "철수 제목", contents: "철수 내용" },
    { number: 2, writer: "영희", title: "영희 제목", contents: "영희 내용" },
    { number: 3, writer: "훈이", title: "훈이 제목", contents: "훈이 내용" },
  ];

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result);
});

app.post("/boards", function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req.body);

  // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.listen(3000);
