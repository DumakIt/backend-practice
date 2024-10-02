// const express = require("express");  // commonjs 방식
import express from "express"; // module 방식
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { CashService } from "./mvc/controllers/services/cash.services.js";
import { ProductService } from "./mvc/controllers/services/product.services.js";
import { PointService } from "./mvc/controllers/services/point.services.js";

const app = express();

// 의존성 주입으로 발생하는 장점
// 1. new 한번으로 모든 곳에서 재서용 가능 (싱글톤패턴)
// 2. 의존성 주입으로 전부 한번에 변경가능
// 3. 읜존성 주입르로 쿠폰 구매 방식이 포인트결재로 변경가능

// 부가설명
// 1. ProductController가 CashService에 의존하고 있음 (CashService에 => 의존성)
//    => 이 상황을 "강하게 결합되어있다" 라고 표현
//    => tight-copling

// 2. 이를 개선하기 위해서 "느슨한 결합"으로 변경할 필요가 있음
//    => loose-coupling
//    => 이를 "의존성주입"으로 해결 (의존성주입: Dependency-Injection 줄여서 DI)
//    => 이 역활을 대신 해주는 Nest.js 기능: IoC 컨테이너 (알아서 new 해서 넣어줌, 즉 DI 해줌)
//                                    => IoC: Inversion-of-Control

// 3. "의존성주입"으로 "싱글톤패턴" 구현 가능해짐
//    => "의존성주입" 이면, "싱글톤패턴" 인가? 그건 아님

const cashService = new CashService();
const productService = new ProductService();
const pointService = new PointService();

// 상품 api
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 api
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 api

// 쿠폰(상품권) api
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon); // 상품권을 돈주고 구매하는 api

// 게시판 api
// app.get("/boards/...")

app.listen(3000);
