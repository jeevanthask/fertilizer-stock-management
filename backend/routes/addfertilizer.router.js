const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Fertilizer = require("../models/fertilizer.model");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route("/addfertilizer").post(function (req, res) {
  let fertilizer = new Fertilizer(req.body);
  fertilizer
    .save()
    .then((fertilizer) => {
      res.status(200).json({ fertilizer: "fertilizer added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding fertilizer failed");
    });
});

module.exports = router;
