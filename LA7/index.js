const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/home", (req, res) => {
  res.send("Home page");
});
const PORT = 3000;
app.listen(3000, () => {
  console.log(`Server running on ${PORT}`);
});
