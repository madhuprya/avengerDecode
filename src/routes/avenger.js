const express = require("express");
const router = express.Router();
const avengerCrud = require("../models/avenger");

router.get("/:numberString", (req, res) => {
  const { numberString } = req.params;
  let avenger = avengerCrud.getAvenger(numberString);
  res.json(avenger);
});

router.get("/", (req, res) => {
  let avengerList = avengerCrud.getAllAvenger();
  res.json(avengerList);
});
module.exports = router;
