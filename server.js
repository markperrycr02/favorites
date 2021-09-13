//require("dotenv").config();

const { weblinks, getLinks } = require("./public/weblinks");

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css/"))
);

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  console.log(weblinks);
  res.render("index", { getLinks });
});

app.get("/api/weblinks/", (req, res) => {
  res.json(weblinks);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
