const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

//위치 지정으로 어디서나 실행가능하도록 만듬
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  //view로 파일 지정 안해도 됨 기본이 views
  res.render("home.ejs");
});

app.get("/cats", (req, res) => {
  const cats = ["blue", "rocket", "monty", "stephanie", "winston"];
  res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
