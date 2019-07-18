const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const port = 8081;

// app.set("view engine", "nunjucks");

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.get("/", (req, res) => {
  res.render("index.html", {
    user: "yulin"
  });
});

app.get("/about", (req, res) => {
  res.send("Will host our nonprofit cause.");
});

app.get("/team", (req, res) => {
  res.send(
    "Will show all team members. Execs first, followed by members. Potential React use here"
  );
});

app.get("/announcements", (req, res) => {
  res.send("Will show announcements.");
});

app.get("/blog", (req, res) => {
  res.send("Will show blogs, complete with pictures and stuff.");
});

app.listen(port, () => console.log(`App running on localhost:${port}`));
