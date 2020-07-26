const express = require("express");
const router = express.Router();
const avengerCrud = require("../models/avenger");

router.get("/:avengerCode", (req, res) => {
  const { avengerCode } = req.params;
  let response = avengerCrud.getAvenger(avengerCode);
  res.send(response);
});

router.get("/", (req, res) => {
  let avengerList = avengerCrud.getAllAvenger();
  res.json(avengerList);
});
module.exports = router;
