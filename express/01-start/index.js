// const express = require("express");  // commonjs 방식
import express from "express"; // module 방식

const app = express();

app.get("/test", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
