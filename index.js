const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const port = 3000;

// app.set("view engine", "nunjucks");
app.use(express.static('static'));

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/about", (req, res) => {
  res.send("Will host our nonprofit cause. Will host mission and stuff");
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

app.get("/apply/:position", (req, res) => {
  let position = req.params.position;
  if (position == "intern") {
    res.send("Applying to internship");
  } else if (position == "mentoring") {
    res.send("Applying to mentoring program");
  } else {
    res.send(`Page for ${req.params.position} does not exist!`);
  }
});

app.listen(port, () => console.log(`App running on localhost:${port}`));
