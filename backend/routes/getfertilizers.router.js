const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Fertilizer = require("../models/fertilizer.model");

app.use(cors());
app.use(bodyParser.json());

router.route("/getfertilizers").get(function (req, res) {
  Fertilizer.find(function (err, fertilizers) {
    if (err) {
      console.log(err);
    } else {
      res.json(fertilizers);
    }
  });
});

router.route("/getfertilizer/:id").get(function (req, res) {
  let id = req.params.id;
  Fertilizer.findById(id, function (err, fertilizer) {
    res.json(fertilizer);
  });
});

module.exports = router;
