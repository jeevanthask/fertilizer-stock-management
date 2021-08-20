const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

let Officer = require("../models/officer.model");

app.use(cors());
app.use(bodyParser.json());

router.delete("/deleteofficer/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Officer.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Officer Delete :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
