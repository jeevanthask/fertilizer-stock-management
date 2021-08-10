const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Farmer = require("../models/farmers.model");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route("/addfarmer").post(function (req, res) {
  let farmer = new Farmer(req.body);
  farmer
    .save()
    .then((farmer) => {
      res.status(200).json({ farmer: "farmer added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding farmer failed");
    });
});

module.exports = router;
