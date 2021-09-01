const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

let FertilizerStock = require("../models/fertilizerStock.model");

app.use(cors());
app.use(bodyParser.json());

router.delete("/deletefertilizerstock/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  FertilizerStock.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Fertilizer Delete :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
