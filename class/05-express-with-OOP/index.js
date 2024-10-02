// const express = require("express");  // commonjs 방식
import express from "express"; // module 방식
import { CashService } from "./cash.js";
import { ProductService } from "./product.js";

const app = express();

// 상품 구매하기 api
app.post("/products/buy", (req, res) => {
  // 1. 가진 돈 검증하는 코드
  const cashServices = new CashService();
  const hasMoney = cashServices.checkValue();

  // 2. 판매여부 검증하는 코드
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout();

  // 3. 상품 구매하는 코드
  if (hasMoney && !isSoldout) {
    res.send("상품 구매 완료!");
  }
});

// 상품 환불하기 api
app.post("/products/refund", (req, res) => {
  // 1. 구매 완료 했었는지 검증
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout();

  // 2. 상품 환불하는 코드
  if (isSoldout) {
    res.send("환불 완료");
  }
});

app.listen(3000);
