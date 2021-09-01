const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let FertilizerStock = require("../models/fertilizerStock.model");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route("/addfertilizerstock").post(function (req, res) {
  let fertilizerstock = new FertilizerStock(req.body);
  fertilizerstock
    .save()
    .then((fertilizerstock) => {
      res
        .status(200)
        .json({ fertilizerstock: "fertilizer stock added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding fertilizerstock failed");
    });
});

module.exports = router;
