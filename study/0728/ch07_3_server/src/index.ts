// import { createServer } from "http";
import express from "express";
import {insertTest} from "./test/insertTest";
import { findTest } from "./test/findTest";

const hostname = "0.0.0.0",
  port = 3000;

const app = express();

app.get("/", (req, res) => {
  findTest();
  res.json({ message: "Hello express World!!" });
});

app.post("/", (req, res) => {
  insertTest();
  res.json({ message: "Hello express World!!" });
});

app.put("/", (req, res) => {
  res.json({ message: "Hello express World!!" });
});

app.delete("/", (req, res) => {
  // 
  res.json({ message: "Hello express World!!" });
});

app.listen(port, hostname, () =>
  console.log(`connect http://${hostname}:${port}`)
);

// createServer(app).listen(port, hostname, () =>
//   console.log(`connect http://${hostname}:${port}`)
// );