// import express from "express";
// import cors from "cors";
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  try {
    // console.log(req.body);
    const { username, password } = req.body;
    const insert = await pool.query(
      "INSERT INTO users(name,password) values($1,$2) RETURNING *",
      [username, password]
    );
    if (insert !== undefined) {
      res.status(200).json({ loggedIn: "true", Data: insert });
    } else {
      res.status(500).json({ loggedIn: "true", Data: null });
    }
    // console.log(insert);
  } catch (error) {
    console.log(error);
  }
});
app.post("/login", async (req, res) => {
  try {
    // console.log(req.body);
    const { username, password } = req.body;
    const search = await pool.query(
      "SELECT *  FROM USERS WHERE name=$1 and password=$2",
      [username, password]
    );
    console.log(search);
    if (search !== undefined) {
      res.status(200).json({ loggedIn: "true", Data: search });
    } else {
      res.status(200).json({ loggedIn: "true", Data: search });
    }
    // console.log(insert);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.send("<h1>This is response</h1>");
});
app.listen(port, (req, res) => {
  console.log("you are live on ", port);
});
