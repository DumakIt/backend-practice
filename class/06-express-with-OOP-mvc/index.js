// const express = require("express");  // commonjs 방식
import express from "express"; // module 방식
import { ProductController } from "./mvc/controllers/product.controller.js";

const app = express();

// 상품 api
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 api
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 api

// 게시판 api
// app.get("/boards/...")

app.listen(3000);
