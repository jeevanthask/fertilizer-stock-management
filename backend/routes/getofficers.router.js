const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Officer = require("../models/officer.model");

app.use(cors());
app.use(bodyParser.json());

router.route("/getofficers").get(function (req, res) {
  Officer.find(function (err, officers) {
    if (err) {
      console.log(err);
    } else {
      res.json(officers);
    }
  });
});

router.route("/getofficer/:id").get(function (req, res) {
  let id = req.params.id;
  Officer.findById(id, function (err, officer) {
    res.json(officer);
  });
});

module.exports = router;
