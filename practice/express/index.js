import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get("/users", (req, res) => {
  const users = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1111-1111",
      personal: "111111-1111111",
      prefer: "https://naver.com",
    },
    {
      email: "bbb@gmail.com",
      name: "영희",
      phone: "010-2222-2222",
      personal: "222222-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "ccc@gmail.com",
      name: "훈이",
      phone: "010-3333-3333",
      personal: "333333-3333333",
      prefer: "https://naver.com",
    },
  ];
  res.send(users);
});

app.get("/starbucks", (res, req) => {
  const coffees = [
    { name: "아메리카노", kcal: 5 },
    { name: "카페라떼", kcal: 10 },
    { name: "콜드부루", kcal: 15 },
  ];

  req.send(coffees);
});

app.listen(3000);
