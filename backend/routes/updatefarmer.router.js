const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

let Farmer = require("../models/farmers.model");

app.use(cors());
app.use(bodyParser.json());

router.put("/updatefarmer/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var farmer = {
    firstname: req.body.firstname,
    secondname: req.body.secondname,
    address: req.body.address,
  };
  Farmer.findByIdAndUpdate(
    req.params.id,
    { $set: farmer },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Farmer Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

module.exports = router;
