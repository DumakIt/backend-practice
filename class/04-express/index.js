// const express = require("express");  // commonjs 방식
import express from "express"; // module 방식

const app = express();

// 상품 구매하기 api
app.post("/products/buy", (req, res) => {
  // 1. 가진 돈 검증하는 코드 (했다고 가정)

  // 2. 판매여부 검증하는 코드 (했다고 가정)

  // 3. 상품 구매하는 코드
  if (돈있음 && !판매완료) {
    res.send("상품 구매 완료!");
  }
});

// 상품 환불하기 api
app.post("/products/refund", (req, res) => {
  // 1. 구매 완료 했었는지 검증 (했다고 가정)

  // 2. 상품 환불하는 코드
  if (구매완료) {
    res.send("환불 완료");
  }
});

app.listen(3000);
