const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Farmer = require("../models/farmers.model");

app.use(cors());
app.use(bodyParser.json());

router.route("/getfarmers").get(function (req, res) {
  Farmer.find(function (err, farmers) {
    if (err) {
      console.log(err);
    } else {
      res.json(farmers);
    }
  });
});

router.route("/getfarmer/:id").get(function (req, res) {
  let id = req.params.id;
  Farmer.findById(id, function (err, farmer) {
    res.json(farmer);
  });
});

module.exports = router;
