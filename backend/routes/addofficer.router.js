const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Officer = require("../models/officer.model");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route("/addofficer").post(function (req, res) {
  let officer = new Officer(req.body);
  officer
    .save()
    .then((officer) => {
      res.status(200).json({ officer: "officer added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding officer failed");
    });
});

module.exports = router;
