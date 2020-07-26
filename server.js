const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
const avenger = require("./src/routes/avenger");
const cors = require("cors");
const http = require("http");

const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const server = http.Server(app);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/avenger", avenger);

// require("./src/routes")(app, {});
server.listen(port, () => {
  console.log("server starts on port: " + port);
});
