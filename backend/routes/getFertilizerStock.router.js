const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let FertilizerStock = require("../models/fertilizerStock.model");

app.use(cors());
app.use(bodyParser.json());

router.route("/getfertilizerstocks").get(function (req, res) {
  FertilizerStock.find(function (err, fertilizers) {
    if (err) {
      console.log(err);
    } else {
      res.json(fertilizers);
    }
  });
});

router.route("/getfertilizerstock/:id").get(function (req, res) {
  let id = req.params.id;
  FertilizerStock.findById(id, function (err, fertilizer) {
    res.json(fertilizer);
  });
});

module.exports = router;
