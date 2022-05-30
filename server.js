var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

const fs = require("fs");

app.get("/", function (request, response) {
  const lg = request.query.lang;
    const rawdata = fs.readFileSync("./data/data.json");
    const data = JSON.parse(rawdata);
    // const lang =
    // lg && (lg.toLowerCase() === "vi" || lg.toLowerCase() === "en") ? lg : "en";
  response.render("noindex", { data: data });
  //   , { data: data[lang.toLowerCase()], lang: lang }
});
