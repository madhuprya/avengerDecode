const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
const avenger = require("./src/routes/avenger");

const bodyParser = require("body-parser");
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/avenger", avenger);

// require("./src/routes")(app, {});
app.listen(port, () => {
  console.log("server starts on port: " + port);
});
module.exports = app;
